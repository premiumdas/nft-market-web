import React from 'react';
import "./BrandInt.css";

const BrandInt = () => {
  return (
    <div className='brand-int absolute-center'>
      <img className='bi-logos' src={require('../../assets/flatter.png')} alt='brand-logos'></img>
      <img className='bi-logos' src={require('../../assets/OpenSea-logo.png')} alt='brand-logos'></img>
      <img className='bi-logos' src={require('../../assets/discord.png')} alt='brand-logos'></img>
      <img className='bi-logos' src={require('../../assets/nord-logo-splash.png')} alt='brand-logos'></img>
      <img className='bi-logos' src={require('../../assets/bondly.png')} alt='brand-logos'></img>
      </div>
  )
}

export default BrandInt