import React from 'react'
import Pagination from '@mui/material/Pagination';
import { IPlayer } from '../../Interfaces/IPlayer';
import ProfileImg from '../../Images/Kobi NBA.png';
import './PlayerDisplay.css'
import Avatar from '@mui/material/Avatar';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import IconButton from '@mui/material/IconButton';
import GroupsIcon from '@mui/icons-material/Groups';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { PlayerStatus } from '../../Enums/enums';
import { FavoriteAction, FavoriteActionType, favoriteStore } from '../../Redux/FavoriteState';
import { AddToFavorite, DeleteFromFavorite } from '../../ReduxFunction';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';


export interface ElementWithKey extends JSX.Element {
  key: React.Key;
}

function PlayersDisplay(props: any): JSX.Element {
  return (
    <div className='PlayerDisplay'>
      <div className='iconButtonSpace'>
        <div className='playerData'>
          <Avatar alt={props.data.first_name} src={ProfileImg} />

          <h2>{props.data.first_name} {props.data.last_name}</h2>

        </div>

        <div className='teamData' >
          <GroupsIcon sx={{ color: "blue", fontSize: "medium" }} />
          <p>{props.data.team?.full_name}</p>
        </div>

        <div className='otherData'>
          <LocationOnIcon sx={{ color: "red", fontSize: "medium" }} />
          <p> {props.data.team?.city}</p>
        </div>

        {props.status == PlayerStatus.Empty &&
          <IconButton color="secondary" aria-label="add an alarm" onClick={() => {
            AddToFavorite(props.data);
            props.callBack();
          }

          }>
            <FavoriteBorderIcon sx={{ color: "red" }} />
          </IconButton>
        }

     {props.status == PlayerStatus.Favorite &&
          <IconButton color="secondary" aria-label="add an alarm" onClick={() => {
            DeleteFromFavorite(props.data);
          }

          }>
            <ThumbDownOffAltIcon sx={{ color: "red" }} />
          </IconButton>
        }


      </div>





    </div>
  )
}

export default PlayersDisplay