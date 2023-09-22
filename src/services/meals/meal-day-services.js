export const getMealDays = async () => {
  try {
    const response = await fetch("http://localhost:3001/api/exerciseDays", {
      body: data,
    });
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

export const createMealDay = async (data) => {
  try {
    const response = await fetch("http://localhost:3001/api/exerciseDays", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Allow-Control-Allow-Origin": "*",
      },

      body: data,
    });

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

export const getMealDayById = async () => {
  try {
    const response = await fetch(`http://localhost:3001/api/mealDays/${id}`, {
      body: data,
    });
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

export const updateMealDay = async () => {
    try {
      const response = await fetch(`http://localhost:3001/api/mealDays/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

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

  export const deleteMealDay = async () => {
    try {
      const response = await fetch(`http://localhost:3001/api/mealDays/${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });

      return (response.message = "Comida eliminada con éxito");
    
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