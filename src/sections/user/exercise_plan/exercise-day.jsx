'use client'
import React from 'react'
//Componentes
import DeleteDayButton from './delete-day-button'
const ExerciseDay = (props) => {
    const {idExecirseDay,day,exercises}=props

  return (
    <>
    <h3>{day}</h3>
    <div className='border-2 border-blue-500'>
    <p>{idExecirseDay}</p>
    </div>
    <div className='border-2 border-blue-500'>
    <DeleteDayButton idExecirseDay={idExecirseDay}/>
    <button>Editar</button>
    </div>
    
    </>
  )
}

export default ExerciseDay