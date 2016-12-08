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

  handleRemoveFromWishlist() {
    this.props.removeFromWishlist(this.props.album);
  }

  renderButton() {
    if (this.props.wishlist[this.props.album.collectionId]) {
      return (
        <RaisedButton
          label="- Remove from Wishlist" 
          fullWidth={true}
          onClick={this.handleRemoveFromWishlist.bind(this)} />
      );
    } else {
      return(
        <RaisedButton
          primary={true}
          label="+ Add to Wishlist"
          fullWidth={true}
          onClick={this.handleAddToWishlist.bind(this)} />
      );
    }
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
          {this.renderButton()}
        </CardActions>
      </Card>
    );
  }
}

function mapStateToProps(state) {
  return { wishlist: state.wishlist }
}

export default connect(mapStateToProps, actions)(Album);