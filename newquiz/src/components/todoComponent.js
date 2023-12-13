import React, { useState } from 'react'



const TodoComponent = () => {
  const  [myTask,setMyTask]=useState([
    "Go to Markey",
    "buy Grocery",
    "Watch TV",
    "Play Cricket"
  
    
  ])
  console.log(myTask)
  function onInput (e){

    setItem(e.target.value)
  }
  
  const [item,setItem]=useState("")
  function onHandleClick(e){
    let arr=[item]
    setMyTask(...arr)
  }
  return (
    <>
    <h1>MY TO DO APP</h1>
      <input type='text'placeholder='Add item here...'onInput={(e)=>setMyTask(e.target.value)} value={item}></input>
      <button onClick={()=>{onHandleClick()}}>Add</button>
      <ul>
      {myTask.map((items)=>(
        <li>{items}</li>
      ))}
      </ul>
    </>
  )
}

export default TodoComponent
