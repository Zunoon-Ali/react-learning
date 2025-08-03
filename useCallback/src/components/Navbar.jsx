import React from 'react'
import { memo } from 'react'

function Navbar({ adjective, getAdjective }) {
    console.log("Navbar rendered")
    return (
        <div>
            I am a {adjective} Navbar
            <button onClick={() => getAdjective()}>change me {getAdjective()}</button>
        </div>
    )
}

export default memo(Navbar)
