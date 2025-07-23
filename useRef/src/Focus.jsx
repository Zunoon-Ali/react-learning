import React, { useRef, useEffect, useState } from 'react'

function Focus() {
  const inputRef = useRef(null)
  const [isFocused, setIsFocused] = useState(false)

  const focusInput = () => {
    inputRef.current.focus()
  }

  useEffect(() => {
    inputRef.current.focus()
    setIsFocused(true) // also update state when auto-focused
  }, [])

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        placeholder={isFocused ? "Focus" : "Not Focus"}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        style={{ padding: "10px", margin: "10px 0" }}
      />
      <button onClick={focusInput} style={{ padding: "10px", margin: "10px 0" }}>{isFocused ? "Focus" : "Not Focus"} </button>
    </div>
  )
}

export default Focus
