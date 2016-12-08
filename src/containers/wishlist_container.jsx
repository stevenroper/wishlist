import React, { Component } from 'react';
import { connect } from 'react-redux';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router';
import AlbumList from '../components/album_list'

class WishlistContainer extends Component {
  render() {
    return (
      <div>
        <FlatButton
          label="< Back"
          secondary={true}
          containerElement={<Link to="/" />} />
        <div>
          <h1>Wishlist</h1>
          <AlbumList albums={this.props.wishlist} />
        </div>
      </div>
    );
  }
};

function mapStateToProps(state) {
  return { wishlist: state.wishlist };
}

export default connect(mapStateToProps)(WishlistContainer);