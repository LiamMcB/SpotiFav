import React, {Component} from 'react';
import MainNav from './MainNav';
import MainBox from './MainBox';

class MainContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favSongs: [],
      resultsSongs: []
    }
    this.getFavs = this.getFavs.bind(this);
    this.searchFavs = this.searchFavs.bind(this);
    this.getFavs();
  }

  getFavs() {
    // Get current user id
    const reqBody = {user_id: this.props.userId};
    // Fetch the current users favorite songs
    fetch('/api/getFavs', {
      method: "POST",
      headers: {
        'Content-Type': 'Application/JSON'
      },
      body: JSON.stringify(reqBody)
    })
    .then(res => res.json())
    .then(data => {
      // Push song data into favSongs array
      this.setState((                 ) => {
        const favSongs = [];
        for (let i = 0; i < data.length; i += 1) {
          let currSong = {};
          currSong.song = data[i].song;
          currSong.artist = data[i].artist;
          currSong.album = data[i].album;
          favSongs.push(currSong);
        }
        return {favSongs};
      });
    })
    .catch(err => console.log(err));
  }

  searchFavs() {
    // Get song and artist from search
    const song = document.getElementById('song-search').value;
    const artist = document.getElementById('artist-search').value;
    // Put into request body
    const reqBody = {song, artist};
    // Fetch from server
    fetch('/api/search', {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/JSON'
      },
      body: JSON.stringify(reqBody)
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log('Error in search: ' + err)); 
  }
  
  render() {
    return (
      <div>
        <MainNav currentUser={this.props.currentUser} logoutUser={this.props.logoutUser} />
        <MainBox userId={this.props.userId} favSongs={this.state.favSongs} searchFavs={this.searchFavs} resultsSongs={this.state.resultsSongs} />
      </div>
    )
  }
}

export default MainContainer;