/*import React, { useState } from "react";

function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // empêche le rechargement de la page
    if (city.trim() !== "") {
      onSearch(city); // envoyer la ville à App.js
      setCity(""); // réinitialiser le champ
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ margin: "20px", textAlign: "center" }}>
      <input
        type="text"
        placeholder="Entrez une ville"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        style={{ padding: "10px", width: "200px" }}
      />
      <button
        type="submit"
        style={{
          padding: "10px 15px",
          marginLeft: "10px",
          cursor: "pointer"
        }}
      >
        OK
      </button>
    </form>
  );
}

export default SearchBar;*/




import React from "react";
import "../Style/SearchBar.css"; 

export default function SearchBar() {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Rechercher une ville..." />
      <button>Rechercher</button>
    </div>
  );
}
