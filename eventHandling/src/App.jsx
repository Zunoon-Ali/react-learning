import React, { useRef, useState } from 'react';

function App() {
  const buttonRef = useRef(null);
  const [isRed, setIsRed] = useState(false);

  const [input, setInput] = useState({
    name: "",
    email: ""
  });

  const handleOnClick = () => {
    alert('button clicked');
  };

  const handleMouseOver = () => {
    buttonRef.current.style.backgroundColor = 'red'; // temporarily red
  };

  const handleMouseOut = () => {
    // revert back to original state color
    buttonRef.current.style.backgroundColor = isRed ? 'red' : 'blue';
  };

  const toggleColor = () => {
    setIsRed(prev => {
      const newState = !prev;
      // update button color if not hovering
      if (buttonRef.current) {
        buttonRef.current.style.backgroundColor = newState ? 'red' : 'blue';
      }
      return newState;
    });
  };


  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInput(prev => ({ ...prev, [name]: value }))
  }

  return (
    <div>
      <div>
        <button onClick={handleOnClick}>Click me</button>
      </div>

      {/* Toggle background color */}
      <div
        onClick={toggleColor}
        style={{
          cursor: 'pointer',
          padding: '10px',
          margin: '10px 0',
          backgroundColor: isRed ? 'red' : 'blue',
          color: 'white',
          width: '150px',
          textAlign: 'center'
        }}
      >
        Toggle Background
      </div>

      {/* Button with hover effect */}
      <div>
        <button
          ref={buttonRef}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          style={{
            width: '200px',
            height: '200px',
            backgroundColor: isRed ? 'red' : 'blue',
            color: 'white',
            border: 'none',
            cursor: 'pointer'
          }}
        >
          Mouse Over Me
        </button>
      </div>

      <div>
        <input type="text" name='name' value={input.name} onChange={handleOnChange}
          style={{ padding: "10px", margin: "10px 0" }} placeholder='Enter your name' />
      </div>
      <div>

        <input type="email" name='email' value={input.email} onChange={handleOnChange}
          style={{ padding: "10px", margin: "10px 0" }}  placeholder='Enter your email' />
      </div>

    </div>
  );
}

export default App;
