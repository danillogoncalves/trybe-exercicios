import React, { Component } from "react";

class Form extends Component {
  constructor() {
    super()
    this.state = {
      inputName: '',
      inputAge: 0,
      inputBio: '',
      selectSystem: 'dnd'
    }
    this.handleName = this.handleName.bind(this);
    this.handleAge = this.handleAge.bind(this);
    this.handleBio = this.handleBio.bind(this);
    this.handleSystem = this.handleSystem.bind(this);
  }
  handleName(event) {
    this.setState({
      inputName: event.target.value,
    })
  }
  handleAge(event) {
    this.setState({
      inputAge: (event.target.value),
    })
  }
  handleBio(event) {
    this.setState({
      inputBio: event.target.value,
    })
  }
  handleSystem(event) {
    this.setState({
      selectSystem: event.target.value,
    })
  }
  render() {
    return (
      <form className="form">
        <label htmlFor='userName'>
          Nome:
          <input
            id="userName"
            type='text'
            name="name"
            value={this.state.inputName}
            onChange={this.handleName}
          />
        </label>
        <label htmlFor='userAge'>
          Idade:
          <input
            id="userAge"
            type='number'
            name="age"
            value={this.state.inputAge}
            onChange={this.handleAge}
          />
        </label>
        <div>
          <label htmlFor="userBio">Algo sobre você:
            <textarea
              id="userBio"
              name="bio"
              value={ this.state.inputBio }
              onChange={ this.handleBio } />
          </label>
        </div>
        <select name="system" value={this.state.selectSystem} onChange={this.handleSystem} >
          <option value="dnd">Dungeons & Dragons</option>
          <option value="wod">World of Darkness</option>
          <option value="gurps">GURPS</option>
        </select>
      </form>
    )
  }
}

export default Form;
