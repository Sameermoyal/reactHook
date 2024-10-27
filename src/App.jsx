import React, { useMemo, useState } from 'react'

function App() {
 const[add,setAdd]= useState(0)
 const [sub,setSub]=useState(100)

const multiplication =useMemo(function multiply(){
  
  console.log("multiply function call ")
  return add*10
},[add])

 return (
    <>
    <h1>useMemo</h1>
     <br /><br />
     <button onClick={()=>{setAdd(add+1)}}>Add</button>
     <span>{add}</span>
    <br /><br />{multiplication}
     <br />
     <br />
     <br />
     <button onClick={()=>{setSub(sub-1)}}>Sub</button>
     <span>{sub}</span>
    </>
  )
}

export default App