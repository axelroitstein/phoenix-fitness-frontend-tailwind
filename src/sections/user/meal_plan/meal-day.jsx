'use client'

//Componentes
import DeleteDayButton from './delete-day-button'
const MealDay = (props) => {
  const { idMealDay, day, meals } = props
  
  return (
    <>
      <h3>{day}</h3>
      <div className="border-2 border-blue-500">
        <p>id:{idMealDay}</p>
      </div>
      <div className="border-2 border-blue-500">
        <DeleteDayButton
          idMealDay={idMealDay}
        />
        <button>Editar</button>
      </div>
    </>
  )
}

export default MealDay
