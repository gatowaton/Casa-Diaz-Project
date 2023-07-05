import React from 'react'
import "./LogoNav.css"
import ElectricBoltRoundedIcon from '@mui/icons-material/ElectricBoltRounded';

function LogoNav() {
  return (
    <div className='logo-nav'>
        <div className='bolt'>
        <ElectricBoltRoundedIcon/>
        </div>
        <div>
            <div className='line1'>
            <span>Casa Diaz</span><br/>
            </div>
            <div className='line2'>
            <span>Materiales Electricos</span>
            </div>
        </div>
    </div>
  )
}

export default LogoNav