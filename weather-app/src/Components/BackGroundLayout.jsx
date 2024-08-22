import React, { useState } from 'react'
import { useStateContext } from '../Context'

export const BackGroundLayout = () => {
    const {weather} =useStateContext();
    const [image,setImage]=useState();

  return (
    <div>BackGroundLayout</div>
  )
}
