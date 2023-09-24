export const createExerciseDay = async (data) => {
  try {
    const token = localStorage.getItem('token')
    console.log(token)
    const response = await fetch(`${process.env.NEXT_PUBLIC_URL_API}/api/exerciseDays`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify(data)
    });

    const responseFetch = await response.json();
    return responseFetch;
  } catch (error) {
   console.log(error)
  }
};

export const getExerciseDayById = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_URL_API}/exerciseDays/${id}`,
      {
        body: data,
      }
    );
    data = await response.json();
    return data;
  } catch (error) {
    if (error.response)
      return {
        error: "response",
        response: error.response.data,
      };

    if (error.request)
      return {
        error: "request",
        message: "Cannot connect to server",
      };

    return {
      error: "unknown",
      message: "Unknown error",
    };
  }
};

export const updateExerciseDay = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_URL_API}/exerciseDays/${id}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }
    );

    data = await response.json();
  
} catch (error) {
    if (error.response)
      return {
        error: "response",
        response: error.response.data,
      };

    if (error.request)
      return {
        error: "request",
        message: "Cannot connect to server",
      };

    return {
      error: "unknown",
      message: "Unknown error",
    };
  }
};

export const deleteExerciseDay = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_URL_API}/api/exerciseDays/${id}`,
      {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      }
    );

    return (response.message = "Ejercicio eliminado con éxito");
  } catch (error) {
    if (error.response)
      return {
        error: "response",
        response: error.response.data,
      };

    if (error.request)
      return {
        error: "request",
        message: "Cannot connect to server",
      };

    return {
      error: "unknown",
      message: "Unknown error",
    };
  }
};
