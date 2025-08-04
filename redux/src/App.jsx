import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './redux/counter/counterSlice'


function App() {
  const dispatch = useDispatch()
  const count = useSelector((state) => state.counter.value)

  return (
    <>
      <Navbar />
      <div style={{ display: 'flex', gap: '10px' }}>
        <button onClick={() => dispatch(decrement())}> - </button>
        <p>Counter is {count}</p>
        <button onClick={() => dispatch(increment())}> + </button>
      </div>
    </>
  )
}

export default App
