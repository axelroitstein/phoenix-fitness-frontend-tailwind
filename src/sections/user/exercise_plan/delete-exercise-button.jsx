import { useContext } from 'react'

import { deleteExercise } from '@/services/exercises/exercise-services'
import { ExercisesContext } from './context-exercises'
const DeleteExerciseButton = (props) => {
  const { exerciseId } = props
  const { exercisesDays, setExercisesDays } = useContext(ExercisesContext)

  const handleDelete = async () => {
    const response = await deleteExercise(exerciseId)
    if (response.succes) {
      const updatedExercisesDays = exercisesDays.map((day) => {
        const updatedExerciseList = day.Exercise.filter(
          (exercise) => exercise.id !== exerciseId
        )
        return {
          ...day,
          Exercise: updatedExerciseList
        }
      })
      setExercisesDays(updatedExercisesDays)
    }
  }

  return <button onClick={handleDelete}>❌</button>
}

export default DeleteExerciseButton
