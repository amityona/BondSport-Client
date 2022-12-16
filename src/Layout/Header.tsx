import React from 'react'
import './Header.css';
import NBAImage from '../Images/NBA.png';

function Header(): JSX.Element {
  return (
    <div className='header'>
      <img src={NBAImage} alt="NBA" className='img' />
      <h2>BondSport</h2>
    </div>
  )
}

export default React.memo(Header)
