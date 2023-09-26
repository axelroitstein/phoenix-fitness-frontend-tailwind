import LoginForm from './login-form'
import Header from '../payment-view.jsx/header'
import Footer from '../payment-view.jsx/footer'

const LoginView = () => {
  return (
    <main>
      <Header/>
        <LoginForm/>
        <Footer/>
    </main>
  )
}

export default LoginView