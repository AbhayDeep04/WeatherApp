import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import axios from 'axios';
import WeatherList from './WeatherList';
import SummaryStats from './SummaryStats';
import SearchBar from './SearchBar';
import FilterOptions from './FilterOptions';
import WeatherDetail from './WeatherDetail';
import TemperatureChart from './TemperatureChart'; 


function App() {
  const [weatherData, setWeatherData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [selectedFilters, setSelectedFilters] = useState([]);



  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiKey = '4d8be955dd5d4575a1396529254b6386';
        const response = await axios.get(
          `https://api.weatherbit.io/v2.0/current?key=${apiKey}&cities=8953361,8953362,2643743,8953360,5128581,1850147,2988507,3117735,1609350,2147714,292223,184745,1880252,6167865,5392171,3451190,1857910,293397,3169070,3470127,727011,1819729,1609350,1816670,1853909`
        );
        console.log(response.data.data);
        setWeatherData(response.data.data);
        setFilteredData(response.data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const appStyle = {
    background: `url('back.png') no-repeat center center fixed`,
    backgroundSize: 'cover',
  };

  return (
    <BrowserRouter>
      <div className="App" style={appStyle}>
        <h1 style={{ textAlign: 'center', color: 'blue', margin: '20px' }}>Weather Data Dashboard</h1>
        <SearchBar
          searchInput={searchInput}
          setSearchInput={setSearchInput}
          weatherData={weatherData}
          setFilteredData={setFilteredData}
        />
        <FilterOptions
          selectedFilters={selectedFilters}
          setSelectedFilters={setSelectedFilters}
          weatherData={weatherData}
          setFilteredData={setFilteredData}
        />
        <SummaryStats weatherData={filteredData} />

        <TemperatureChart weatherData={filteredData} />

        <Routes>
          <Route path="/" element={<WeatherList weatherData={filteredData} />} />
          <Route path="/detail/:cityName" element={<WeatherDetail weatherData={filteredData} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
