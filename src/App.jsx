import { BrowserRouter, Routes, Route } from 'react-router'
import './App.css'
import { Navbar } from './components/Navbar'
import { HomeView } from './views/home/HomeView'
import { ProductsView } from './views/Products/ProductsView'
import { Footer } from './components/Footer'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/Producto" element={<ProductsView />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
