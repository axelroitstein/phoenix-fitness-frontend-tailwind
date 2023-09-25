'use client'

//Components
import AddDayButton from './add-day-button'
import ExerciseDay from './exercise-day'
//Hooks
import { useContext, useEffect, useState } from 'react'

//Servicios
import { getExercisePlanByToken } from '@/services/exercises/exercise-plan-services'

import { ExercisesContext } from './context-exercises'

//Funcion
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
const ExercisePlan = () => {
  const [token, setToken] = useState('')
  const [userName, setUserName] = useState('Martin')

  const {
    exercisePlanData,
    setExercisePlanData,
    exercisesDays,
    setExercisesDays,
    addAvaibleDays,
    setAddAvaibleDays
  } = useContext(ExercisesContext)

  //Use effect para traer el token y hacer un get al plan de ejercicio
  useEffect(() => {
    setToken(() => window.localStorage.getItem('token'))

    if (token) {
      ;(async () => {
        try {
          const response = await getExercisePlanByToken(token)
          if (response.error) {
            console.log(response.error)
          }
          if (response.message === 'jwt expired') {
            console.log('Token vencido')
          }
          setExercisePlanData(response.data)
          setUserName(response.data.firstName)
          setExercisesDays(response.data.ExercisesPlan.ExercisesDay)
        } catch (error) {
          console.error('Error en la solicitud:', error)
        }
      })()
    }
  }, [token])

  useEffect(() => {
    const sortedExercisesDays = addIndexAndSort(exercisesDays)
    setExercisesDays(sortedExercisesDays)
    console.log(
      'this is exercisePlan data info',
      exercisePlanData,
      exercisesDays,
      sortedExercisesDays
    )
  }, [exercisePlanData])

  return (
    <section>
      <div>
        <h2>Plan de ejercicios de {userName}</h2>
      </div>
      <article >
        {exercisesDays.map((value, index) => {
          return (
            <ExerciseDay
              key={index}
              idExerciseDay={value.id}
              day={value.day}
              exercises={value.Exercise}
            />
          )
        })}
      </article>
      <AddDayButton />
    </section>
  )
}

export default ExercisePlan
