import React, { Component } from "react";

class DadJoke extends Component {
  constructor() {
    super();
    this.state = {
      jokeObj: undefined,
      loading: true,
      storedJokes: [],
    }
  }

  fetchJoke = async () => {
    const url = 'https://icanhazdadjoke.com/';
    const requestHeaders = {
      headers: {
        accept: 'application/json'
      }
    }
    const requestReturn = await fetch(url, requestHeaders);
    const requestObject = await requestReturn.json();
    this.setState({
      jokeObj: requestObject,
    })
  }

  componentDidMount() {
    this.fetchJoke()
  }

  saveJoke = () => {

  }

  rederJokeElement = () => {
    return (
      <div>
        <p>{this.state.jokeObj.joke}</p>
        <button type="button" onClick={this.saveJoke}>
          Salvar piada!
        </button>
      </div>
    )
  }

  render() {
    const { storedJokes } = this.state;
    const loading = <span>loading...</span>;

    return (
      <div>
        <span>
          {storedJokes.map(({ id, joke }) => (<p key={id}>{joke}</p>))}
        </span>

        <span>RENDERIZAÇÃO CONDICIONAL</span>

      </div>
    )
  }
}

export default DadJoke;
