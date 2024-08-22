/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { useDate } from '../Utils/useDate';
import { fogPng, rainPng, sunnPng, sunRainPng, thunderPng,cloudpng,snowpng ,windpng} from '../assets/index';
import '../index.css';

export const WeatherCard = ({ temperature, windspeed, humidity, place, heatIndex, iconString, conditions }) => {
  const [icon, setIcon] = useState(sunnPng);
  const { time } = useDate();

  useEffect(() => {
    if (iconString.toLowerCase().includes('rain')) {
      setIcon(rainPng);
    } else if (iconString.toLowerCase().includes('thunder')) {
      setIcon(thunderPng);
    } else if (iconString.toLowerCase().includes('fog')) {
      setIcon(fogPng);
    } else if (iconString.toLowerCase().includes('clear') ){
      setIcon(sunnPng);
    }
    else if (iconString.toLowerCase().includes('cloud') ){
      setIcon(cloudpng);
    }
    else if (iconString.toLowerCase().includes('snow') ){
      setIcon(snowpng);
    }
    else if (iconString.toLowerCase().includes('wind') ){
      setIcon(windpng);
    } else {
      setIcon(sunRainPng);
    }
  }, [iconString]);

  return (
    <div className="w-[26rem] min-w-[26rem] h-[33rem] glassCard p-4">
      <div className='flex w-full justify-center items-center mt-12 gap-4 mb-4'>
      <img src={icon} alt='weather-icon' className='w-[12rem]'/>
      <p className='font-bold text-5xl flex justify-center items-center'>{temperature} &deg;C</p>
      </div>
      <div className='font-bold text-5xl text-center'>
          {place}
      </div>
      <div className='w-full flex justify-center items-center mt-4'>
          <p className='flex-1 text-center p-2'>{new Date().toDateString()}</p>
          <p className='flex-1 text-center p-2'>{time}</p>
      </div>
      <div className='w-full flex justify-center items-centermt-4 gap-5'>
        <p className='flex-1 text-center p-2 font-bold bg-blue-600 shadow rounded-lg'>Wind Speed <span className='font-normal'>{windspeed}</span> </p>
        <p className='flex-1 text-center p-2 font-bold bg-green-600 shadow rounded-lg'>Humidity <span className='font-normal'>{humidity}</span></p>
      </div>
      <div className='w-full flex items-center justify-center mt-4'>
          <p className='font-semibold text-xl'>Heat Index</p>
          <p className=' text-xl'>{
              heatIndex ? heatIndex :' N/A'
            }</p>
      </div>
      <hr className='bg-slate-600'/>
      <div className='w-full p-4 flex justify-center items-center text-3xl font-semibold'>
            {conditions}
      </div>
    </div>
  )
}
