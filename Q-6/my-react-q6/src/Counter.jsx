import { useState } from "react"; 

export default function Counter() {
    const [count , setCount] = useState(0) ;

    return (
        <div style={{fontFamily: "Arial" , padding: 20}}>
            <h2>Counter App</h2>
            <h3>Count: {count}</h3>

            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)} style={{marginLeft: 10 }}>Decrement</button>
            <button onClick={() => setCount(0)} style={{marginLeft:10}}>Reset</button>

            {count > 5 && <p>High Count!</p>}
        </div>
    )
}