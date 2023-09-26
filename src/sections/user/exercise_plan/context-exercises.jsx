'use client'
import { createContext, useState, useEffect } from 'react'

export const ExercisesContext = createContext(null)

export const ExercisesProvider = ({ children }) => {
  //Estados
  const [exercisePlanData, setExercisePlanData] = useState({})
  const [exercisesDays, setExercisesDays] = useState([
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
  const [clicked, setClicked] = useState(false)

  // Use effect que ordena dias disponibles:
  useEffect(() => {
    const sortedExercisesOptions = addIndexAndSortDays(addAvaibleDays)
    setAddAvaibleDays(sortedExercisesOptions)
  }, [clicked])
  // Use effect que ordena dias de ejercicios:
  useEffect(() => {
    const sortedExercisesDays = addIndexAndSort(exercisesDays)
    setExercisesDays(sortedExercisesDays)
  }, [clicked])

  //Funciones ordenadoras
  const addIndexAndSortDays = (days) => {
    const dayToIndex = {
      Lunes: 0,
      Martes: 1,
      Miércoles: 2,
      Jueves: 3,
      Viernes: 4,
      Sábado: 5,
      Domingo: 6
    }

    const daysWithIndex = days.map((day) => ({
      name: day,
      index: dayToIndex[day]
    }))

    daysWithIndex.sort((a, b) => a.index - b.index)
    const sortedDays = daysWithIndex.map((day) => day.name)
    return sortedDays
  }
  const addIndexAndSort = (exercisesDays) => {
    const dayToIndex = {
      Lunes: 0,
      Martes: 1,
      Miércoles: 2,
      Jueves: 3,
      Viernes: 4,
      Sábado: 5,
      Domingo: 6
    }
    const exercisesDaysWithIndex = exercisesDays.map((exerciseDay) => ({
      ...exerciseDay,
      index: dayToIndex[exerciseDay.day]
    }))
    exercisesDaysWithIndex.sort((a, b) => a.index - b.index)

    return exercisesDaysWithIndex
  }
  
  return (
    <ExercisesContext.Provider
      value={{
        exercisePlanData,
        setExercisePlanData,
        exercisesDays,
        setExercisesDays,
        addAvaibleDays,
        setAddAvaibleDays,
        clicked,
        setClicked
      }}
    >
      {children}
    </ExercisesContext.Provider>
  )
}
