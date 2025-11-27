import StudentList from "./StudentList";

export default function App() {
  const data = [
    {name:"Abhi" , age:18 , course:"react"},
    {name:"Chiranth" , age:19 , course:"chemistry"},
    {name:"Ajaay" , age:21 , course:"physics"},

  ];

  return (
    <div>
      <StudentList students={data} />
    </div>
  )
}