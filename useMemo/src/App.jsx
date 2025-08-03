import { useMemo, useState } from 'react'


const num = new Array(30_000_000).fill(1).map((_, i) => {
  return {
    index: i,
    isMagical: (i === 29_000_000)
  }
})

function App() {
  const [count, setCount] = useState(0)
  const [number, setNumber] = useState(num)

  // const magical = number.find((n=>n.isMagical === true),[])
  const magical = useMemo(() => number.find((n => n.isMagical === true)), [number])
  return (
    <div className="App flex flex-col items-center justify-center min-h-screen w-full bg-slate-900 text-white" >

      <div className="card my-4 flex flex-col items-center justify-center">
        <span className='my-4 text-center bg-red-600 text-white px-4 py-2 rounded-xl'>magical number is {magical.index}</span>
        <button className='px-4 py-2 bg-blue-500 text-white rounded-xl' onClick={() => {
          setCount((count) => count + 1)
          if(count === 10){
            setNumber(new Array(10_000_000).fill(1).map((_,i)=>{
              return{
                index:i,
                isMagical:(i===9_000_000)
              }
            }))
          }

        }

        }>
          count is {count}
        </button>
        <p className='my-4 text-center'>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs my-4 text-center">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
