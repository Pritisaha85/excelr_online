const parent2=()=>{
return(
    <>
    <h1>parent2</h1>
    <child2 name={"raj"}/>
     id={1} age={20} email={"abc@gmail.com"}</>
)
}
const child=(props)=>{
    return(
        <>
        <h1>{props.name}</h1>
        <h1>{props.email}</h1>
        <h1>child2</h1>
        </>
    )
}
export default parent2

//2:30 minutes done only 30 minute