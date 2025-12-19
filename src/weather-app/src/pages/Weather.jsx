/*import '../Style/Weather.css'
export default function weather(){
    return(
        <div>
            <h1>Weather page</h1>
        </div>
    )
}*/





import React from "react";
import "../Style/Weather.css";
import WeatherCard from "../components/WeatherCard";
import SearchBar from "../components/SearchBar";
import cloudIcon from "../assets/some_clouds.png";
import sunIcon from "../assets/some_sun.png";
import rainIcon from "../assets/some_rain.png";



const weatherData = [
  { city: "Tunis", temperature: 18, icon: cloudIcon },
  { city: "Bizerte", temperature: 22, icon: sunIcon },
  { city: "Sousse", temperature: 25, icon: rainIcon },
  { city: "Gafsa", temperature: 16, icon: sunIcon},
];

export default function Weather() {
  return (
    <div className="weather-page">
      <SearchBar />
      <div className="weather-container">
        {weatherData.map((item, index) => (
          <WeatherCard
            key={index}
            city={item.city}
            temperature={item.temperature}
            icon={item.icon}
          />
        ))}
      </div>
    </div>
  );
}





