'use client'
import { createContext, useState, useEffect } from 'react'

export const MealsContext = createContext(null)

export const MealsProvider = ({ children }) => {
  const [mealPlanData, setMealPlanData] = useState({})
  const [mealDays, setMealDays] = useState([{ id: 'nada', day: 'nada' }])

  return (
    <MealsContext.Provider
      value={{
        mealPlanData,
        setMealPlanData,
        mealDays,
        setMealDays
      }}
    >
      {children}
    </MealsContext.Provider>
  )
}
