import React from 'react';

function WeatherList({ weatherData }) {
  return (
    <div>
      <h2 style={{ fontSize: '20px', color: 'blue' }}>Weather Data List</h2>
      <ul>
        {weatherData.map((data, index) => (
          <li key={index} style={{ margin: '5px', padding: '5px', border: '1px solid #ccc' }}>
            <span style={{ fontWeight: 'bold' }}>City:</span> {data.city_name} - <span style={{ fontWeight: 'bold' }}>Temperature:</span> {data.temp}°C - <span style={{ fontWeight: 'bold' }}>Condition:</span> {data.weather.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WeatherList;
