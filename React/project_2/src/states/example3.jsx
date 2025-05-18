 
 import{useState} from "react";
 import download from "./download.jpeg"
 import jai from "./jai.jpg"
 const Example3=()=>{
    let[image,setImage]=useState(download);
    let change=()=>{
        setImage(jai);
    }
return(
    <>
    <img src={image} alt="" width="200px" height="200px" />
    <br />
    <button onClick={change}>click</button>
    </>
)
}
export default Example3

//1:37