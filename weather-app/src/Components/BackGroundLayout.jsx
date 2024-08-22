import { useEffect, useState } from 'react';
import { useStateContext } from '../Context';
import { clear, rainy, snow, stormy2, sunny, cloudy, fog, wind } from '../assets';

export const BackGroundLayout = () => {
  const { weather } = useStateContext();
  const [image, setImage] = useState(clear);

  useEffect(() => {
    if (weather && weather.weather && weather.weather[0].description) {
      const imageString = weather.weather[0].description.toLowerCase();

      if (imageString.includes('clear')) {
        setImage(clear);
      } else if (imageString.includes('rain') || imageString.includes('shower')) {
        setImage(rainy);
      } else if (imageString.includes('snow')) {
        setImage(snow);
      } else if (imageString.includes('thunder') || imageString.includes('storm')) {
        setImage(stormy2);
      } else if (imageString.includes('sun')) {
        setImage(sunny);
      } else if (imageString.includes('cloud')) {
        setImage(cloudy);
      } else if (imageString.includes('fog')) {
        setImage(fog);
      } else if (imageString.includes('wind')) {
        setImage(wind);
      } else {
        setImage(clear);
      }
    }
  }, [weather]);

  return (
    <div>
      <img src={image} alt='weatherImage' className='h-screen w-full fixed left-0 top-0 -z-[10]' />
    </div>
  );
};
