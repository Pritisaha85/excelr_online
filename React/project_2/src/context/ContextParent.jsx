import React, { useContext } from 'react'
import { PropertyContext } from './PropertyContext'
//provider-grandparentcontext
//consumer-grandchild
const GrandparentContext = () => {
  let property='pune'
  return (
   <>
   <div>Grandparent</div>
   <PropertyContext.Provider value={property}>
     <Parent />
   </PropertyContext.Provider>
  
   </>
   
  )
}

const Parent = () => {
  return (
   <>
    <div>
      Parent
    </div>
    <Child />
   </>
  )
}
const Child = () => {
  return (
   <>
   
    <div>
      Child
    </div>
    <Grandchild />
    </>
  )
}
const Grandchild = () => {
 let data=   useContext(PropertyContext)
  return (
    <>
    <div>
        {data}from GrandChild
    </div>
      <div>
      Grandchild
    </div>
    </>
  
  )
}



export default GrandparentContext
