import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      countOne: 0,
      countTwo: 0,
      countThree: 0,
    }
    this.handleButtonOne = this.handleButtonOne.bind(this);
    this.handleButtonTwo = this.handleButtonTwo.bind(this);
    this.handleButtonThree = this.handleButtonThree.bind(this);
  }
  getButtonColor(num){
    return num % 2 === 0 ? 'green' : '';
  }
  handleButtonOne() {
    this.setState((previousState) => ({
      countOne: previousState.countOne + 1
    }), () => {
      console.log(`Botão 1 - ${this.getButtonColor(this.state.countOne)}`);
    });
  }
  handleButtonTwo() {
    this.setState((previousState) => ({
      countTwo: previousState.countTwo + 1
    }), () =>{
      console.log(`Botão 2 - ${this.getButtonColor(this.state.countTwo)}`);
    });
  }
  handleButtonThree() {
    this.setState((previousState) => ({
      countThree: previousState.countThree + 1
    }), () => {
      console.log(`Botão 3 - ${this.getButtonColor(this.state.countThree)}`);
    });
  }
  render() {
    const { countOne, countTwo, countThree } = this.state;
    return (
      <>
        <button 
          onClick={this.handleButtonOne}
          style={{ backgroundColor: this.getButtonColor(countOne) }}
        >
          Botão 1 - Contagem = { countOne }
        </button>
        <button
          onClick={this.handleButtonTwo}
          style={{ backgroundColor: this.getButtonColor(countTwo) }}
        >
          Botão 2 - Contagem = { countTwo }
        </button>
        <button
          onClick={this.handleButtonThree}
          style={{ backgroundColor: this.getButtonColor(countThree) }}
        >
          Botão 3 - Contagem = { countThree }
        </button>
      </>
    )
  }
}

export default App;
