import { useState } from "react";

export default function FormApp() {
    const [name , setName] = useState("") ;
    const [email , setEmail] = useState("") ;
    const [course , setCourse] = useState("") ;

    const [submitted , setSubmitted] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault() ;
        setSubmitted(true);
    };

    return (
        <div style={{fontFamily:"Arial"  , padding:20}}>
            <h2>Student Registration Form</h2>

            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Enter Name" value={name} onChange={(e) => setName(e.target.value)} />
                <br />
                <input type="email" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <br/> <br />
                <input type="text" placeholder="Enter Course" value={course} onChange={(e) => setCourse(e.target.value)} />
                <button type="submit">Submit </button>
            </form>

            {submitted && (
                <div style={{marginTop:20}}>
                    <h3>Submit Data</h3>
                    <p>Name: {name}</p>
                    <p>Email: {email}</p>
                    <p>Course: {course}</p>
                </div>
            )}
        </div>
    )
}