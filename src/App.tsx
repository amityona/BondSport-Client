import React, { createRef, useCallback, useEffect, useState } from 'react';
import logo from './logo.svg';
import Header from './Layout/Header';
import AllPlayers from './Components/AllPlayers/AllPlayers';
import Switch from '@mui/material/Switch';
import FavoritePlayer from './Components/Favorite/FavoritePlayer';
import './App.css'
import SearchIcon from '@mui/icons-material/Search';

function App() {
  const [search, setSearch] = useState<string | undefined>("");
  const [bgColor, setBgColor] = useState<boolean>(true);

  const [count, setCount] = useState<number>(0);

  const changeColorCallBack = useCallback(
    () => setBgColor((prevState) => !prevState),
    [bgColor],
  );

  return (
    <div className="App">
      <Header />

      <Switch
        checked={bgColor}
        onChange={() => { setBgColor((prevState) => !prevState) }}
        inputProps={{ 'aria-label': 'controlled' }}
      />

      <div className="header__search">
        <SearchIcon />
        <input type="text" placeholder="Search Player" onChange={(e) => {
          setSearch(e.target.value);
        }} />
      </div>
      <div className='players'>
        <AllPlayers  search={search} callBack ={ changeColorCallBack }/>
        <FavoritePlayer color={bgColor} />

      </div>
    </div>
  );
}

export default App;
