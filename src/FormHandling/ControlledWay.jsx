import React, {useState} from 'react'

const ControlledWay = () => {
    let [details, setDetails] = useState({
        name: "",
        email: "",
        password: ""
    })
    let {name, email, password} = details
    let NameChange = (e)=>{
        setDetails({name: e.target.value})
    }
    let EmailChange = (e)=>{
        setDetails({email: e.target.value})
    }
    let PasswordChange = (e)=>{
        setDetails({password: e.target.value})
    }
    let handleSubmit = (e)=>{
        e.preventDefault()
        console.log(name)
        console.log(email)
        console.log(password)
    }
  return <>
    <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id='name' name='name' value={name} onChange={NameChange}/>
        <br /><br />
        <label htmlFor="">Email:</label>
        <input type="email" name="email" id="email" value={email} onChange={EmailChange}/>
        <br /><br />
        <label htmlFor="">Password:</label>
        <input type="password" name="password" id="password" value={password} onChange={PasswordChange}/>
        <br /><br />
        <input type="submit" value="REGISTER" />
    </form>
  </>
}

export default ControlledWay
