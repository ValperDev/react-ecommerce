import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar/Navbar";
import Footer from "./components/layout/Footer/Footer";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <main>
        <Routes>
          <Route path="/all-products" element={<ProductList/>}/>
          <Route path="/all-products/:handle" element={<Product/>}/>
        </Routes>
      </main>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
