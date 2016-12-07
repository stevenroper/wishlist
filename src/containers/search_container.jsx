import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router';

class SearchContainer extends Component {
  render() {
    return (
      <div>
        <FlatButton 
          label="< Back"
          secondary={true}
          containerElement={<Link to='/' />} />
        Search Container
      </div>
    );  
  }
}

export default SearchContainer;