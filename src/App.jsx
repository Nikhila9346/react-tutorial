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
// import InlineCss from "./AddingStyles/InlineCSS"

// let App = ()=>{
//     return <InlineCss></InlineCss>
// }
// export default App

//!09-11-24
//!GLOBAL CSS
// import React from "react";
// import GlobalCss from "./AddingStyles/GlobalCss";
// import "./Global.css"

// let App = ()=>{
//     return <GlobalCss/>
// }
// export default App

//!MODULE CSS

// import React from 'react'
// import Main from "../src/AddingStyles/Module/Main.jsx"

// const App = () => {
//   return (
//     <>
//         <Main></Main>
//     </>
//   )
// }

// export default App

//!11/11/24
//!Form Handling - Uncontrolled Way -- DOM
// import React from 'react'
// import UncontrolledWay from './FormHandling/UncontrolledWay'

// let App = () => {
//   return (
//       <UncontrolledWay/>
//   )
// }

// export default App

//!12/11/24
//!Form Handling - Controlled Way
// import React from 'react'
// import ControlledWay from './FormHandling/ControlledWay'

// const App = () => {
//   return <ControlledWay></ControlledWay>
// }

// export default App

//!18/11/24
//!LIFECYCLE METHOD
import React from 'react'
import LifeCycle from './LifeCycle/LifeCycle'

const App = () => {
  return <>
  <LifeCycle/>
  </>
}

export default App



