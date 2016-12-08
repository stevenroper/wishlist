import React, { Component } from 'react';
import Album from './album';

class AlbumList extends Component {
  renderAlbumCard(album) {
    return(
      <Album key={album.collectionId} album={album} />
    );
  }

  render() {
    const list = Object.keys(this.props.albums).map((key, index) => this.props.albums[key]);
    return (
      <ul className="album-list">
        {list.map(this.renderAlbumCard)}
      </ul>
    );
  }
}

export default AlbumList;