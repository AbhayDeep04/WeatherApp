import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';

function TemperatureChart({ weatherData }) {

  const data = weatherData.map(item => ({
    city_name: item.city_name,
    temperature: item.temp,
  }));

  return (
    <div>
      <h2>Temperature Chart</h2>
      <BarChart width={600} height={400} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="city_name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="temperature" fill="#8884d8" />
      </BarChart>
    </div>
  );
}

export default TemperatureChart;

