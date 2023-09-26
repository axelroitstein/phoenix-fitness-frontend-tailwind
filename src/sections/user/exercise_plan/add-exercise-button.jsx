'use client'
import { useContext, useState, useEffect } from 'react'

// Componentes
import Modal from '@/components/modal'
// Servicios
import { ExercisesContext } from './context-exercises'
import { createExercise } from '@/services/exercises/exercise-services'
const AddExerciseButton = (props) => {
  //Props
  const { idExerciseDay, day, exercises } = props
  //Estados
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { exercisesDays, setExercisesDays } = useContext(ExercisesContext)

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const addExerciseToDay = (dayId, newExercise) => {
    const updatedExercisesDays = exercisesDays.map((day) => {
      if (day.id === dayId) {
        return {
          ...day,
          Exercise: [...day.Exercise, newExercise]
        }
      }
      return day
    })

    setExercisesDays(updatedExercisesDays)
  }
  const handleSubmit = async (value) => {
    const newData = {
      exerciseName: value,
      exerciseDayId: idExerciseDay
    }
    const response = await createExercise(newData)
    console.log(response)
    if (response.succes === true) {
      const exerciseId = response.data.id
      const newDataForState = {
        exerciseName: value,
        id: exerciseId
      }
      addExerciseToDay(idExerciseDay, newDataForState)
    }
  }

  return (
    <div className="App">
      <button
        onClick={openModal}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Añadir ejercicio
      </button>
      <Modal
        isOpen={isModalOpen}
        closeModal={closeModal}
        onSubmit={handleSubmit}
        title={'Añadir ejercicio'}
      />
    </div>
  )
}

export default AddExerciseButton
