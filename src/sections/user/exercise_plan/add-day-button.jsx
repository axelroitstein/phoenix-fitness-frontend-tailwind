'use client'
import { useEffect, useContext } from 'react'
import { createExerciseDay } from '@/services/exercises/exercise-day-services'

import { ExercisesContext } from './context-exercises'
const AddDayButton = () => {
  const {
    exercisePlanData,
    exercisesDays,
    setExercisesDays,
    addAvaibleDays,
    setAddAvaibleDays,
    clicked,
    setClicked
  } = useContext(ExercisesContext)

  useEffect(() => {
    const newOptions = addAvaibleDays.filter((day) => {
      return !exercisesDays.some((exerciseDay) => exerciseDay.day === day)
    })
    setAddAvaibleDays(newOptions)
  }, [exercisesDays])

  const handlerAddExerciseDay = async (event) => {
    const selectedValue = event.currentTarget.getAttribute('value')
    const exercisesPlanId = exercisePlanData.ExercisesPlan.id
    const data = {
      day: selectedValue,
      exercisesPlanId
    }
    const response = await createExerciseDay(data)
    if (response.message === 'Exercises day is created') {
      const newDay = {
        id: response.data.id,
        day: response.data.day
      }
      setExercisesDays((prevValue) => {
        return [...prevValue, newDay]
      })
    }
    setClicked((prevValue) => !prevValue);
  }

  return (
    <div className="absolute right-0 bottom-0">
      <div className="dropdown dropdown-top dropdown-end">
        <label tabIndex={0} className="btn m-1">
          Click
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          {addAvaibleDays.map((value, index) => {
            return (
              <li key={index} value={value} onClick={handlerAddExerciseDay}>
                <a>{value}</a>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default AddDayButton
