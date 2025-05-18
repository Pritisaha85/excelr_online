import { useState } from "react";

function Example1(){
    let [name, setName]=useState("RAJ");
    let change=()=>{
        setName("kumar")
    }
return(
    <>
    <h1>{name}</h1>
    <button onClick={change}>Click to change button name</button>
    </>
);
}
export default Example1;