import { useState } from "react";

export default function Todo () {
    const [task , setTask] = useState("") ;
    const [list,setList] = useState([]) ;

    const addTask = () => {
        if (task.trim() === "") return ;
        setList([...list, {text: task , done:false}]) ;
        setTask("") ;
    }

    const toggleTask = (index) => {
        const updated = [...list] ;
        updated[index].done = !updated[index].done ;
        setList(updated);
    }

    const deleteTask = (index) => {
        setList (list.filter((_,i) => i !== index))
    }
    return (
        <div style={{fontFamily:"Arial" , padding:20}}>
        <h2>React TODO App</h2>

        <input 
        type="text" 
        value={task} 
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter Task"
        style={{padding : 10 , width:200}}
        />

        <button onClick={addTask} style={{marginTop:10}}>Add</button>

        <div style={{mariginTop:20}}>
            {list.map((item, index) => (
                <div 
                    key={index}
                    style={{
                        background:"#f2f2f2",
                        padding :20 ,
                        marginBottom:10,
                        borderRadius:6 ,
                        display:"flex",
                        justifyContent:"space-between",
                        width:260 ,

                    }}
                    > 
                    <span style={{
                        textDecoration:item.done ? "line-through" : "none" ,
                    }}
                    onClick={() => toggleTask(index)}
                    >
                        {item.text}
                    </span>
                    <button onClick={() => deleteTask(index)}>Delete</button>
                </div>
            ))}
                </div>
        

        </div>
    

)};
