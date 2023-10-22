import React from 'react'
import rccg_logo from '../Assets/Rccg_logo.png'
import './Logo.css'

const Logo = () => {
  return (
    <div>
        <img 
            src= {rccg_logo}
            width= "300" 
            height= "300"
            alt='RCCG'
            className='rccg-logo'
        />
    </div>
  )
}

export default Logo