import React from 'react';
import "../Style/card.css";

export default function WeatherCard({ city, temperature, icon, condition }) {
  return (
    <div className='weather-card'>
      <h3>{city}</h3>
      <p>{temperature}°C</p>
      <img src={icon} alt={condition || "weather icon"} />
    </div>
  );
}
