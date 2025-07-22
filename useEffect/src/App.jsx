import React, { useState, useEffect, use } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)
  const [nextColor, setNextColor] = useState(0)

  const colors = ["red", "blue", "green", "yellow", "orange", "black", "white", "pink", "brown"]

  useEffect(() => {
    alert("Hey Welcome to my page")
    alert(`Navbar color is ${colors[nextColor]}`)
  }, [])

  useEffect(() => {
    if (count > 0) {
      alert(`Count was changed to ${count}`)
      setNextColor((prev) => (prev + 1) % colors.length)
    }
  }, [count])

  useEffect(() => {
     if (count > 0 || nextColor !== 0) {
 
       alert(`Navbar color changed to ${colors[nextColor]} (${nextColor})`)
     }
 
     return () => {
       alert(`Navbar is unmounting`)
     }
 
   }, [nextColor])


  const handleNextColor = (() => {

    setNextColor((prev) => (prev + 1) % colors.length)

  })

  return (
    <>
      <Navbar color={colors[nextColor]} />

      <div>
        <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={handleNextColor}>Change Navbar Color to {colors[nextColor]}</button>
        <h1>Vite + React is Awesome 🚀</h1>

      </div>
      <p className="read-the-docs" onClick={() => setFirst((first) => ((first + 1) * 2))}>
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
