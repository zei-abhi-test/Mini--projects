export default function StudentList({students}) {
    return (
        <div style={{fontFamily:"Arial" , padding:20}}>
            <h2>Student List</h2>

            {students.map((s, i) => (
                <p key={i}>{s.name} - {s.age} - {s.course} </p>
            ))}

            <h3>Total Students: {students.length} </h3>

        </div>
    )
}