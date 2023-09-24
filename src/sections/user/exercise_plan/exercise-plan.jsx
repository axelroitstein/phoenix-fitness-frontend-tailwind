'use client'

//Components
import AddDayButton from './add-day-button'
import ExerciseDay from './exercise-day'
//Hooks
import { useEffect, useState } from 'react'

//Servicios
import { getExercisePlanByToken } from '@/services/exercises/exercise-plan-services'

const ExercisePlan = () => {
  const [token, setToken] = useState('')
  const [exercisePlanData, setExercisePlanData] = useState({})
  const [userName, setUserName] = useState('Martin')
  const [exercisesDays, setExercisesDays] = useState([
    { id: 'nada', day: 'nada' }
  ])
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
          if (response.message === 'jwt expired') {
            console.log('Token vencido')
          }
          setExercisePlanData(response.data)
          setUserName(response.data.firstName)
          setExercisesDays(response.data.ExercisesPlan.ExercisesDay)
        } catch (error) {
          console.error('Error en la solicitud:', error)
        }
      }
      fetchData()
    }
  }, [token])

  useEffect(() => {
    console.log(
      'this is exercisePlan data info',
      exercisePlanData,
      exercisesDays
    )
  }, [exercisePlanData])

  return (
    <section>
      <div>
        <h2>Plan de ejercicios de {userName}</h2>
      </div>
      <article className="border-2 border-blue-500">
        {exercisesDays.map((value,index) => {
          return (
            <ExerciseDay
              key={index}
              idExecirseDay={value.id}
              day={value.day}
              exercises={value.Exercise}
              exercisesDays={exercisesDays}
              setExercisesDays={setExercisesDays}
            />
          )
        })}
      </article>
      <AddDayButton
        exercisesDays={exercisesDays}
        setExercisesDays={setExercisesDays}
        exercisePlanData={exercisePlanData}
      />
    </section>
  )
}

export default ExercisePlan
