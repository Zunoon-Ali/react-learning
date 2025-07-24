import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [showBtn, setShowBtn] = useState(false)
  const [todo, setTodo] = useState([
    {
      title: "Learn React",
      description: "Learn React from scratch",
    },
    {
      title: "Learn Vue",
      description: "Learn Vue from scratch",
    },
    {
      title: "Learn Angular",
      description: "Learn Angular from scratch",
    },
  ])

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
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR

        </p>
        {showBtn &&

          <div className="toggle" >

            {todo.map((todo, index) => {
              return (
                <div className="todo" key={index}>
                  <h3>{todo.title}</h3>
                  <p>{todo.description}</p>
                </div>
              )

            })}
          </div>
        }


        {/* {showBtn ? (
          <button onClick={() => setShowBtn(false)}>Hide Button</button>
        ) : (
          <button onClick={() => setShowBtn(true)}>Show Button</button>
        )} */}

        {/* {showBtn && <button onClick={() => setShowBtn(false)}>Hide Button</button>}
        {!showBtn && <button onClick={() => setShowBtn(true)}>Show Button</button>} */}
        
    {/* {showBtn ? <button >Hide Button</button> : <button >Show Button</button>} */}
            <br />
            <br />
        <button onClick={() => setShowBtn(!showBtn)}>Toggle Button</button>


      </div>


      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
