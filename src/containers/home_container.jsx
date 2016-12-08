import React, { Component } from 'react';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router';

class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <div>
        <RaisedButton
          label="Search Albums"
          secondary={true}
          className="home-button"
          containerElement={<Link to="search" />} />
        </div>
        <div>
        <RaisedButton
          label={`View Wishlist (${Object.keys(this.props.wishlist).length})`}
          secondary={true}
          className="home-button"
          containerElement={<Link to="wishlist" />} />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { wishlist: state.wishlist };
}

export default connect(mapStateToProps)(Home);