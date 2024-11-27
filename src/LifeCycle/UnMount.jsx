import React from "react";

class UnMount extends React.Component{
    componentWillUnmount(){
        console.log("COMPONENTWILLUNMOUNT GOT INVOKED")
    }
    render(){
        return <>
            <h1>UNMOUNT</h1>
        </>
    }
}
export default UnMount 