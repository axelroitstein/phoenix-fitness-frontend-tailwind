'use client'

//Components

import MealDay from './meal-day'
//Hooks
import { useContext, useEffect, useState } from 'react'

//Servicios
import { getMealPlanByToken } from '@/services/meals/meal-plan-services'

import { MealsContext } from './context-meals'

//Funcion

const MealPlan = () => {
  const [token, setToken] = useState('')
  const [userName, setUserName] = useState('Martin')

  const { mealPlanData, setMealPlanData, mealDays, setMealDays } =
    useContext(MealsContext)

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
          console.log(response)
          setMealPlanData(response.data)
          console.log(mealPlanData)
          setUserName(response.data.firstName)
          console.log(response.data.firstName)
          setMealDays(response.data.MealPlan.mealDay)
          console.log(response.data.MealPlan.mealDay)
        } catch (error) {
          console.error('Error en la solicitud:', error)
        }
      })()
    }
  }, [token])

  useEffect(() => {
    setMealDays(mealPlanData?.MealPlan?.mealDay)
    console.log('this is mealPlan data info', mealPlanData)
    console.log('This is the mealDays:', mealDays)
  }, [mealPlanData])

  return (
    <section>
      <div>
        <h2>Plan de dietas de {userName}</h2>
      </div>
      <article className="border-2 border-blue-500">
      {mealDays?.map((mealDay,index) => (
        <MealDay
          key={index}
          idMealDay={mealDay.id}
          day={mealDay.day}
          food1={mealDay.breakfast}
          food2={mealDay.brunch}
          food3={mealDay.lunch}
          food4={mealDay.snack}
          food5={mealDay.drunch}
          food6={mealDay.dinner}
        />
      ))}
      </article>
    </section>
  )
}

export default MealPlan
