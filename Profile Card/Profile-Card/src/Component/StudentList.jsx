import { useState } from "react";

export default function StudentList () {
    const [minMarks , setMinMarks] = useState("") ;

    const [students] = useState([
    {name:"Asha", marks:85},
    {name:"Ravi", marks:60},
    {name:"Megha", marks:30},
    {name:"Kunal", marks:75}
]);

    const filtered = students.filter (s=>
        minMarks === "" ? true :s.marks >= Number(minMarks)
    );

    return (
        <div style={{fontFamily :"Arial" , padding : 20}}>
            <h2>Student List</h2>

            <label>Search Min Marks:</label>
            <input type="number"
                    value={minMarks}
                    onChange={e => setMinMarks(e.target.value)}
                    style={{marginBottom: 10 , display:"block"}}
            />

            {filtered.length ===0 ?(
                <p>No results found</p>
            ) : (
                filtered.map((s,index) => (
                    <p key={index}>
                        {s.name} - {s.marks}
                    </p>
                ))
            )
        }
        </div>
    )
}