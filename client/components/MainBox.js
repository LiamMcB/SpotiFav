import React from 'react';
import SongBox from './SongBox';
import SearchBar from './SearchBar';
import Result from './Result';

function MainBox (props) {
  const { userId, favSongs, searchFavs, resultsSongs } = props;
  
  // Iterate over favSongs and create dom elements for each
  const songList = [];
  for (let i = 0; i < favSongs.length; i += 1) {
    songList.push(<SongBox favSong={favSongs[i]} />)
  }

  // Iterate pver resultsSongs and create el for each
  const results = [];
  for (let j = 0; j < resultsSongs.length; j += 1) {
    results.push(<Result songInfo={resultsSongs[j]} />)
  }

  return (
    <div className="main-box">
      <SearchBar searchFavs={searchFavs} />
      
      <h1>Your favorite songs: </h1>
      <div>{songList}</div>
    </div>
  )
}

export default MainBox;