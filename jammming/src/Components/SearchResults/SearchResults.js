import React from 'react';

import './SearchResults.css';
 

import TrackList from '../TrackList/TrackList.js';
//import Playlist from '../Playlist/Playlist.js';
//import Track  from '../Track/Track.js';
//import SearchBar from '../SearchBar/SearchBar.js';






class SearchResults extends React.Component {
  render() {
    return (
      <div className="SearchResults">
        <h2>Results</h2>
        <TrackList tracks={this.props.searchResults}
                   onAdd={this.props.onAdd}
                   isRemoval={false}/>
      </div>
    );
  }
}
/*line 10 tracklist obj*/
export default SearchResults;
