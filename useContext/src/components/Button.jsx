import React , {useContext} from 'react'
import { counterContext } from '../context/context' 

 
function Button() {
    const counter = useContext(counterContext);
  return (
    <div>
      I am Button Component
      <button className='px-4 py-2 bg-blue-500 text-white ' onClick={() => counter.setCount((count) => count + 1)}>{counter.count}</button>
    </div>
  )
}

export default Button
