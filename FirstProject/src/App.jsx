import { useState } from 'react'
import './App.css'
import { Navbar } from './day02/ReusableNavbar'
import { Footer } from './day02/ReusableFooter'
import { Card } from './day02/ReusableProfileCard'
import { MyApp } from './day02/ReusableProfileCard'

function App() {

  return (
    // <div class= "flex items-center justify-center h-screen bg-teal-900">
    //   <h1 class="text-3xl font-bold text-white">Hello React 👋</h1>
    // </div>

    // day02 
    <div>
      {/* <Navbar/> */}
      {/* <Footer/> */}
      <MyApp/>
    </div>
  )
}

export default App
