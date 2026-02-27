import React, { useState } from "react";
import UseMemo from "./UseMemo";
import ReactMemo from "./ReactMemo";

function App(){
    const [todos,setTodos]=useState([]);
    const [count,setCount]=useState(0);

    const handleTodos=()=>{
        setTodos((prevTodo)=>{
            return [...prevTodo,'New Todo']
        })
    }
    const handleCount=()=>{
        setCount(count+1);
    }

    return(<>
    <h1>React.useMemo</h1>
    <h2>My todos</h2>
    {todos.map((item,index)=>{
        return <p key={index}>{item}</p>;
    })}
    <button onClick={handleTodos}>Add Todo</button>
    <hr/>
    <span>Count:{count}</span>
    <button onClick={handleCount} >+</button>
    <UseMemo/>
    <hr/>
    <ReactMemo/>
    </>)
}

export default App;