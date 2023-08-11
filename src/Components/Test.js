import React, { useState } from 'react'

const Test = () => {
  const items=[
   {id:0,color:'red',car:'Ford'},
    {id:1,color:'blue',car:'Mercedes'},
    {id:2,color:'green',car:'Ferrari'},
    {id:3,color:'yellow',car:'BMW'}  
   
  ]
  const omid=null
  //const omid={id:6,color:'green',car:'Ferrari'}
  console.log({...omid})

  const behnam=  [
     {id:4,color:'Aqua',car:'Lamari',kabab:'toop'},
    {id:5,color:'blue',car:'Mercedes'},
    {id:6,color:'green',car:'Ferrari'},  
    ]
    items.push({...omid})
    
    
    
    const [item,setItem]=useState(items)
   
  

  return (
    <div>
      {items.map((t)=>{
        return <li key={t.id}>
           {t.color}
        </li>
      })}
    </div>
  )
}

export default Test