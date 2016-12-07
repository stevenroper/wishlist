import React, { Component } from 'react';
import MuiThemeComponent from 'material-ui/styles/MuiThemeProvider';
import Header from '../components/header';

export default class App extends Component {
  render() {
    return (
      <MuiThemeComponent>
        <div>
          <Header />
          {this.props.children}
        </div>
      </MuiThemeComponent>
    );
  }
}