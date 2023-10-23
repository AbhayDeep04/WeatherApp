import React from 'react';
import { useParams } from 'react-router-dom';

function WeatherDetail({ weatherData }) {
  const { cityName } = useParams();

  const selectedWeatherData = weatherData.find(data => data.city_name === cityName);

  if (!selectedWeatherData) {
    return <div>Weather data not found for this city.</div>;
  }

  return (
    <div>
      <h2>Weather Detail for {selectedWeatherData.city_name}</h2>
      <p>Temperature: {selectedWeatherData.temp}°C</p>
      <p>Condition: {selectedWeatherData.weather.description}</p>
    </div>
  );
}

export default WeatherDetail;

