import React from 'react'

const DeleteDayButton = () => {

    const handlerClick =  () =>{
        console.log('Eliminaste un dia')
    }
    
  return (
    <button onClick={handlerClick} className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Eliminar dia</button>
  )
}

export default DeleteDayButton