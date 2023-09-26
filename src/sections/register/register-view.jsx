'use client'
import Footer from "../payment-view.jsx/footer"
import Header from "../payment-view.jsx/header"
import RegisterForm from "./register-form"

export default function RegisterView(){
    return(
        <>
        <Header/>
            <RegisterForm/>
        <Footer/>
        </>
    )
}