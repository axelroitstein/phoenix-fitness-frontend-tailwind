'use client'
import { useEffect } from "react"
import { userLogin } from "@/services/user/auth-user-services"
import { getUserById } from "@/services/user/user-services.js"

export default function LandingView() {

    const click = () => {
        // const data = {
        //     "email": "usuario@gmail.com",
        //     "password": "usuario"
        // }
        const response = getUserById(id)
        console.log('la respuesta del fetch fue:',response)
    }
    return (

        <main className=" h-screen grid place-items-center border-white ">
            <button onClick={click}>CLICK</button>
        </main>
    )
}
