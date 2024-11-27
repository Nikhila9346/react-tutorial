import React from "react";
import UnMount from "./UnMount";

class LifeCycle extends React.Component{
    constructor(){
        super()
        console.log("CONSTRUCTOR METHOD IS INVOKED")
        // console.log(this)
        this.state = {
            name: "NIKHILA"
        }
    }
    render(){
        console.log("RENDER METHOD IS INVOKED")
        return <>
            <h1>NAME -- { this.state.name }</h1>
            {this.state.name == "NIKHILA"? <UnMount/> : <></>}
            <button onClick={ ()=>{
                this.setState({name: "NIKHILA REDDY"})
            } }>CLICK ME TO CHANGE NAME</button>
        </>
    }
    componentDidMount(){
        console.log("COMPONENTDIDMOUNT GOT INVOKED")
    }
    componentDidUpdate(){
        console.log("COMPONENTDIDUPDATE GOT INVOKED")
    }
}
export default LifeCycle