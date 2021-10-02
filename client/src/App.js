import React, {Component, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navi from './navigation/navbar';
import InfoCard from './cards/navcard';

class App extends Component {

  render() {
    return (
      <div>
        <Navi/>
        <InfoCard />
      </div>
    );
  }
}

export default App;