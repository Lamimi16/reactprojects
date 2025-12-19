import React from "react";
import WeatherFormExample from "./components/weatherFormExample";
import WeatherObjectExample from "./components/WeatherObjectExample";

export default function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h1 style={{ color: "#004aad" }}>🌤️ Application Météo avec useState</h1>
      <hr style={{ width: "60%", margin: "20px auto", border: "1px solid #ccc" }} />

      {/* Composant avec formulaire */}
      <WeatherFormExample />

      <hr style={{ width: "60%", margin: "40px auto", border: "1px solid #ccc" }} />

      {/* Composant avec boutons d’action */}
      <WeatherObjectExample />
    </div>
  );
}
