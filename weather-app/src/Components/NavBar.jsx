import { useState } from 'react';
import { CiSearch } from "react-icons/ci";
import { useStateContext } from '../Context';

export const NavBar = () => {
  const [input, setInput] = useState('');
  const { weather, place, setPlace } = useStateContext();
  console.log(weather);

  const submitCity = () => {
    if (input.trim() !== '') {
      setPlace(input);
      setInput('');
    }
  };

  return (
    <nav className='w-full p-3 flex justify-between items-center'>
      <h1 className='font-bold tracking-wide text-5xl'>Weather App</h1>
      <div className='bg-white w-[15rem] overflow-hidden shadow-2xl rounded flex items-center p-2 gap-2'>
        <CiSearch className='text-black w-8 h-8 cursor-pointer' onClick={submitCity} />
        <input
          type='text'
          placeholder='Search City'
          className='focus:outline-none w-full text-[#212121] text-lg'
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyUp={(e) => {
            if (e.key === 'Enter') {
              submitCity();
            }
          }}
        />
      </div>
    </nav>
  );
};
