export const getExercisePlanByToken = async (token) => {
  try {
    console.log('token is', token)
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_URL_API}/api/exercisePlans`,
      {
        cache: 'no-cache',
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    )
    const responseFetch = await response.json()
    return responseFetch
  } catch (error) {
    console.log('Error:', error)
  }
}

export const createExercisePlanByToken = async (token) => {
  try {
    console.log('token for exercisePlan Create is ', token)
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_URL_API}/api/exercisePlans`,
      {
        cache: 'no-cache',
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    )
    const responseFetch = await response.json()

    return responseFetch
  } catch (error) {
    console.log('Error:', error)
  }
}
