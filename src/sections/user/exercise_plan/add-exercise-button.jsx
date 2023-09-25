'use client'
import {useState} from 'react'

import Modal from '@/components/modal'
const AddExerciseButton = (props) => {
    
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const { idExerciseDay, day } = props
  
  const openModal = () => {
    setIsModalOpen(true);
  };
  
  const closeModal = () => {
    setIsModalOpen(false);
  };
  
  const handleSubmit = (value) => {
    // Aquí puedes manejar el valor del input, por ejemplo, imprimirlo en la consola
    console.log('Valor del input:', value);
    console.log('Agregaste un ejercicio al dia', day)
  };
  
  return (
    <div className="App">
      <button
        onClick={openModal}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Abrir Modal
      </button>
      <Modal isOpen={isModalOpen} closeModal={closeModal} onSubmit={handleSubmit} />
    </div>
  );

}

export default AddExerciseButton
