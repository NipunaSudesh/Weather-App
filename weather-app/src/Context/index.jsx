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

  // Function to calculate the heat index
  const calculateHeatIndex = (tempC, humidity) => {
    const tempF = tempC * 9/5 + 32;
    const T = tempF;
    const H = humidity;

    return -8.78469475556 + 1.61139411 * T + 2.33854883889 * H
      - 0.14611605 * T * H - 0.012308094 * T * T
      - 0.0164248277778 * H * H + 0.002211732 * T * T * H
      + 0.00072546 * T * H * H - 0.000003582 * T * T * H * H;
  };

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

      const heatIndex = calculateHeatIndex(temp, humidity);

      setWeather({
        temperature: temp,
        humidity,
        windspeed: speed,
        conditions,
        description,
        heatIndex,  // Add heatIndex to the weather state
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
