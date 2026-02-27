
import React,{memo, useState,useRef} from "react";

function ReactMemo(){
    const [skills,setSkill]=useState([]);
    const skillInput=useRef('');

    const handleClick=()=>{
        const skillInputValue=skillInput.current.value;
        if(skillInputValue.length>5){
            setSkill((prevSkills)=>{
            return [...prevSkills,skillInputValue]
        })
        skillInput.current.value='';
        }
        
    }
    return(<>
    <input type="text" name="" id="" ref={skillInput}/>
    <button onClick={handleClick}>Add Skill</button>
    <ul>
        {skills.map((item,index)=>{
        return <li key={index}>{item}</li>
    })}
    </ul>
    
    </>)
}

export default memo(ReactMemo);