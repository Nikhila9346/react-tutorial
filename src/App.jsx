//!26/10/24
//!JSX

// import JavascriptXtension from "./JSX/JavascriptXtension"

// let App = ()=>{
//     return <JavascriptXtension/>
// }

// export default App

//!29/10/24
//!useState
// import State from "./useState/State"

// let App = ()=>{
//     return <State/>
// }
// export default App

//!4/11/24
//!Props, defaultProps, javascript default parameters
// import ParentProp from "./Props/ParentProp";

// let App = ()=>{
//     return <ParentProp></ParentProp>
// }
// export default App

//!06/11/24
//!PROP DRILLING
// import GrandFather from "./Props/PropDrilling/GrandFather"

// let App = ()=>{
//     return <GrandFather/>
// }
// export default App

//!07/11/24
//!useContext()
// import GrandFatherContext from "./useContext/GrandFatherContext"
// import React from "react"

// export let Name = React.createContext()
// export let Age = React.createContext()
// export let Obj = React.createContext()

// let obj = {
//     place: "Hyderabad", 
//     country: "India",
//     fun: ()=>{
//         console.log("hello")
//     }
// }

// let App = ()=>{
//     return <>
//         <Name.Provider value="Rohit">
//             <Age.Provider value={24}>
//                 <Obj.Provider value={obj}>
//                     <GrandFatherContext></GrandFatherContext>
//                 </Obj.Provider>
//             </Age.Provider>
//         </Name.Provider>
//     </>
// }
// export default App

//!08-11-24
//!Inline CSS
import InlineCss from "./AddingStyles/InlineCSS"

let App = ()=>{
    return <InlineCss></InlineCss>
}
export default App