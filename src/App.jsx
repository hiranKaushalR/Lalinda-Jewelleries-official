import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './Components/Layout'
import HomeCanvas from './Pages/Home/HomeCanvas'
import AboutCanvas from './Pages/About/AboutCanvas'
import JewelleryCanvas from './Pages/Jewellery/JewelleryCanvas'
import OfferCanvas from './Pages/Offers/OfferCanvas'
import NewCanvas from './Pages/New/NewCanvas'
import ServiceCanvas from './Pages/Service/ServiceCanvas'
import ContactCanvas from './Pages/Contact/ContactCanvas'
import ProductCanvas from './Pages/Product/ProductCanvas'
import './App.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />} >
        <Route index element={<HomeCanvas />} />
        <Route path='/:id' element={<ProductCanvas/>} />
        <Route path='about' element={<AboutCanvas />} />
        <Route path='jewellery' element={<JewelleryCanvas />} />
        <Route path='offers' element={<OfferCanvas />} />
        <Route path='new' element={<NewCanvas />} />
        <Route path='services' element={<ServiceCanvas />} />
        <Route path='contact' element={<ContactCanvas />} />
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
