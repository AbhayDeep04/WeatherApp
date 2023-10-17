import React from 'react';

function FilterOptions({ selectedFilters, setSelectedFilters, setFilteredData, weatherData }) {
  const handleFilter = () => {
    let filteredData = [...weatherData];

    if (selectedFilters.length > 0) {
      filteredData = filteredData.filter(data => selectedFilters.includes(data.weather.description));
    }

    setFilteredData(filteredData);
  }

  const handleFilterChange = (value) => {
    if (selectedFilters.includes(value)) {
      setSelectedFilters(selectedFilters.filter(filter => filter !== value));
    } else {
      setSelectedFilters([...selectedFilters, value]);
    }
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '20vh' }}>
      <div style={{ backgroundColor: '#f0f0f0', padding: '10px', borderRadius: '5px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
        <h2 style={{ color: 'blue', marginBottom: '10px' }}>Filter Options</h2>
        <label>
          <input
            type="checkbox"
            value="Clear sky"
            onChange={(e) => handleFilterChange(e.target.value)}
          />
          <span style={{ color: 'green' }}>Clear sky</span>
        </label>
        <label>
          <input
            type="checkbox"
            value="Broken clouds"
            onChange={(e) => handleFilterChange(e.target.value)}
          />
          <span style={{ color: 'gray' }}>Broken clouds</span>
        </label>
      </div>
      <button style={{ backgroundColor: 'blue', color: 'white', padding: '8px 15px', border: 'none', borderRadius: '5px', cursor: 'pointer', marginTop: '20px' }} onClick={handleFilter}>
        Apply Filters
      </button>
    </div>
  );
}

export default FilterOptions;
