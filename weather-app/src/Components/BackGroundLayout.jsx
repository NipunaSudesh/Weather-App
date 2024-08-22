import { useEffect, useState } from 'react';
import { useStateContext } from '../Context';
import { clear, rainy, snow, stormy2, sunny, cloudy, fog, wind } from '../assets';

export const BackGroundLayout = () => {
  const { weather } = useStateContext();
  const [image, setImage] = useState(clear);

  useEffect(() => {
    if (weather) {
      const description = weather.description.toLowerCase();

      if (description.includes('clear')) {
        setImage(clear);
      } else if (description.includes('rain')) {
        setImage(rainy);
      } else if (description.includes('snow')) {
        setImage(snow);
      } else if (description.includes('storm')) {
        setImage(stormy2);
      } else if (description.includes('sun')) {
        setImage(sunny);
      } else if (description.includes('cloud')) {
        setImage(cloudy);
      } else if (description.includes('fog')) {
        setImage(fog);
      } else if (description.includes('wind')) {
        setImage(wind);
      }
    }
  }, [weather]);


  return (
    <div>
      <img src={image} alt='weatherImage' className='h-screen w-full fixed left-0 top-0 -z-[10]' />
    </div>
  );
};
