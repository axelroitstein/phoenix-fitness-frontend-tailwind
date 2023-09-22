'use client'
import { useEffect } from "react"
import { userLogin } from "@/services/user/auth-user-services"
export default function LandingView(){
    useEffect(() => {
        userLogin({})
      }, [])
    return(

        <main className=" h-screen grid place-items-center border-white ">
        
            <div className="navbar bg-slate-400 text-primary-content top-0 absolute md:bg-green-400">
                <a className="btn btn-ghost normal-case text-xl text-orange-700">Phoenix Fitness</a>
            </div>
        
            <p className='text-yellow-400 text-3xl bg-violet-600 p-5 rounded-full text-center border-dotted md:bg-red-900'> Bienvenido/a a Phoenix Fitness</p>
       
        </main>
    )
}