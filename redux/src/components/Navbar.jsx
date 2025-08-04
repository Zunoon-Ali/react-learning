import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { multiply } from '../redux/counter/counterSlice'

function Navbar() {
    const dispatch = useDispatch()
    const count = useSelector((state) => state.counter.value)
    return (
        <div>
            I am counter: {count}  Navbar
            <button onClick={() => dispatch(multiply())}> * </button>
        </div>
    )
}

export default Navbar
