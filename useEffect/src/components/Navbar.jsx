import React, { useEffect } from 'react'

function Navbar({ color }) {
 
  return (
    <div>
      <nav style={{ backgroundColor: color, color: "white", padding: "10px" }}>
        I am Navbar of color: {color}
      </nav>
    </div>
  )
}

export default Navbar
