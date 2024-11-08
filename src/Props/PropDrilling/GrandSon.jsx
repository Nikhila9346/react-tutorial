let GrandSon = (props)=>{
    console.log(props)
    let {send2: {send1: {product, price}}} = props
    return <h1>GrandSon took {product} which is worth {price}</h1>
}
export default GrandSon