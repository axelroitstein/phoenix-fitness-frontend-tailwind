'use client'

//Components
import AddDayButton from './add-day-button'
import MealDay from './meal-day'
//Hooks
import { useContext, useEffect, useState } from 'react'

//Servicios
import { getMealPlanByToken } from '@/services/meals/meal-plan-services'

import { MealsContext } from './context-meals'

//Funcion
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
const MealPlan = () => {
  const [token, setToken] = useState('')
  const [userName, setUserName] = useState('Martin')

  const {
    mealPlanData,
    setMealPlanData,
    mealDays,
    setMealDays,
    addAvaibleDays,
    setAddAvaibleDays
  } = useContext(MealsContext)

  //Use effect para traer el token y hacer un get al plan de ejercicio
  useEffect(() => {
    setToken(() => window.localStorage.getItem('token'))

    if (token) {
      ;(async () => {
        try {
          const response = await getMealPlanByToken(token)
          if (response.error) {
            console.log(response.error)
          }
          if (response.message === 'jwt expired') {
            console.log('Token vencido')
          }
          setMealPlanData(response.data)
          setUserName(response.data.firstName)
          setMealDays(response.data.MealPlan.mealDay)
        } catch (error) {
          console.error('Error en la solicitud:', error)
        }
      })()
    }
  }, [token])

  useEffect(() => {
    const sortedMealDays = addIndexAndSort(mealDays)
    setMealDays(sortedMealDays)
    // console.log(
    //   'this is mealPlan data info',
    //   exercisePlanData,
    //   exercisesDays,
    //   sortedExercisesDays
    // )
  }, [mealPlanData])

  return (
    <section>
      <div>
        <h2>Plan de dietas de {userName}</h2>
      </div>
      <article className="border-2 border-blue-500">
        {mealDays.map((value, index) => {
          return (
            <MealDay
              key={index}
              idMealDay={value.id}
              day={value.day}
              meals={value.Meal}
            />
          )
        })}
      </article>
      <AddDayButton />
    </section>
  )
}

export default MealPlan