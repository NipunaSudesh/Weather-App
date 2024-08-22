import React, { useEffect, useState } from 'react'
import { useStateContext } from '../Context'
import { clear ,rainy,snow,stormy2,sunny,cloudy,fog ,wind} from '../assets';

export const BackGroundLayout = () => {
    const {weather} =useStateContext();
    const [image,setImage]=useState(clear);

    useEffect(()=>{
      if(weather.conditions){
        let imageString =weather.conditions;
        if(imageString.toLowerCase.includes('clear')){
          setImage(clear);
      } else if(imageString.toLowerCase.includes('rain') || imageString.toLowerCase.includes('shower')){
        setImage(rainy);
      } else if(imageString.toLowerCase.includes('snow')){
        setImage(snow);
      } else if(imageString.toLowerCase.includes('thunder') || imageString.toLowerCase.includes('Stormy')){
        setImage(stormy2);
      }
      else if(imageString.toLowerCase.includes('sunny')){
        setImage(sunny);
      }
      else if(imageString.toLowerCase.includes('cloud')){
        setImage(cloudy);
      }
      else if(imageString.toLowerCase.includes('fog')){
        setImage(fog);
      }
      else if(imageString.toLowerCase.includes('rainy')){
        setImage(rainy);
      } else{
        setImage('wind');
      }
    }},[weather]);

  return (
    <div>BackGroundLayout</div>
  )
}
