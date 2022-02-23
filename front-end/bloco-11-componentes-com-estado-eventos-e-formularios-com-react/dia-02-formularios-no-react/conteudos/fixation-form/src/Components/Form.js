import React, { Component } from "react";

class Form extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      age: 0,
      bio: '',
      system: 'dnd',
      storyteller: false,
    }
    this.handleChange = this.handleChange.bind(this);
    this.fileInput = React.createRef();
  }
  handleChange({ target }) {
    const { name, type } = target;
    const value = type === 'checkbox'
      ? target.checked
      : target.value;
    this.setState({
      [name]: value,
    })
  }
  render() {
    return (
      <form className="form">
        <fieldset>
          <legend>Dados Pessoais</legend>
          <div>
            <label htmlFor='userName'>
              Nome:
              <input
                id="userName"
                type='text'
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
              />
            </label>
          </div>
          <div>
            <label htmlFor='userAge'>
              Idade:
              <input
                id="userAge"
                type='number'
                name="age"
                value={this.state.age}
                onChange={this.handleChange}
              />
            </label>
          </div>
          <div>
            <p>Algo sobre você:</p>
            <label htmlFor="userBio">
            <textarea
              id="userBio"
              name="bio"
              value={ this.state.bio }
              onChange={ this.handleChange } />
            </label>
          </div>
        </fieldset>
        <fieldset>
          <legend>Sobre Narração</legend>
          <div>
            <label htmlFor="userSytem">
              Qual o seu sistema preferido?
              <select
                id="userSytem"
                name="system"
                value={ this.state.system }
                onChange={ this.handleChange }
              >
                <option value="dnd">Dungeons & Dragons</option>
                <option value="wod">World of Darkness</option>
                <option value="gurps">GURPS</option>
              </select>
            </label>
          </div>
          <div>
            <label htmlFor="userStoryteller">
              Você é narrador?
              <input
                id="userStoryteller"
                type='checkbox'
                name="storyteller"
                value={this.state.storyteller}
                onChange={this.handleChange}
              />
            </label>
          </div>
          <div>
            <p>Caso seja narrador, anexe um arquivo com uma historia que você narrou.</p>
            <label htmlFor="userFile">
              <input
                id="userFile"
                type="file"
                ref={this.fileInput}
                name="file"
              />
            </label>
          </div>
        </fieldset>
      </form>
    )
  }
}

export default Form;
