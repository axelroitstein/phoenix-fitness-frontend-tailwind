export const userLogin = async (data) => {
  try {
    console.log(data)
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_URL_API}/api/auth/login`,
      {
        
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
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
    console.log(data)
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_URL_API}/api/auth/register`,
      {
        
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      }
      )
    console.log(response)
    //REVISAR
    const fetchResponse = await response.json();
    console.log(fetchResponse)
    return fetchResponse
  } catch (error) {
    console.log(error)
  }
}
