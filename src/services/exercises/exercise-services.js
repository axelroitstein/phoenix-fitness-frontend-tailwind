export const createExercise = async (data) => {
    try {
        const token = localStorage.getItem('token')
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_URL_API}/api/exercises`,
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
              },
              body: JSON.stringify(data)
            }
          )
        const responseFetch = await response.json()
        return responseFetch
      } catch (error) {
        console.log(error)
      }
}

export const updateExercise = async (data,id) =>{
    try {
        const exerciseName ={
            exerciseName:data
        }
        const token = localStorage.getItem('token')
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_URL_API}/api/exercises/${id}`,
          {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(exerciseName)
          }
        )
        console.log(response)
        const responseFetch = await response.json()
        return responseFetch
      } catch (error) {
        console.log(error)
      }
}

export const deleteExercise = async (id)=>{
    try {
        const token = localStorage.getItem('token')
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_URL_API}/api/exercises/${id}`,
          {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`
            }
          }
        )
    
        const responseFetch = await response.json()
        return responseFetch
      } catch (error) {
        console.log(error)
      }
}