import React from 'react'
import { Check } from "react-feather";

function ListCheck() {
  return (
    <ul className='list-unstyled'>
        <li className='flex justify-content-start mb-2'><span className="p-2 me-2 h-45px w-45px primary-color-light-bg rounded-circle flex"><Check size={20} color="#06af47" /></span> <span>More than 10 years of experience.</span> </li>
        <li className='flex justify-content-start'><span className="p-2 me-2 h-45px w-45px primary-color-light-bg rounded-circle flex"><Check size={20} color="#06af47" /></span> <span>10,000+ people trusting our agency.</span> </li>
    </ul>
  )
}

export default ListCheck