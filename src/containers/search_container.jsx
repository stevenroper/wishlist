import React, { Component } from 'react';
import { Link } from 'react-router';
import jsonp from 'jsonp';

// Material UI components
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

// Components
import AlbumList from '../components/album_list';

export default class SearchContainer extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '', search_results: [] };
  }

  handleInputChange(e) {
    this.setState({ term: e.target.value });
  }

  handleFormSubmit(e) {
    e.preventDefault();
    
    const request_url = `https://itunes.apple.com/search?term=${this.state.term}&media=music&entity=album&limit=25`;
    jsonp(request_url, null, (err, data) => {
      if (err) {
        console.log("Request error: ", err);
      } else {
        this.setState({ search_results: data.results });
      }
    });
  }

  render() {
    return (
      <div>
        <FlatButton 
          label="< Back"
          secondary={true}
          containerElement={<Link to='/' />} />
        <h1>Search</h1>
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
        <AlbumList albums={this.state.search_results}/>
      </div>
    );
  }
}