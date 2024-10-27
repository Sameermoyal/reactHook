import React, { memo } from 'react'

function ChildA({Learning,count}) {
    console.log("child component")
  return (
    <div>ChildA</div>
  )
}

export default memo(ChildA)