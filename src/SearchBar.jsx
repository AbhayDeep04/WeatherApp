import React, { useState } from 'react';

function SearchBar({ searchInput, setSearchInput, weatherData }) {
  const [filteredData, setFilteredData] = useState([]);

  const handleSearch = () => {
    const input = searchInput.toLowerCase().trim();

    if (input === '') {
      setFilteredData([]);
    } else {
      const filteredResults = weatherData.filter((data) =>
        data.city_name.toLowerCase().includes(input)
      );
      setFilteredData(filteredResults);
    }
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h2>Search Bar</h2>
      <input
        type="text"
        placeholder="Search by City"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        style={{
          padding: '10px',
          borderRadius: '5px',
          border: '1px solid #ccc',
          width: '300px',
          margin: '10px 0',
        }}
      />
      <button
        onClick={handleSearch}
        style={{
          margin: '20px',
          backgroundColor: 'blue',
          color: 'white',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Search
      </button>

      {filteredData.length > 0 && (
        <div>
          <h3>Search Results:</h3>
          <ul>
            {filteredData.map((result, index) => (
              <li key={index}>
                City: {result.city_name} - Temperature: {result.app_temp}°C - Condition: {result.weather.description}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default SearchBar;
