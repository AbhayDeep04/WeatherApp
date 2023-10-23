import React from 'react';
import { Link } from 'react-router-dom';

function WeatherList({ weatherData }) {
  return (
    <div>
      <h2 style={{ fontSize: '20px', color: 'blue' }}>Weather Data List</h2>
      <ul>
        {weatherData.map((data, index) => (
          <li key={index} style={{ margin: '5px', padding: '5px', border: '1px solid #ccc' }}>
            <Link to={`/detail/${data.city_name}`}>
              <span style={{ fontWeight: 'bold' }}>City:</span> {data.city_name} -{' '}
              <span style={{ fontWeight: 'bold' }}>Temperature:</span> {data.temp}°C -{' '}
              <span style={{ fontWeight: 'bold' }}>Condition:</span> {data.weather.description}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WeatherList;
