/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import { useDate } from '../Utils/useDate';
import { fogPng, rainPng, sunnPng, sunRainPng, thunderPng,cloudpng,snowpng ,windpng} from '../assets/index';
import '../index.css';

export const MiniCard = ({iconString ,time,temp}) => {
  const [icon,setIcon]=useState()

  useEffect(()=>{
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
  },[iconString]);
  return (
    <div className='glassCard w-[10rem] h-[10rem] p-4 flex flex-col'>
      <p className='text-center'>{new Date(time).toLocaleTimeString('en',{weekday:'long'}).split("")[0]}</p>
      <hr/>
      <div className='w-full flex items-center justify-center flex-1'>
        <img src={icon} alt='weather' className='w-[4rem] h-[4rem]'/>
      </div>
      <p className='text-center font-bold'>{temp}&def;C </p>
    </div>
  )
}
