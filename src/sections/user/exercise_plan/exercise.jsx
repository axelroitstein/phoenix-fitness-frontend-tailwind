'use client'
import Modal from '@/components/modal'
import { useContext, useState } from 'react'
import { updateExercise } from '@/services/exercises/exercise-services'
import { ExercisesContext } from './context-exercises'
import DeleteExerciseButton from './delete-exercise-button'
const Exercise = (prop) => {
  //Props
  const { exerciseName, exerciseId } = prop
  //Estados
  const { exercisesDays, setExercisesDays } = useContext(ExercisesContext)

  // Estados del modal
  const [isModalOpen, setIsModalOpen] = useState(false)

  //Funciones del modal
  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const handleSubmit = async (value) => {
    const response = await updateExercise(value, exerciseId)
    if (response.succes) {
      const updatedExercisesDays = exercisesDays.map((day) => {
        const updatedExerciseList = day.Exercise.map((exercise) => {
          if (exercise.id === exerciseId) {
            return { ...exercise, exerciseName: value }
          }
          return exercise
        })
        return {
          ...day,
          Exercise: updatedExerciseList
        }
      })
      setExercisesDays(updatedExercisesDays)
    }

    closeModal()
  }
  return (
    <>
      <p className="text-red-500 border-4 border-yellow-300">{exerciseName}</p>
      <div>------------</div>
      <DeleteExerciseButton exerciseId={exerciseId}/>
      <button onClick={openModal}>🖊</button>
      <div>
        <Modal
          isOpen={isModalOpen}
          closeModal={closeModal}
          onSubmit={handleSubmit}
          title={`Editar el ejercicio:`}
          placeHolder={exerciseName}
        />
      </div>
    </>
  )
}

export default Exercise
