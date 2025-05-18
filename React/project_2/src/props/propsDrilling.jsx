import React from 'react'

const Grandparent = () => {
  let property='pune'
  return (
   <>
   <div>Grandparent</div>
   <Parent property={property}/>
   </>
   
  )
}

const Parent = ({property}) => {
  return (
   <>
    <div>
      Parent
    </div>
    <Child property={property}/>
   </>
  )
}
const Child = ({property}) => {
  return (
   <>
   
    <div>
      Child
    </div>
    <Grandchild property={property}/>
    </>
  )
}
const Grandchild = () => {
  return (
    <div>
      Grandchild
    </div>
  )
}



export default Grandparent
