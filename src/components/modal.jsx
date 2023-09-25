import React, { useState } from 'react';

const Modal = ({ isOpen, closeModal, onSubmit }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    onSubmit(inputValue);
    closeModal();
  };

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-50 ${
        isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      } transition-opacity duration-300`}
    >
      <div className="bg-white w-full md:w-1/2 lg:w-1/3 p-4 rounded-lg shadow-lg">
        <h2 className="text-lg font-semibold mb-4">Modal Title</h2>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Escribe una oración"
          className="w-full p-2 border border-gray-300 rounded mb-4"
        />
        <div className="flex justify-end">
          <button
            onClick={handleSubmit}
            className="bg-blue-500 text-white px-4 py-2 rounded mr-2 hover:bg-blue-600"
          >
            Crear
          </button>
          <button
            onClick={closeModal}
            className="bg-gray-300 text-gray-600 px-4 py-2 rounded hover:bg-gray-400"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;

