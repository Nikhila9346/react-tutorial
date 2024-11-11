//!Form Handling - Uncontrolled Way -- DOM

// import React from 'react'

// let UncontrolledWay = () => {
//     let validation = (e)=>{
//         e.preventDefault()
//         let name = document.getElementById("name").value
//         let email = document.getElementById("email").value
//         let password = document.getElementById("password").value
//         console.log(name, email, password)
//     }
//   return (
//     <form onSubmit={validation}>
//         <input type="text" id='name' placeholder='Enter your name'/>
//         <br /><br />
//         <input type="text" id='email' placeholder='Enter your email'/>
//         <br /><br />
//         <input type="text" id='password' placeholder='Enter your password'/>
//         <br /><br />
//         <input type="submit" value="Register" />
//     </form>
//   )
// }

// export default UncontrolledWay

//!Form Handling - Uncontrolled Way -- useRef()

import React, { useRef } from 'react'

let UncontrolledWay = () => {
    let nameRef = useRef()
    let emailRef = useRef()
    let passwordRef = useRef()
    let validation = (e)=>{
        e.preventDefault()
        console.log(nameRef.current.value)
        console.log(emailRef.current.value)
        console.log(passwordRef.current.value)
    }
  return (
    <form onSubmit={validation}>
        <input type="text" id='name' placeholder='Enter your name' ref={nameRef}/>
        <br /><br />
        <input type="text" id='email' placeholder='Enter your email' ref={emailRef}/>
        <br /><br />
        <input type="text" id='password' placeholder='Enter your password'ref={passwordRef}/>
        <br /><br />
        <input type="submit" value="Register" />
    </form>
  )
}

export default UncontrolledWay


