export const userLogin = async (data) => {
  try {
    const response = await fetch("http://localhost:3001/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Allow-Control-Allow-Origin": "*",
      },
      body: data,
    });
    data = await response.json();
      
    console.log(data);
  } catch (error) {
    if (error.response)
      return {
        error: "response",
        response: error.response.data,
        message: "Invalid credentials",
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

export const userRegister = async (data) => {
  try {
    const response = await fetch("http://localhost:3001/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Allow-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(data),
    });
    data = await response.json();
    console.log(error);
  } catch (error) {
    console.log(error);
  }
};
