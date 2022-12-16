import React, { useEffect, useState } from 'react'
import '../AllPlayers/AllPlayers.css'
import PlayersDisplay from '../PlayerDisplay/PlayersDisplay'
import { FavoriteActionType, favoriteStore } from '../../Redux/FavoriteState';
import axios from 'axios';
import { IPlayer } from '../../Interfaces/IPlayer';
import { PlayerStatus } from '../../Enums/enums';
interface Props {
  color: boolean;
}
function FavoritePlayer(props: Props) {
  const [playersList, setPlayerList] = useState<IPlayer[] | null>(null);

  useEffect(() => {
    setPlayerList(favoriteStore.getState().favoritesPlayer);
    //setPlayerList(state)
    favoriteStore.subscribe(() => {
      setPlayerList(favoriteStore.getState().favoritesPlayer);

    })
  }, [playersList])

  return (

    <div className='allPlayers' style={{ background: props.color ? "white" : "gray" }} >
      <p style={{ color: "blue" }}>Favorite Players:</p>

      <>
        <div className='allPlayers' >

          {playersList?.length == 0 && <h2>No Have Favorites.</h2>}
          {playersList?.map((player) => {

            return <PlayersDisplay key={player.id} data={player} status={PlayerStatus.Favorite} />
          })}

        </div>
      </>


    </div>
  )
}

export default FavoritePlayer