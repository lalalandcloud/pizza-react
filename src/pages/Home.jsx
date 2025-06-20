import { Outlet } from "react-router-dom"
import Contenu from "../components/Contenu"
import Footer from "../components/Footer"
import Nav from "../components/Nav"


export default function Home() {

    return (
        <>
        <Nav />
        <Outlet />
        <Footer />
        </>
    )
}