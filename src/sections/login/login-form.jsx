'use client'
import { useState } from 'react'
import { userLogin } from '@/services/user/auth-user-services'
const LoginForm = () => {
  const [data, setData] = useState({ email: '', password: '' })
  const [errorLogin, setErrorLogin] = useState(false)
  const [messageError, setMessageError] = useState('')
  const handleSubmit = async (event) => {
    event.preventDefault()

    const response = await userLogin(data)
    //Comportamiento raro preguntar porque el response algunas veces anda otras no
    if (response.error != undefined) {
      setMessageError(response.message)
      return setErrorLogin(true)
    }
    
    if (!response.token) {
      return console.log('Token not found')
    }

    return localStorage.setItem('token', response.token)
  }

  const handleChange = async (event) => {
    const { name, value } = event.target
    setData({
      ...data,
      [name]: value
    })
  }

  return (
    <form className=" h-full grid place-items-center" onSubmit={handleSubmit}>
      {errorLogin ? (
        <div className="alert alert-error mb-4">
          <span>{messageError}</span>
        </div>
      ) : null}
      <div>
        <input
          onChange={handleChange}
          name="email"
          type="email"
          placeholder="Ingrese su mail"
          className="input input-bordered input-primary w-full max-w-xs"
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
  )
}

export default LoginForm
