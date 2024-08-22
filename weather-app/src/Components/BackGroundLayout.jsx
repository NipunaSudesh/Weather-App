import React, { useEffect, useState } from 'react';
import { useStateContext } from '../Context';
import { clear, rainy, snow, stormy2, sunny, cloudy, fog, wind } from '../assets';

export const BackGroundLayout = () => {
  const { weather } = useStateContext();
  const [image, setImage] = useState(clear);

  useEffect(() => {
    if (weather.conditions) {
      let imageString = weather.conditions.toLowerCase();

      if (imageString.includes('clear')) {
        setImage(clear);
      } else if (imageString.includes('rain') || imageString.includes('shower')) {
        setImage(rainy);
      } else if (imageString.includes('snow')) {
        setImage(snow);
      } else if (imageString.includes('thunder') || imageString.includes('stormy')) {
        setImage(stormy2);
      } else if (imageString.includes('sunny')) {
        setImage(sunny);
      } else if (imageString.includes('cloud')) {
        setImage(cloudy);
      } else if (imageString.includes('fog')) {
        setImage(fog);
      } else if (imageString.includes('wind')) {
        setImage(wind);
      } else {
        setImage(clear); // fallback to clear if none match
      }
    }
  }, [weather]);

  return (
    <div style={{ backgroundImage: `url(${image})`, height: '100vh', backgroundSize: 'cover' }}>
      BackGroundLayout
    </div>
  );
};
