// let ChildProp = (props)=>{
//     console.log(props)
//     return <h1>{props.firstName} {props.lastName} {props.age}</h1>
// }
// export default ChildProp


//*Applying destructuring concept. Task: Display hi when clicked on a button and passing an object as parameter(destructuring it)

// let ChildProp = ({firstName, lastName, age, fun, obj:{place}})=>{
//     return <>
//         <h1>{firstName} {lastName} {age} {place}</h1>
//         <button onClick={fun}>Click Me to say Hi</button>
//     </>
// }
// export default ChildProp

//*Props Children

// let ChildProp = ({msg, children})=>{
//     return <div>{msg} {children}</div>
// }
// export default ChildProp

//*Default Props
//*country = "India" is Javascript default parameters

// let ChildProp = ({name, age, place, state, country = "India"})=>{
//     return <h1>{name}-{age}-{place}-{state}-{country}</h1>
// }
// export default ChildProp

// ChildProp.defaultProps = {
//     place : "Hyderabad",
//     state : "Telangana",
// }

//*PropTypes

import proptypes from "prop-types"

let ChildProp = ({place, age})=>{
    return <h1>{place}-{age}</h1>
}
ChildProp.propTypes = {
    place:proptypes.string,
    age: proptypes.number
}

export default ChildProp