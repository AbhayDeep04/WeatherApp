import React from 'react';

function SummaryStats({ weatherData }) {
  const totalItems = weatherData.length;

  const sortedTemperatures = weatherData.map(data => data.temp).sort((a, b) => a - b);
  const middle = Math.floor(sortedTemperatures.length / 2);
  const median = sortedTemperatures.length % 2 === 0
    ? ((sortedTemperatures[middle - 1] + sortedTemperatures[middle]) / 2).toFixed(1)
    : sortedTemperatures[middle].toFixed(1);

  const sumOfTemperatures = weatherData.reduce((sum, data) => sum + data.temp, 0);
  const mean = (sumOfTemperatures / totalItems).toFixed(1);

  return (
    <div>
      <h2>Summary Statistics</h2>
      <p>Total Items: {totalItems}</p>
      <p>Median Temperature: {median}°C</p>
      <p>Mean Temperature: {mean}°C</p>
    </div>
  );
}

export default SummaryStats;
