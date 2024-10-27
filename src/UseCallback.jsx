import React, { useCallback, useState } from 'react'
import Usememo from './Usememo'
import ChildA from './ChildA'

function UseCallback() {
    const [add,setAdd]=useState(0)
    const [count,setCount]=useState(0)
  
  const Learning =useCallback(()=>{console.log("some functionality")},[count])
    return (
      <>
     
      
      <h1>USeCallback</h1>
      <ChildA Learning={Learning} count={count}/>
      <h1>{add}</h1>
      <br /><br /><br />
     
      <button onClick={()=>{setAdd(add+1)}}>Add</button>
      <br /><br /><br />
      <h1>{count}</h1>
      <br /><br /><br />
      <button onClick={()=>{setCount(count+1)}}>Count</button>
      </>
    )
  }
  
  
export default UseCallback