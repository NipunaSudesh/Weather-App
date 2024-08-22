import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

// Create StateContext
const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const [weather, setWeather] = useState(null);
  const [location, setLocation] = useState('');
  const [error, setError] = useState('');
  const [place, setPlace] = useState('mawanella');

  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

  // Fetch weather data
  const fetchWeather = async (e) => {
    if (e) e.preventDefault();
    setError('');
    try {
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${place}&units=metric&appid=${apiKey}`
      );

      const { main, wind, weather: weatherArray, name, sys } = data;
      const { temp, humidity } = main;
      const { speed } = wind;
      const [weatherInfo] = weatherArray;
      const { main: conditions, description } = weatherInfo;

      setWeather({
        temperature: temp,
        humidity,
        windspeed: speed,
        conditions,
        description,
      });

      setLocation(`${name}, ${sys.country}`);
    } catch (err) {
      setError('City not found. Please try again.');
      console.error(err);
    }
  };

  // Fetch weather whenever the place changes
  useEffect(() => {
    fetchWeather();
  }, [place]);

  return (
    <StateContext.Provider
      value={{
        weather,
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
