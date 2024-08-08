import { useEffect, useState } from 'react';
import './App.css';
import loader from './assets/loader.svg';
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

function App() {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    fetch(`http://api.airvisual.com/v2/nearest_city?key=${API_KEY}`)
      .then((response) => {
        return response.json();
      })
      .then((responseData) => {
        console.log(responseData);
        setWeatherData({
          city: responseData.data.city,
          country: responseData.data.country,
          iconId: responseData.data.current.weather.ic,
          temperature: responseData.data.current.weather.tp,
        });
      });
  }, []);

  return (
    <main>
      <div className={`loader-container ${!weatherData && 'active'}`}>
        <img src={loader} alt="loader icon" />
      </div>
      {weatherData && (
        <>
          <p className="city-name">{weatherData.city}</p>
          <p className="country-name">{weatherData.country}</p>
          <p className="temperature">{weatherData.temperature}°</p>
          <div className="info-icon-container">
            <img
              src={`/icons/${weatherData.iconId}.svg`}
              className="info-icon"
              alt="weather icon"
            />
          </div>
        </>
      )}
    </main>
  );
}

export default App;
