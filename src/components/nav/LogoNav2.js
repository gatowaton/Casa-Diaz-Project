import React from 'react'
import "./LogoNav.css"
import ElectricBoltRoundedIcon from '@mui/icons-material/ElectricBoltRounded';

function LogoNav2() {
  return (
    <div className='logo-nav-2'>
    <div className='bolt-2'>
    <ElectricBoltRoundedIcon fontSize='200'/>
    </div>
    <div className='logo-title'>
        <div className='line1-2'>
        <span>Casa Diaz</span><br/>
        </div>
        <div className='line2-2'>
        <span>Materiales Electricos</span>
        </div>
    </div>
</div>
  )
}

export default LogoNav2