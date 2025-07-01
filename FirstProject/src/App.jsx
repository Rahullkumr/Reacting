import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div class= "flex items-center justify-center h-screen bg-teal-900">
      <h1 class="text-3xl font-bold text-white">Hello React 👋</h1>
    </div>
  )
}

export default App
