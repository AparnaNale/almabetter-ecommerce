
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import { useState } from 'react'
import Order from './pages/Order'
import FilterData from './pages/FilterData'
import ProductDetail from './pages/ProductDetail'
import Shop from './pages/Shop'
import Favorite from './pages/Favorite'
import AnnouncementBar from './components/AnnouncementBar'

function App() {

  const [order,setOrder]=useState(null)

  return (
    <BrowserRouter>
      <AnnouncementBar/>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
        <Route path='/shop' element={<Shop />}></Route>
        <Route path='/checkout' element={<Checkout setOrder={setOrder} />}></Route>
        <Route path='/order-confirmation' element={<Order order={order} />}></Route>
        <Route path='/filter-data' element={<FilterData />}></Route>
        <Route path='/product/:id' element={<ProductDetail />}></Route>
        <Route path='/favorite' element={<Favorite/>}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
