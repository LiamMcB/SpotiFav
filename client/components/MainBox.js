import React from 'react';

function MainBox (props) {
  const { userId, favSongs } = props;
  
  // Iterate over favSongs and create dom elements for each
  const songList = [];
  for (let i = 0; i < favSongs.length; i += 1) {
    songList.push(<div>{favSongs[i].song}</div>)
  }

  return (
    <div className="main-box">
      <h1>Your favorite songs: </h1>
      <div>{songList}</div>
    </div>
  )
}

export default MainBox;