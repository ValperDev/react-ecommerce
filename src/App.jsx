import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar/Navbar";
import Footer from "./components/layout/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
