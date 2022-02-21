import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.printColor = this.printColor.bind(this);
  }
  printColor(event) {
    console.log(this);
    const color = (event.target.innerText);
    console.log(color);
  }
  render() {
    return (
      <>
        <button onClick={this.printColor}>Vermelho</button>
        <button onClick={this.printColor}>Verde</button>
        <button onClick={this.printColor}>Azul</button>
      </>
    )
  }
}

export default App;
