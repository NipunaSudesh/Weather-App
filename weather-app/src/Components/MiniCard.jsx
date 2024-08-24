/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { fogPng, rainPng, sunnPng, sunRainPng, thunderPng, cloudpng, snowpng, windpng } from '../assets/index';
import '../index.css';

export const MiniCard = ({ iconString, time, temp,description }) => {
  const [icon, setIcon] = useState(sunRainPng); // Default icon

  useEffect(() => {
    if (iconString) {
      if (iconString.toLowerCase().includes('rain')) {
        setIcon(rainPng);
      } else if (iconString.toLowerCase().includes('thunder')) {
        setIcon(thunderPng);
      } else if (iconString.toLowerCase().includes('fog')) {
        setIcon(fogPng);
      } else if (iconString.toLowerCase().includes('clear')) {
        setIcon(sunnPng);
      } else if (iconString.toLowerCase().includes('cloud')) {
        setIcon(cloudpng);
      } else if (iconString.toLowerCase().includes('snow')) {
        setIcon(snowpng);
      } else if (iconString.toLowerCase().includes('wind')) {
        setIcon(windpng);
      } else {
        setIcon(sunRainPng); 
      }
    }
  }, [iconString]);

  return (
    <div className='glassCard w-[12rem] h-[13rem] p-4 flex flex-col'>
      <p className='text-center'>
        {new Date(time).toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' })} <br />
        {new Date(time).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
      </p>
      <hr />
      <div className='w-full flex items-center justify-center flex-1'>
        <img src={icon} alt='weather' className='w-[6rem] h-[5rem]' />
      </div>
      <p className='text-center font-bold text-red-600'>{temp}&deg;C</p> 
      <p className='text-center font-bold text-xl text-gray-200'>{description}</p>
    </div>
  );
};
