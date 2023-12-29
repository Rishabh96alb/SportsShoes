// "use client"
// import React, { useContext } from 'react'
// import { MyContext } from './Helper/Context'
// import Const from './Components/Const'

// const page = () => {
//   const user=useContext(MyContext)
//   console.log(user)
//   return (
//     <div>{user}
//     <Const />

//     </div>
//   )
// }

// export default page

// react tostify //

"use client"
import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const page = () => {
  const notify=()=>{
    toast("Login Successfull!")
  }
  return (
    <div className='p-5'>
      <button onClick={notify} className='px-4 py-4 bg-blue-300 rounded font-bold text-lg'>Login</button>
      <ToastContainer/>
    </div>
  )
}

export default page