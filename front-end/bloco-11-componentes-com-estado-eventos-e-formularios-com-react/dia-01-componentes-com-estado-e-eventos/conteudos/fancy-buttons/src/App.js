import React, { Component } from 'react';
import './App.css';

function printRed() {
  console.log('Vermelho.');
}
function printGreen() {
  console.log('Verde.');
}
function printBlue() {
  console.log('Azul.');
}


class App extends Component {
  render() {
    return (
      <>
        <button onClick={printRed}>Vermelho</button>
        <button onClick={printGreen}>Verde</button>
        <button onClick={printBlue}>Azul</button>
      </>
    )
  }
}

export default App;
