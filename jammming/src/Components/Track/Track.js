import React from 'react';

//import TrackList from '../TrackList/TrackList.js';
//import Playlist from '../Playlist/Playlist.js';
//import SearchResults from '../SearchResults/SearchResults.js';
//import SearchBar from '../SearchBar/SearchBar.js';
import './Track.css';


//let isRemoval = true;

class Track extends React.Component {
  constructor(props) {
    super(props);

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  }

  addTrack(event) {
    this.props.onAdd(this.props.track);
  }

  removeTrack(event) {
    this.props.onRemove(this.props.track);
  }

  renderAction() {
    if (this.props.isRemoval) {
      return <a className="Track-Action" onClick={this.removeTrack}> - </a>;
    }
    return <a className="Track-Action" onClick={this.addTrack}> + </a>;

  }

  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>  {this.props.track.name}  </h3>
          <p> {this.props.track.artist} | {this.props.track.album} </p>
        </div>
        {this.renderAction()}
      </div>
    );
  }

}

 export default Track;
