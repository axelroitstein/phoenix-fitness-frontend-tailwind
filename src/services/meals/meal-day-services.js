export const getMealDays = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_URL_API}/api/mealDays`,
      {
        body: data
      }
    )
    data = await response.json()
    return data
  } catch (error) {
    if (error.response)
      return {
        error: 'response',
        response: error.response.data
      }

    if (error.request)
      return {
        error: 'request',
        message: 'Cannot connect to server'
      }

    return {
      error: 'unknown',
      message: 'Unknown error'
    }
  }
}

export const createMealDay = async (data) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_URL_API}/api/mealDays`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Allow-Control-Allow-Origin': '*'
        },

        body: data
      }
    )

    data = await response.json()
    return data
  } catch (error) {
    if (error.response)
      return {
        error: 'response',
        response: error.response.data
      }

    if (error.request)
      return {
        error: 'request',
        message: 'Cannot connect to server'
      }

    return {
      error: 'unknown',
      message: 'Unknown error'
    }
  }
}

export const getMealDayById = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_URL_API}/api/mealDays/${id}`,
      {
        body: data
      }
    )
    data = await response.json()
    return data
  } catch (error) {
    if (error.response)
      return {
        error: 'response',
        response: error.response.data
      }

    if (error.request)
      return {
        error: 'request',
        message: 'Cannot connect to server'
      }

    return {
      error: 'unknown',
      message: 'Unknown error'
    }
  }
}

export const updateMealDay = async (data,id) => {
  console.log(id,'Meal Day',data)
  try {
    const token = localStorage.getItem('token')
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_URL_API}/api/mealDays/${id}`,
      {
        method: 'PUT',
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

export const deleteMealDay = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_URL_API}/api/mealDays/${id}`,
      {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
      }
    )

    return (response.message = 'Comida eliminada con éxito')
  } catch (error) {
    if (error.response)
      return {
        error: 'response',
        response: error.response.data
      }

    if (error.request)
      return {
        error: 'request',
        message: 'Cannot connect to server'
      }

    return {
      error: 'unknown',
      message: 'Unknown error'
    }
  }
}
