import { useState } from "react";

export default function Crud() {
    const [task , setTask] = useState("") ;
    const [list , setList] = useState([]);

    const addTask = () => {
        if(task.trim() === "") return ;
        setList([...list , task]) ;
        setTask("") ;
    };

    const deleteTask = (index) => {
        const updated = list.filter((_, i) => i !== index) ;
        setList(updated) ;
    } ;

    return (
        <div style={{fontFamily:"Arial" , padding : 20}}>
            <h2>React CRUD App</h2>

            <input 
                type="text"
                placeholder="Enter Task"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                style={{padding: 8 , width:200}}
            />

            <button onClick={addTask} style={{marginLeft:20}}>
                Add
            </button>

            <div style={{marginTop: 20}}>
                {list.map((item , index) => (
                    <p key={index} style={{background:"f2f2f2" , padding: 10 , borderRadius:6 , display:"flex" , justifyContent:"space-between" , width:250}} >
                        {item}
                    <button onClick={() => deleteTask(index)}>Delete</button>    
                    </p>
                ))}
            </div>
        </div>
    )
}