'use client'
import {useContext} from 'react'
import { deleteMealDay } from '@/services/meals/meal-day-services'
import { MealsContext } from './context-meals'
const DeleteDayButton = (props) => {
  const {idMealDay } = props
  const {mealDays,setMealDays,addAvaibleDays,setAddAvaibleDays,setClicked}=useContext(MealsContext)

  const handlerClick = async() => {
    console.log('Console log del id meal Day',idMealDay)
    const response = await deleteMealDay(idMealDay)
    if(response.message==='Meal day deleted successfully'){
      const newMealDays = mealDays.filter((value)=>{
        return value.id!==idMealDay
      })
      const dayAdded = mealDays.find((value)=>{
        return value.id === idMealDay
      })
      setAddAvaibleDays((prev)=>{
        return [...prev,dayAdded.day]
      })
      setMealDays(newMealDays)
    }
    setClicked((prevValue) => !prevValue);
    console.log(response)
  }

  return (
    <button
      onClick={handlerClick}
      className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg"
    >
      Eliminar dia
    </button>
  )
}

export default DeleteDayButton
