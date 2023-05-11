import { Outlet } from "react-router-dom"
import Navbar from "../../components/Main/Navbar"
import Footer from "../../components/Main/Footer"
import { BasketContextProvider } from "../../context/BasketContext";

const MainRoot = () => {
  

  return (
   <BasketContextProvider>
    <Navbar/>
    <Outlet/>
    <Footer/>
   </BasketContextProvider>
  )
}

export default MainRoot