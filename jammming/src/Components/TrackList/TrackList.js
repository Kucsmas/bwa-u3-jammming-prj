import React from 'react';


import './TrackList.css'
//import Playlist from '../Playlist/Playlist.js';
//import SearchBar from '../SearchBar/SearchBar.js';
import Track from '../Track/Track.js';
//import SearchResults from '../SearchResults/SearchResults.js';




class TrackList extends React.Component {

  log(){
    console.log(this.props.tracks)
  }


  render() {
    this.log()
    return (
      <div className="TrackList">
        {
          this.props.tracks.map(track => {
            return <Track track={track}
                          key={track.id}
                          onAdd={this.props.onAdd}
                          isRemoval={this.props.isRemoval}
                          onRemove={this.props.onRemove} />
          })
        }
      </div>
    );
  }
}

export default TrackList;





/*
    line 11  <!-- You will add a map method that renders a set of Track components  -->
      */
