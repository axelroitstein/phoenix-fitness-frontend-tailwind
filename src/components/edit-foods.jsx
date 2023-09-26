'use client'
import React, { useState } from 'react';

const EditMealDayModal = ({ isOpen, onClose, initialFoods, onSave }) => {
  const [editedFoods, setEditedFoods] = useState([...initialFoods]);

  const handleFoodChange = (e, index) => {
    const newEditedFoods = [...editedFoods];
    newEditedFoods[index] = e.target.value;
    setEditedFoods(newEditedFoods);
  };

  const handleSaveClick = async () => {
    onSave(Object.fromEntries(editedFoods.entries()));
    onClose();
  };

  const handleCancelClick = () => {
    setEditedFoods([...initialFoods]);
    onClose();
  };

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-50 ${
        isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      } transition-opacity duration-300`}
    >
      <div className="bg-white w-full md:w-1/2 lg:w-1/3 p-4 rounded-lg shadow-lg">
        <h2 className="text-lg font-semibold mb-4">Editar Comidas</h2>
        {editedFoods.map((food, index) => (
          <input
            key={index}
            type="text"
            value={food}
            onChange={(e) => handleFoodChange(e, index)}
            className="w-full p-2 border border-gray-300 rounded mb-2"
            placeholder={`Comida ${index + 1}`}
          />
        ))}
        <div className="flex justify-end">
          <button
            onClick={handleSaveClick}
            className="bg-blue-500 text-white px-4 py-2 rounded mr-2 hover:bg-blue-600"
          >
            Guardar
          </button>
          <button
            onClick={handleCancelClick}
            className="bg-gray-300 text-gray-600 px-4 py-2 rounded hover:bg-gray-400"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditMealDayModal;