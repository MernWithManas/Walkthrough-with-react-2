import React, { useState } from 'react'

function App() {
const[value, setValue] = useState(0);


  return (
    <>
    <div className='grid h-screen place-items-center'>
      <div className='grid w-[400px] p-8 bg-red-600 h-[200px] place-items-center'>
        <span className='text-4xl text-white'>{value}</span>
        <div className='flex gap-6 mt-5'>
        <button onClick={()=> {setValue (value + 1)}} className="px-4 py-3 bg-white">Increment</button>
        <button onClick={()=> {setValue (value - 1)}} className="px-4 py-3 bg-white">Decrement</button>
        </div>
      </div>
    </div>
    
    </>
  )
}

export default App;