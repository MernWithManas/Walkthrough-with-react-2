import React, { useState } from 'react'
import "./App.css"

function App() {
const[login, setLogin] = useState(true);
const flip = () => {
  setLogin(!login)
}

  return (
    <>
    <div className='grid h-screen place-items-center'>
      <div className='grid px-8 py-10 border w-[350px] border-gray-300 place-items-center'>
        <img className='w-[200px] mb-10' src={require("./insta.png")} />
        <input hidden={login} type="text" placeholder='Mobile Number or Email' />
        <input hidden={login} type="text" placeholder='Full Name'/>
        <input type="text" placeholder='Phone Number, Username or Email' />
        <input type="password" placeholder='Password' />
        <button className='w-full py-1 mt-10 mb-5 text-white rounded-lg bg-sky-500'>{login?"Log in":"Sign up"}</button>
        <div>{login?"Don't have account?":"Have an account?"}
        <span className='cursor-pointer' onClick={flip}>{login?" Sign up":" Log in"}</span>
        </div>
      </div>

    </div>
    </>
  )
}

export default App;