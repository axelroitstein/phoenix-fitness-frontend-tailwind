import React, { useState } from 'react'
import EditMealDayModal from '@/components/edit-foods' // Asegúrate de que la ruta sea correcta
import { updateMealDay } from '@/services/meals/meal-day-services'

const MealDay = (props) => {
  const { idMealDay, day, food1, food2, food3, food4, food5, food6 } = props
  console.log(food1)
  // Verifica si los valores de las comidas son nulos o vacíos y asigna un valor predeterminado
  const foods = [
    food1,
    food2,
    food3,
    food4,
    food5,
    food6 
  ]

  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const [mealFoods, setMealFoods] = useState(foods) // Usamos los valores predeterminados

  const openEditModal = () => {
    setIsEditModalOpen(true)
  }

  const closeEditModal = () => {
    setIsEditModalOpen(false)
  }

  const saveEditedFoods = async (editedFoods) => {
    // Crear un objeto con la estructura requerida para la solicitud PUT
    const requestData = {
      day,
      breakfast: editedFoods[0],
      brunch: editedFoods[1],
      lunch: editedFoods[2],
      snack: editedFoods[3],
      drunch: editedFoods[4],
      dinner: editedFoods[5]
    }

    const response = await updateMealDay(requestData, idMealDay)
    if (response.succes) {
      setMealFoods(Object.values(editedFoods))
      closeEditModal()
    } else {
      console.error('Error al actualizar las comidas.')
    }
  }

  return (
    <div className="my-4">
      <h3 className="text-lg font-semibold">Dia: {day}</h3>
      <div className="border-2 border-blue-500 p-4">
        <p className="mb-2">id: {idMealDay}</p>
        {mealFoods.map((food, index) => {
          console.log(food)
          return (
            <p key={index} className="mb-2">
              Comida {index + 1}: {food}
            </p>
          )
        })}
      </div>
      <button
        className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        onClick={openEditModal}
      >
        Editar
      </button>
      <EditMealDayModal
        isOpen={isEditModalOpen}
        onClose={closeEditModal}
        initialFoods={mealFoods}
        onSave={saveEditedFoods}
      />
    </div>
  )
}

export default MealDay
