'use client'

//Hooks
import { useEffect, useState } from 'react'

//Servicios
import {
  getMealPlanByToken,
  createMealPlanByToken
} from '@/services/meals/meal-plan-services'

const MealPlan = () => {
  const [token, setToken] = useState('')
  const [mealPlanData, setMealPlanData] = useState({})

  //Use effect para traer el token y hacer un get al plan de ejercicio
  useEffect(() => {
    setToken(() => window.localStorage.getItem('token'))

    if (token) {
      const fetchData = async () => {
        try {
          const response = await getMealPlanByToken(token)
          if (response.error) {
            console.log(response.error)
          }
          setMealPlanData(response)
        } catch (error) {
          console.error('Error en la solicitud:', error)
        }
      }
      fetchData()
    }
  }, [token])


  useEffect(() => {
    console.log('this is your Meal Plan data info', mealPlanData)
  }, [mealPlanData])
  return (
    <section>
      <h2>Plan de dietas de usuario: </h2>
    </section>
  )
}

export default MealPlan
