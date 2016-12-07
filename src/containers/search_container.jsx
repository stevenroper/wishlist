import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router';

class SearchContainer extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  handleInputChange(e) {
    this.setState({ term: e.target.value });
  }

  handleFormSubmit(e) {
    e.preventDefault();
    console.log(this.state.term);
  }

  render() {
    return (
      <div>
        <FlatButton 
          label="< Back"
          secondary={true}
          containerElement={<Link to='/' />} />
        <form className="search-form" onSubmit={this.handleFormSubmit.bind(this)}>
          <TextField
            floatingLabelText="Search for artists, albums, etc..."
            onChange={this.handleInputChange.bind(this)}
            value={this.state.term} />
          <RaisedButton
            label="Search"
            secondary={true}
            type="submit" />
        </form>
      </div>
    );
  }
}

export default SearchContainer;