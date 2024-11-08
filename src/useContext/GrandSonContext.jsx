import { useContext } from "react"
import { Name, Age, Obj } from "../App"

let GrandSonContext = ()=>{
    let name = useContext(Name)
    let age = useContext(Age)
    let obj = useContext(Obj)
    let { place, country, fun} = obj
    return <>
        <h1>{name}--{age}--{place}--{country}</h1>
        <button onClick={fun}>Click me to say hello</button>
    </>
}
export default GrandSonContext