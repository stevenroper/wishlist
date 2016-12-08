import React, { Component } from 'react';
import Album from './album';

class AlbumList extends Component {
  renderList(album) {
    return(
      <Album key={album.collectionId} album={album} />
    );
  }

  render() {
    return (
      <ul className="album-list">
        {this.props.albums.map(this.renderList)}
      </ul>
    );
  }
}

export default AlbumList;