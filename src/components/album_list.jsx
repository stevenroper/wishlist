import React, { Component } from 'react';

class AlbumList extends Component {
  renderList(album) {
    return(
      <li key={album.collectionId}>{album.collectionName}</li>
    );
  }

  render() {
    return (
      <div className="album-list">
        <ul>
          {this.props.albums.map(this.renderList)}
        </ul>
      </div>
    );
  }
}

export default AlbumList;