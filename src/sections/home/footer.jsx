import Header from "../payment-view.jsx/header";
import Footer from "../payment-view.jsx/footer";
import LandingView from "./landing.jsx";
import Horarios from "./horarios";

export default function HeaderAndFooter () {
    return (
        <>
        <Header/>
        <LandingView/>
        <Horarios/>
        <Footer/>
        </>
    )
}