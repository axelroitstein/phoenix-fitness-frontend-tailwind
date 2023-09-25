'use client'
import {useContext} from 'react'
import { deleteExerciseDay } from '@/services/exercises/exercise-day-services'
import { ExercisesContext } from './context-exercises'
const DeleteDayButton = (props) => {
  const {idExecirseDay } = props
  const {exercisesDays,setExercisesDays,addAvaibleDays,setAddAvaibleDays,setClicked}=useContext(ExercisesContext)

  const handlerClick = async() => {
    console.log('Console log del id exercise Day',idExecirseDay)
    const response = await deleteExerciseDay(idExecirseDay)
    if(response.message==='Exercise day is deleted'){
      const newExerciseDays = exercisesDays.filter((value)=>{
        return value.id!==idExecirseDay
      })
      const dayAdded = exercisesDays.find((value)=>{
        return value.id === idExecirseDay
      })
      setAddAvaibleDays((prev)=>{
        return [...prev,dayAdded.day]
      })
      setExercisesDays(newExerciseDays)
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
