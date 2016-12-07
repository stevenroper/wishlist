import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router';

export default () => {
  return (
    <div>
      <FlatButton
        label="< Back"
        secondary={true}
        containerElement={<Link to="/" />} />
      Wishlist container
    </div>
  );
};