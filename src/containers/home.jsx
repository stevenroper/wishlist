import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router';

export default () => {
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
        label="View Wishlist"
        secondary={true}
        className="home-button"
        containerElement={<Link to="wishlist" />} />
      </div>
    </div>
  );
}