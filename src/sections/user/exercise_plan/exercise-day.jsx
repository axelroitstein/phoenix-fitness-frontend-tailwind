'use client'

import { useContext, useEffect } from 'react'

//Componentes
import DeleteDayButton from './delete-day-button'
import EditDayButton from './edit-day-button'
import AddExerciseButton from './add-exercise-button'
import Exercise from './exercise'

//Servicio

const ExerciseDay = (props) => {
  //Props
  const { idExerciseDay, day, exercises } = props
  return (
    <div className="border-2 border-red-500 margin-top: 2.75rem;">
      <h3>{day}</h3>
      <div className="border-2 border-blue-500 ;">
        {exercises?.map((value, index) => {
          return (
            <Exercise
              key={index}
              numerito={index}
              exerciseName={value.exerciseName}
              exerciseId={value.id}
            />
          )
        })}
      </div>
      <div>
        <AddExerciseButton
          idExerciseDay={idExerciseDay}
          day={day}
          exercises={exercises}
        />
      </div>
      <div className="border-2 border-blue-500">
        <DeleteDayButton idExerciseDay={idExerciseDay} />
      </div>

      <div className="border-2 border-blue-500">
        <EditDayButton idExerciseDay={idExerciseDay} day={day} />
      </div>
    </div>
  )
}

export default ExerciseDay
