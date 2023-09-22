export const getUsers = async () => {
  try {
    const response = await fetch("http://localhost:3001/api/users", {
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

export const getUserById = async () => {
  try {
    const response = await fetch(`http://localhost:3001/api/users/${id}`, {
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

export const updateUser = async () => {
  try {
    const response = await fetch(`http://localhost:3001/api/users/${id}`, {
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

export const deleteUser = async () => {
  try {
    const response = await fetch(`http://localhost:3001/api/users/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
    return (response.message = "Usuario eliminado con éxito");
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
