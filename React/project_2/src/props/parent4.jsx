import React from 'react'

const Parent4 = () => {
    let greet=()=>{
        alert('welcome to react')
    }
  return (
    <>
    <div>
      parent4
    </div>
    <Child4 func={greet}/> 
    {/* //passing data */}
    </>
  )
}

const Child4=(props)=>{
    return(
       <>
        <div>
            child4
        </div>
        <button onClick={props.func}>click</button>
       </>
    )
}
export default Parent4;
