"use client";
import { useState } from "react";
import { userLogin } from "@/services/user/auth-user-services";
const LoginForm = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const [errorLogin, setErrorLogin] = useState(false);
  const [messageError, setMessageError] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await userLogin(data);
    //Comportamiento raro preguntar porque el response algunas veces anda otras no
    if (response.error != undefined) {
      setMessageError(response.message);
      return setErrorLogin(true);
    }

    if (!response.token) {
      return console.log("Token not found");
    }
    return localStorage.setItem("token", response.token);
  };

  const handleChange = async (event) => {
    const { name, value } = event.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  return (
  <section class="bg-gray-50 dark:bg-gray-900 h-screen flex justify-center">
  <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
    <a
      href=""
      className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
    >
      ¡Bienvenido Nuevamente!
    </a>
    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
          Inicia Sesión con tu Cuenta
        </h1>
    <form className=" h-screen grid place-items-center" onSubmit={handleSubmit}>
      {errorLogin ? (
        <div className="alert alert-error mb-4">
          <span>{messageError}</span>
        </div>
      ) : null}
      <div>
      <input
                      type="email"
                      name="email"
                      id="email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="name@company.com"
                      required=""
        />
        <input
          onChange={handleChange}
          name="password"
          type="password"
          placeholder="Ingrese su contraseña"
          className="input input-bordered input-primary w-full max-w-xs"
        />
        <button
          className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg block"
          type="submit"
        >
          Ingresar!
        </button>
      </div>
    </form>
    </div>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;
