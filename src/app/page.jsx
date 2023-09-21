import PaypalFunction from "./sections/paypalPay"
import Footer from "./sections/footer"

export default function Home() {
  return (
    <>
    <main>
      <PaypalFunction/>
    </main>
    <footer>
      <Footer/>
    </footer>
    </>
  )
}
