import React from 'react';
import SongBox from './SongBox';
import SearchBar from './SearchBar';

function MainBox (props) {
  const { userId, favSongs, searchFavs } = props;
  
  // Iterate over favSongs and create dom elements for each
  const songList = [];
  for (let i = 0; i < favSongs.length; i += 1) {
    songList.push(<SongBox favSong={favSongs[i]} />)
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