//!JSX - 26/10/24
// let JavascriptXtension = ()=>{
//     return <h1>JAVASCRIPT AND XML</h1>
// }
// export default JavascriptXtension

//!JAvascript Xtension --> App.jsx --> main.jsx(content should be displayed in index.html)

//!1. rendering multiple tags 

//*enclosing in a single parent
// let JavascriptXtension = ()=>{
//     return <div>
//         <h1>HEADING</h1>
//         <p>PARAGRAPH</p>
//         <button>Submit</button>
//     </div>
// }
// export default JavascriptXtension

//*using the concept - FRAGMENTS

import React from "react"
// let JavascriptXtension = ()=>{
//     return <React.Fragment>
//         <h1>HEADING1</h1>
//         <p>PARAGRAPH1</p>
//         <button>SUBMIT</button>
//     </React.Fragment>
// }
// export default JavascriptXtension

//*or you can enclose in an empty angular brackets

// let JavascriptXtension = ()=>{
//     return <>
//     <h1>HEADING</h1>
//     <h2>HEADING2</h2>
//     <button>SUBMIT</button>
//     </>
// }
// export default JavascriptXtension

//!2. opening and closing tags

// let  JavascriptXtension = ()=>{
//     return <>
//         <h1>HEADING</h1>
//         <input type="text" />
//         <br></br>
//         <hr />
//     </>
// }
// export default JavascriptXtension

//!3. instead of class,  for attributes use className, forName

// let JavascriptXtension =  ()=>{
//     return <>
//         <h1>HEADING</h1>
//         <label htmlFor="name">NAME: </label>
//         <input type="text" className="form-control" />
//     </>
// }
// export default JavascriptXtension

//!4. html elements should be always written in lowercase

// let JavascriptXtension = ()=>{
//     return  <>
//         <h1>HEADING</h1>
//         <input type="text" />
//         <br />
//         <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio, iusto!</p>
//     </>

// }
// export default JavascriptXtension

//! EXPRESSION

let JavascriptXtension = ()=>{
    let  name = "John";
    let  location = "HYD"
    let current = "TELANGANA"

    return <>
        <h1>MY NAME IS: {name}</h1>
        <h1>I AM RESIDING IN: {location}</h1>
        <h1>RIGHT NOW I AM IN: {current}</h1>
    </>
}
export  default JavascriptXtension;

