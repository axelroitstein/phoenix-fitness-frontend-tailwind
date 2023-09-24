import React from 'react'
import ExercisePlan from './exercise_plan/exercise-plan'
import MealPlan from './meal_plan/meal-plan'
const UserView = () => {
  return (
    <>
    <div>Todos los componentes de usuario:</div>
    <ExercisePlan/>
    <MealPlan/>
    </>

  )
}

export default UserView