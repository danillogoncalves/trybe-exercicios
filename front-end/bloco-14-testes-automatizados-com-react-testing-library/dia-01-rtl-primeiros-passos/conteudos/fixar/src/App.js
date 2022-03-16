// App.js
import React, { Component } from 'react';
import './App.css';
import ValidEmail from './ValidEmail';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      saveEmail: '',
      loadingFirst: false,
    };
  }

  changeEmail(value) {
    this.setState({ email: value });
  }

  changeSaveEmail(value) {
    this.setState({
      saveEmail: value,
      email: '',
      loadingFirst: true
    });
  }

  render() {
    const { email, saveEmail, loadingFirst } = this.state;
    return (
      <div className="App">
        <label htmlFor="id-email">
          Email
          <input
            id="id-email"
            value={email}
            type="email"
            onChange={(e) => this.changeEmail(e.target.value)}
          />
        </label>
        <input
          id="btn-enviar"
          type="button"
          data-testid="id-send"
          value="Enviar"
          onClick={() => this.changeSaveEmail(email)}
        />
        <input id="btn-id" type="button" value="Voltar" />
        <ValidEmail email={saveEmail} loadingFirst={loadingFirst} />
      </div>
    );
  }
}

export default App;