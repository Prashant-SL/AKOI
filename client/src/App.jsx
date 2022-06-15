import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import ProductCard from './Components/ProductCard'

function App() {

  return (
    <div>
      <Navbar />
      {/* <ProductCard /> */}
      <Home />

    </div>
  )
}

export default App
