import ChildProp from "./ChildProp"

// let ParentProp = ()=>{
//     return <ChildProp firstName = "Pat" lastName = "Cummins" age = {37}/>
// }
// export default ParentProp

// let ParentProp = ()=>{
//     let sayHi = ()=>{
//         console.log("Hii")
//     }
//     return <ChildProp firstName = "Pat" lastName = "Cummins" age = {37} fun = {sayHi}/>
// }
// export default ParentProp

//*Passing object as an attribute

// let ParentProp = ()=>{
//     let sayHi = ()=>{
//         console.log("Hii")
//     }
//     return <ChildProp firstName = "Pat" lastName = "Cummins" age = {37} fun = {sayHi} obj = {{place:"Hyd"}}/>
// }
// export default ParentProp

//*Props Children

// let ParentProp = ()=>{
//     return <>
//         <ChildProp msg = "Happy Birthday">
//             <h1>VIRAT KOHLI</h1>
//         </ChildProp>
//     </>
// }
// export default ParentProp

//*Default Props

// let ParentProp = ()=>{
//     return <>
//         <ChildProp name="Nikhila" age = {23}></ChildProp>
//     </>
// }
// export default ParentProp

//*propTypes

let ParentProp = ()=>{
    return <>
        <ChildProp place="Hyd" age={23}></ChildProp>
    </>
}
export default ParentProp