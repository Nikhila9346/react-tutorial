//onClick attribute should be written in camel case, the function should not be called instead it should be written in an expression
//!EXAMPLE 1
// import { useState } from "react"

// let State = ()=>{
//     let [count, setCount] = useState(0)

//     let handleIncrement = ()=>{
//         setCount(count + 1)
//     }
//     let handleDecrement = ()=>{
//         setCount(count - 1)
//     }
//     let handleReset = ()=>{
//         setCount(0)
//     }
//     return (
//         <>
//         <h1>{count}</h1>
//         <button onClick = {handleIncrement}>+</button>
//         <button onClick = {handleDecrement}>-</button>
//         <button onClick = {handleReset}>Reset</button>
//         </>
//     )
// }
// export default State

//!EXAMPLE 2
// import { useState } from "react"
// let State = ()=>{
//     let [name1, setName] = useState("")
//     let [age, setAge] = useState()
//     let [place, setPlace] = useState("")
//     let handleName = ()=>{
//         setName("Nikhila")
//     }
//     let handleAge = ()=>{
//         setAge(21)
//     }
//     let handlePlace = ()=>{
//         setPlace("Hyderabad")
//     }
//     return <>
//         <h1>My Name is: {name1}</h1>
//         <h1>My age is: {age}</h1>
//         <h1>I am from: {place}</h1>
//         <button onClick={handleName}>Reveal Name</button>
//         <button onClick={handleAge}>Reveal Age</button>
//         <button onClick={handlePlace}>Reveal Place</button>
//     </>
// }
// export default State

//!EXAMPLE 3
import { useState } from "react"
let State = ()=>{
    let [details, setDetails] = useState(
        {
            name: "",
            age: "",
            place: ""
        }
    )
    let {name, age, place} = details
    console.log(details)
    let handleDetails = ()=>{
        setDetails({name: "Nikhila", age: 21, place: "Hyd"})
    }
    return <>
        <h1>My name is: {name}</h1>
        <h1>My age is: {age}</h1>
        <h1>I am from: {place}</h1>
        <button onClick={handleDetails}>Reveal Details</button>
    </>
}
export default State