// let InlineCss = ()=>{
//     return <>
//         <h1 style={{color: "white", backgroundColor: "black", textAlign: "center", fontFamily: "fantasy"}}>INLINE CSS</h1>
//     </>
// }
// export default InlineCss

//pass it as an obj
let InlineCss = ()=>{
    let styles = {
        color: "white",
        backgroundColor: "black", 
        textAlign: "center", 
        fontFamily: "fantasy"
    }
    return <>
        <h1 style={styles}>INLINE CSS</h1>
    </>
}
export default InlineCss
