import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions'

// Material UI components
import { Card, CardTitle, CardMedia, CardActions } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

class Album extends Component {
  handleAddToWishlist() {
    this.props.addToWishlist(this.props.album);
  }

  render() {
    const album = this.props.album;
    return (
      <Card className="album-card">
       <CardMedia>
         <img src={album.artworkUrl100} />
       </CardMedia>
       <CardTitle
        title={album.collectionName}
        subtitle={album.artistName} />
       <CardActions>
        <RaisedButton
          primary={true}
          label="+ Add to Wishlist"
          fullWidth={true}
          onClick={this.handleAddToWishlist.bind(this)} />
       </CardActions>
     </Card>
    );
  }
}

export default connect(null, actions)(Album);