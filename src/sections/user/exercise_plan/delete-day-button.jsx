'use client'
import {useContext} from 'react'
//Servicios
import { deleteExerciseDay } from '@/services/exercises/exercise-day-services'
import { ExercisesContext } from './context-exercises'
const DeleteDayButton = (props) => {
  //Props
  const {idExerciseDay } = props
  //Estados
  const {exercisesDays,setExercisesDays,setAddAvaibleDays,setClicked}=useContext(ExercisesContext)

  const handlerClick = async() => {
    const response = await deleteExerciseDay(idExerciseDay)
    if(response.message==='Exercise day is deleted'){
      const newExerciseDays = exercisesDays.filter((value)=>{
        return value.id!==idExerciseDay
      })
      const dayAdded = exercisesDays.find((value)=>{
        return value.id === idExerciseDay
      })
      setAddAvaibleDays((prev)=>{
        return [...prev,dayAdded.day]
      })
      setExercisesDays(newExerciseDays)
    }
    setClicked((prevValue) => !prevValue);
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
