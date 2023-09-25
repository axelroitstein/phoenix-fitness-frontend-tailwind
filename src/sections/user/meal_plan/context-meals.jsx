'use client'
import { createContext, useState, useEffect } from 'react'

export const MealsContext = createContext(null)

export const MealsProvider = ({ children }) => {
  const [mealPlanData, setMealPlanData] = useState({})
  const [mealDays, setMealDays] = useState([
    { id: 'nada', day: 'nada' }
  ])
  const [addAvaibleDays, setAddAvaibleDays] = useState([
    'Lunes',
    'Martes',
    'Miércoles',
    'Jueves',
    'Viernes',
    'Sábado',
    'Domingo'
  ])
  const [clicked,setClicked] = useState(false)

   const addIndexAndSortDays = (days) => {

    const dayToIndex = {
      Lunes: 0,
      Martes: 1,
      Miércoles: 2,
      Jueves: 3,
      Viernes: 4,
      Sábado: 5,
      Domingo: 6,
    };

    const daysWithIndex = days.map((day) => ({
      name: day,
      index: dayToIndex[day],
    }));
  
    daysWithIndex.sort((a, b) => a.index - b.index);
    const sortedDays = daysWithIndex.map((day) => day.name);
    return sortedDays;
  };
  const addIndexAndSort = (mealDays) => {
    const dayToIndex = {
      Lunes: 0,
      Martes: 1,
      Miércoles: 2,
      Jueves: 3,
      Viernes: 4,
      Sábado: 5,
      Domingo: 6
    }
    const mealDaysWithIndex = mealDays.map((mealDay) => ({
      ...mealDay,
      index: dayToIndex[mealDay.day]
    }))
    mealDaysWithIndex.sort((a, b) => a.index - b.index)

    return mealDaysWithIndex
  }

  useEffect(()=>{
    console.log('Use Effect de ordenamiento de dias options')
    const  sortedMealOptions  = addIndexAndSortDays(addAvaibleDays)
    setAddAvaibleDays(sortedMealOptions)
  },[clicked])

  useEffect(() => {
    console.log('USEFEEECT')
    const sortedMealDays  = addIndexAndSort(mealDays)
    console.log(sortedMealDays)
    setMealDays(sortedMealDays)
  }, [clicked])

  return (
    <MealsContext.Provider
      value={{
        mealPlanData,
        setMealPlanData,
        mealDays,
        setMealDays,
        addAvaibleDays,
        setAddAvaibleDays,
        clicked,
        setClicked
      }}
    >
      {children}
    </MealsContext.Provider>
  )
}
