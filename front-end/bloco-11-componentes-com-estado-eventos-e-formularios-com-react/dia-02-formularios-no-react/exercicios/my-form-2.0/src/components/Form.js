import React, { Component } from "react";
import Cpf from "./Cpf";
import Email from "./Email";
import Name from "./Name";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      cpf: ''
    }
  }
  handleChange = ({ target }) => {
    const { name, value } = target;
    const textValue = name === 'name'
      ? value.toUpperCase()
      : value
    const resultValue = target.type === 'checkbox'
      ? target.checked
      : textValue
    this.setState({
      [name]: resultValue
    })
  }
  render() {
    return (
      <form>
        <fieldset>
          <legend>Dados Pessoais</legend>
          <Name value={ this.state.name } handleChange={ this.handleChange } />
          <Email value={ this.state.email } handleChange={ this.handleChange } />
          <Cpf value={ this.state.cpf } handleChange={ this.handleChange } />
        </fieldset>
      </form>
    )
  }
}

export default Form;
