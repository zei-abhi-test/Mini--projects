import { useState } from "react";

export default function Tabs() {
    const [ active , setActive] = useState("home") ;

    return (
        <div style={{fontFamily : "Arial"  , padding: 20}}>
            <h2>Tabs component</h2>

            <div style={{display:"flex" , gap: 20 , marginBottom: 20}}>
                <button onClick={() => setActive("home")}>Home</button>
                <button onClick={() => setActive("about")}>About</button>
                <button onClick={() => setActive("contact")}>Contact</button>
            </div>

            {active === "home" && <p>This is the home tab content</p>}
            {active === "about" && <p>This is the about tab content</p>}
            {active === "contact" && <p>This is the Contact tab content</p>}
        </div>


    )
}