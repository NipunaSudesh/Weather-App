import React from 'react';
import { WeatherCard } from './WeatherCard';
import { useStateContext } from '../Context';
import { MiniCard } from './MiniCard';

export const Home = () => {
  const { weather, location, values, place, error ,forecast} = useStateContext();

  return (
    <div className='w-full flex flex-wrap gap-8 py-4 px-[10%] items-center justify-center'>
      
      {!weather && !error && <p>Loading...</p>}
      {error && <p className='text-red-500'>{error}</p>}

      {weather && (
        <WeatherCard 
          place={place}
          windspeed={weather.windspeed || weather.wind?.speed} 
          humidity={weather.humidity || weather.main?.humidity}
          temperature={weather.temperature || weather.main?.temp}
          heatIndex={weather.heatIndex || weather.main?.feels_like}
          iconString={weather.conditions || weather.weather[0]?.main}
          conditions={weather.description || weather.weather[0]?.description}
        />
      )}

<div className='flex justify-center gap-8 flex-wrap w-[60%]'>
        {values && values.length > 0 ? (
          values.slice(1, 7).map((curr, index) => (
            <MiniCard 
              key={index}
              time={curr.datetime || curr.time} 
              temp={curr.temp || curr.temperature} 
              iconString={curr.conditions || curr.weather[0]?.main}
            />
          ))
        ) : (
          <p>No data available.</p>
        )}
      </div>
    </div>
  );
};
