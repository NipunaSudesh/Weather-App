import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";

export const NavBar = () => {
    const[input,setInput] =useState('');

  return (
    
    <nav className='w-full p-3 flex justify-between items-center'>
      <h1 className='font-bold tracking-wide text-3xl text-black'>Weather App</h1>
      <div className='bg-white w-[15rem] overflow-hidden shadow-2xl rounded flex item-center p-2 gap-2'>
          <CiSearch className='text-black w-8 h-8'/>
          <input type='text' 
          placeholder='Search'
            onKeyUp={(e)=>{
                if(e.key=='Enter'){
                    //Submit the form
                }
            }}

          className='focus:outline-none w-full text-[#212121] text-lg' value={input} 
          onChange={e=>setInput(e.target.value)}
          />
      </div>
    </nav>


  )
}
