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
  handleButtonOne() {
    this.setState((previousState, _props) => ({
      countOne: previousState.countOne + 1
    }))
  }
  handleButtonTwo() {
    this.setState((previousState, _props) => ({
      countTwo: previousState.countTwo + 1
    }))
  }
  handleButtonThree() {
    this.setState((previousState, _props) => ({
      countThree: previousState.countThree + 1
    }))
  }
  render() {
    return (
      <>
        <button onClick={this.handleButtonOne}>Botão 1 - Contagem = {this.state.countOne}</button>
        <button onClick={this.handleButtonTwo}>Botão 2 - Contagem = {this.state.countTwo}</button>
        <button onClick={this.handleButtonThree}>Botão 3 - Contagem = {this.state.countThree}</button>
      </>
    )
  }
}

export default App;
