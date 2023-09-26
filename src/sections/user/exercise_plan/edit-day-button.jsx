'use client'
import { useContext } from 'react'
//Servicios
import { ExercisesContext } from './context-exercises'
import { updateExerciseDay } from '@/services/exercises/exercise-day-services'
const EditDayButton = (props) => {
  //Props
  const { idExerciseDay } = props
  //Estados
  const {
    addAvaibleDays,
    setAddAvaibleDays,
    exercisesDays,
    setExercisesDays,
    setClicked
  } = useContext(ExercisesContext)

 

  const handlerEditDay = async (event) => {
    const selectedValue = event.currentTarget.getAttribute('value')
    const data = {
      day:selectedValue
    }
    const response = await updateExerciseDay(data, idExerciseDay)
    if (response.message === 'Exercise day is updated') {
      setAddAvaibleDays((prev) => prev.filter((day) => day !== selectedValue))
      const editedDay = exercisesDays.find((value) => {
        return value.id === idExerciseDay
      })
      if (editedDay) {
        // Guarda el antiguo nombre del día
        const oldDayName = editedDay.day
        setExercisesDays((prev) =>
          prev.filter((day) => day.id !== idExerciseDay)
        )
        // Agrega el día seleccionado al día actual
        setExercisesDays((prev) => [
          ...prev,
          {
            ...editedDay,
            day: selectedValue // Asigna el día seleccionado al día actual
          }
        ])

        // Agrega el antiguo nombre nuevamente a las opciones de creación y edición
        setAddAvaibleDays((prev) => [...prev, oldDayName])
      }
      setClicked((prevValue) => !prevValue)
    }
  }
  return (
    <div>
      <div className="dropdown">
        <label tabIndex={0} className="btn m-1">
          Editar el dia
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          {addAvaibleDays.map((value, index) => {
            return (
              <li key={index} value={value} onClick={handlerEditDay}>
                <a>{value}</a>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default EditDayButton
