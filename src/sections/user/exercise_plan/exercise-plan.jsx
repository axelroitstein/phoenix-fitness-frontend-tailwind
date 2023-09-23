'use client'

//Hooks
import { useEffect, useState } from 'react'

//Servicios
import {
  getExercisePlanByToken,
  createExercisePlanByToken
} from '@/services/exercises/exercise-plan-services'

const ExercisePlan = () => {
  const [token, setToken] = useState('')
  const [exercisePlanData, setExercisePlanData] = useState({})

  //Use effect para traer el token y hacer un get al plan de ejercicio
  useEffect(() => {
    setToken(() => window.localStorage.getItem('token'))

    if (token) {
      const fetchData = async () => {
        try {
          const response = await getExercisePlanByToken(token)
          if (response.error) {
            console.log(response.error)
          }
          setExercisePlanData(response)
        } catch (error) {
          console.error('Error en la solicitud:', error)
        }
      }
      fetchData()
    }
  }, [token])


  useEffect(() => {
    console.log('this is exercisePlan data info', exercisePlanData)
  }, [exercisePlanData])
  return (
    <section>
      <h2>Plan de ejercicios de usuario</h2>
    </section>
  )
}

export default ExercisePlan
