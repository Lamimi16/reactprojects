/*import React from 'react'

export default function Header({name="3LIG"}) {
    const styleBizerte={
                backgroundColor:"green",
                color:"white",
                boxShadow:"2px 2px 2px black"
             }
    const styleSousse={
                backgroundColor:"blue",
                color:"white",
                boxShadow:"2px 2px 2px black"
             }
    const weather={ville:"Bizerte ",
                  temperature :"45°C"}
    return(
        <div>
             <h1> ☀️My weather APP</h1>
             <h2 style={{color:"red" }}> 14/10/2025 </h2>
             <h3 style={weather.ville === "Bizerte" ? styleBizerte : styleSousse}> 
                
                {weather.ville} - {weather.temperature}</h3>
            

        </div>
    )
}
*/





import React, { useState, useEffect } from "react";
import "../Style/Header.css";

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);
  const [date, setDate] = useState("");

  useEffect(() => {
    const today = new Date();
    setDate(today.toLocaleDateString("fr-FR", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric"
    }));
  }, []);

  return (
    <header className={darkMode ? "header dark" : "header"}>
      <h1>🌤️ Application Météo</h1>
      <p>{date}</p>
      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "☀️ Mode Jour" : "🌙 Mode Nuit"}
      </button>
    </header>
  );
}
