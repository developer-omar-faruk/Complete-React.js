import React, { useRef, useState } from 'react'

function UseRefForm() {
    console.log("From render");
    const emailRef =useRef(null);
    const passRef =useRef(null);

    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")

    const handleSubmit =(e)=>{
        e.preventDefault();
        console.log(emailRef.current.value)
        setEmail(emailRef.current.value);
        setPass(passRef.current.value);
        emailRef.current.value = null
        passRef.current.value = null
    }

  return (
    <div className='flex flex-col gap-5 items-center'>
        <h1 className='font-semibold mt-10'>useRef Form</h1>
      <form className='flex flex-col gap-4 items-center' onSubmit={handleSubmit}>
        <input className='border border-gray-600 p-2 rounded-sm' ref={emailRef} type="email" placeholder='Enter email' />
        <input className='border border-gray-600 p-2 rounded-sm' ref={passRef} type="password" placeholder='Enter password' />
        <button className="p-2 px-4 rounded-md cursor-pointer bg-gray-900 text-white font-semibold" type='submit'>Ligin</button>
      </form>
      <div>
        <h2>Email : {email}</h2> 
        <h2>Password : {pass}</h2>
      </div>
    </div>
  )
}

export default UseRefForm
