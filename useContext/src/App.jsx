import React, { useState } from 'react';
import { counterContext } from './context/context';
import Navbar from './components/Navbar';
function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <counterContext.Provider value={{ count, setCount }} >
        <Navbar />
        <div className="text-3xl font-bold bg-red-500 text-white text-center p-4">
          Context API
        </div>

        <div className="flex justify-center items-center flex-col gap-4 mt-4">
          <button
            className="px-8 py-2 rounded-2xl bg-blue-500 text-white"
            onClick={() => setCount(count + 1)}
          >
            Click Counter: {count}
          </button>

        </div>
      </counterContext.Provider>
    </div >
  );
}

export default App;
