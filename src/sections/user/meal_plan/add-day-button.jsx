'use client'
import { useEffect, useContext } from 'react'
import { createMealDay } from '@/services/meals/meal-day-services'

import { MealsContext } from './context-meals'
const AddDayButton = () => {
  const {
    mealPlanData,
    mealDays,
    setMealDays,
    addAvaibleDays,
    setAddAvaibleDays,
    clicked,
    setClicked
  } = useContext(MealsContext)

  useEffect(() => {
    const newOptions = addAvaibleDays.filter((day) => {
      return !mealDays.some((mealDay) => mealDay.day === day)
    })
    setAddAvaibleDays(newOptions)
  }, [mealDays])

  const handlerAddMealDay = async (event) => {
    const selectedValue = event.currentTarget.getAttribute('value')
    const mealPlanId = mealPlanData.mealPlan.id
    const data = {
      day: selectedValue,
      mealPlanId
    }
    const response = await createMealDay(data)
    if (response.message === 'Meal day successfully created') {
      const newDay = {
        id: response.data.id,
        day: response.data.day
      }
      setMealDays((prevValue) => {
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
              <li key={index} value={value} onClick={handlerAddMealDay}>
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