import React, { useEffect, useState } from "react";

const TodoComponent = () => {
  // const [myTask, setMyTask] = useState([
  //   "Go to Markey",
  //   "buy Grocery",
  //   "Watch TV",
  //   "Play Cricket",
  // ]);

  const [myTask,setMyTask] =useState([
    {text:"Go to Market",complete:false},
    {text:"buy grocery",complete:false},
    {text:"watch tv",complete:false},
    {text:"Play cricket",complete:false}

  ])
  const [item, setItem] = useState("");
  console.log(myTask);
  function handleChange(e) {
    // console.log("click")
    setItem(e.target.value);
  }
const [activeValue,setActiveValue]=useState(myTask.length)
  function handleAddTask() {
    if (item) {
      let arr = [...myTask, {text:item,complete:false}];
      setMyTask(arr);
      setItem("");
    }
  }
  function handleCheckbox(index){
    console.log("this is clicked",index)
    let arr =[...myTask]
    
      arr[index].complete=!arr[index].complete
    
      setMyTask(arr)
      let countArray=arr.filter((each)=>!each.complete)
      setActiveValue(countArray.length)

  }
  return (
    <>
      <h1>MY TO DO APP</h1>
      <input
        type="text"
        placeholder="Add item here..."
        onChange={handleChange}
        value={item}
      ></input>
      <button onClick={handleAddTask}>Add</button>
      <ul>
        {myTask.map((items, index) => (
          <li>
            <input type="checkbox" 
            complete={items.complete}
            onChange={()=>handleCheckbox(index)}></input>
            <span style={{textDecoration:items.complete?"line-through":""}}>
            {items.text}</span>
          </li>
        ))}
      </ul>
      <p>Active ToDos:{activeValue}</p>
    </>
  );
};

export default TodoComponent;
