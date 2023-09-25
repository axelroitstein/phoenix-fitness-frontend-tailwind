import React from 'react'
import ExercisePlan from './exercise_plan/exercise-plan'
import { ExercisesProvider } from './exercise_plan/context-exercises'
import MealPlan from './meal_plan/meal-plan'
import { MealsProvider } from './meal_plan/context-meals'
const UserView = () => {
  return (
    <>
      <div>Todos los componentes de usuario:</div>
      <ExercisesProvider>
        <ExercisePlan />
      </ExercisesProvider>
      <MealsProvider>
        <MealPlan/>
      </MealsProvider>
    </>
  )
}

export default UserView
