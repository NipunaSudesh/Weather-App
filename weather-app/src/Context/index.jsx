import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

// Create StateContext
const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const [weather, setWeather] = useState(null);
  const [data, setData] = useState({});
  const [place, setPlace] = useState('mawanella');
  const [location, setLocation] = useState('');
  const [error, setError] = useState('');

  // API Key
  const apiKey = "a05f2a7fedaf53e41750c4bb321d7952";

  // Fetch weather data
  const fetchWeather = async (e) => {
    if (e) e.preventDefault();
    setError('');
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${place}&units=metric&appid=${apiKey}`
      );
      console.log(response.data);
      setData(response.data);
      setLocation(`${response.data.name}, ${response.data.sys.country}`);
      setWeather(response.data.main.temp);
    } catch (err) {
      setError('City not found. Please try again.');
      console.error(err);
    }
  };

  useEffect(() => {
    fetchWeather();
  }, [place]);



  return (
    <StateContext.Provider
      value={{
        weather,
        data,
        location,
        place,
        error,
        setPlace,
        fetchWeather,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

// Custom hook to use the context
export const useStateContext = () => useContext(StateContext);
