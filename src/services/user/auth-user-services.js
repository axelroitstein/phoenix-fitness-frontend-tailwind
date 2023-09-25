export const userLogin = async (data) => {
  try {
    console.log(data)
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_URL_API}/api/auth/login`,
      {
        cache: 'no-cache',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }
    )
    const fetchResponse = await response.json();
    return fetchResponse
  } catch (error) {
    if (error.response)
      return {
        error: 'response',
        response: error.response.data,
        message: 'Invalid credentials'
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

export const userRegister = async (data) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_URL_API}/auth/register`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: data
      }
    )
    //REVISAR
    return (data = await response.json())
  } catch (error) {
    console.log(error)
  }
}
