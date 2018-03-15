import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Cabecalho from './components/cabecalho';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Cabecalho />
        <div className="App-header">
          <img src="https://78.media.tumblr.com/9bef6d53c8790b53b1132018707e817e/tumblr_nre75fgRYz1qacilfo1_400.png" className="App-logo" alt="logo" />
          <h2>Welcome to <span className="poodles" >Poodle-doodle</span> </h2>
        </div>
        <p className="App-intro">
          Projeto dedicado a todos os poddles rosas e não rosas deste incrível país. #SAVETHEPOODLES<br /><span className="ps" >ps:não sou gay</span>
        </p>
      </div>
    );
  }
}

export default App;
