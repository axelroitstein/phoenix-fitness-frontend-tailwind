import React from 'react'
import ExercisePlan from './exercise_plan/exercise-plan'
import { ExercisesProvider } from './exercise_plan/context-exercises'
const UserView = () => {
  return (
    <>
      <div>Todos los componentes de usuario:</div>
      <ExercisesProvider>
        <ExercisePlan />
      </ExercisesProvider>
    </>
  )
}

export default UserView
