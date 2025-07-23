import { useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Focus from './Focus'
import Gallery from './Gallery'

function App() {
  const [count, setCount] = useState(0)
  const [colorIndex, setColorIndex] = useState(0)
  const [showCount, setShowCount] = useState(true)

  const btnRef = useRef(null)

  const colors = ['red', 'blue', 'green', 'yellow', 'orange', 'black', 'white', 'pink', 'brown']

  const changeColor = () => {
    const nextIndex = (colorIndex + 1) % colors.length
    btnRef.current.style.backgroundColor = colors[nextIndex]
    setColorIndex(nextIndex)
  }

  const toggleCount = () => {
    setShowCount((prev) => !prev)
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        {showCount && (
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
        )}

        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>

      <button onClick={toggleCount}>
        {showCount ? 'Hide Count' : 'Show Count'}
      </button>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <button ref={btnRef} onClick={changeColor}>
        change color of btn
      </button>

      <Focus />
      <Gallery />
    </>
  )
}

export default App
