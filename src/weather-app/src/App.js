<<<<<<< HEAD
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
=======
/*import "./App.css";
import { BrowserRouter as Router , Routes,Route } from "react-router-dom";
import Header from "./components/Header";
import NavBar from "./components/NavBar";

import Home from "./pages/Home"
import Weather from "./pages/Weather"
import About from "./pages/About"
 export default function App() {
  return(
    <Router>
      <div className="app">
        <Header/>
        </div>
        <NavBar/>
        <main>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Weather" element={<Weather/>}/>
            <Route path="/About" element={<About/>}/>
          </Routes>
        </main>
    </Router>
  );

 }     */


 import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import NavBar from "./components/NavBar";

import Home from "./pages/Home";
import Weather from "./pages/Weather";
import About from "./pages/About";
import Auth from "./pages/Auth";


export default function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/weather" element={<Weather />} />
            <Route path="/about" element={<About />} />
            <Route path="/auth" element={<Auth />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}






>>>>>>> 32e4bd3b846e1811936a43b9f3111c03c9fa482d
