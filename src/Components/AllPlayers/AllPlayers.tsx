import React, { useEffect } from 'react'
import PlayersDisplay from '../PlayerDisplay/PlayersDisplay';
import './AllPlayers.css'
import Pagination from '@mui/material/Pagination';
import { IPlayer } from '../../Interfaces/IPlayer'
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';
import { PlayerStatus } from '../../Enums/enums';



interface Props {
  search: string | undefined;
  callBack : Function;
}
function AllPlayers(props: Props) {
  const [cacheData, setCacheData] = React.useState<IPlayer[] | null | undefined>(null);
  const [maxPage, setMaxPage] = React.useState<number>(0);
  const [loading, setLoading] = React.useState<boolean>(true);
  const [playersList, setPlayersList] = React.useState<IPlayer[] | null | undefined>(null);
  const [page, setPage] = React.useState<number>(1);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  }

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      var listOfPlayers = await axios.get(`https://www.balldontlie.io/api/v1/players?page=${page}`);
      setMaxPage(listOfPlayers.data.meta.total_pages)
      var playersData: IPlayer[] = listOfPlayers.data.data;
      await setCacheData(playersData);
      if ((props.search != undefined && (props.search.length > 0))) {
        playersData = playersData.filter(player => player.first_name?.toLowerCase().includes(props.search?.toLocaleLowerCase() || ""));
      }

      console.log(playersData);
      setPlayersList(playersData);
      setLoading(false);
    }
    fetchData();
  }, [page])

  useEffect(() => {
    async function cacheDataFilterd() {
      if ((props.search != undefined && (props.search.length > 0))) {
        var playersData: IPlayer[] | null | undefined = cacheData?.filter(player => player.first_name?.toLowerCase().includes(props.search?.toLocaleLowerCase() || ""));
        setPlayersList(playersData);
      }
      if (props.search == undefined || props.search == "") {
        setPlayersList(cacheData);
      }
    }
    cacheDataFilterd();
  }, [props.search])

  return (
    <>
      <div className='allPlayers' >
        {loading && <CircularProgress className='CircularProgress'
        />}
        {playersList?.map((player) => {
          return <PlayersDisplay key={player.id} data={player} status={PlayerStatus.Empty} callBack={props.callBack} />
        })}

        <Pagination count={maxPage} page={page} onChange={handleChange} className="Pagination" />

      </div>
    </>
  )
}

export default React.memo(AllPlayers)