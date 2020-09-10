import React from 'react';
import SongBox from './SongBox';
import SearchBar from './SearchBar';
import Result from './Result';

function MainBox (props) {
  const { userId, favSongs, searchFavs, resultsSongs, addFav, deleteFav } = props;
  
  // Iterate over favSongs and create dom elements for each
  const songList = [];
  for (let i = 0; i < favSongs.length; i += 1) {
    songList.push(<SongBox favSong={favSongs[i]} deleteFav={deleteFav} userId={userId} />)
  }

  // Iterate pver resultsSongs and create el for each
  const results = [];
  for (let j = 0; j < resultsSongs.length; j += 1) {
    results.push(<Result songInfo={resultsSongs[j]} addFav={addFav} userId={userId} />)
  }

  return (
    <div className="main-box">
      <SearchBar searchFavs={searchFavs} />
      <div className='fav-list'>{results}</div>
      <h2 className='fav-title'>Your favorite songs: </h2>
      <div className='fav-list'>{songList}</div>
    </div>
  )
}

export default MainBox;