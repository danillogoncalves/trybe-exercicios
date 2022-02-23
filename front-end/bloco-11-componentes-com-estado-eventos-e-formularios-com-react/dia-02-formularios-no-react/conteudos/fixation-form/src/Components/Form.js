import React, { Component } from "react";
import Age from "./Age";
import Bio from "./Bio";
import File from "./File";
import Name from "./Name";
import Storyteller from "./Storyteller";
import System from "./System";

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
          <Name value={ this.state.name } handleChange={ this.handleChange } />
          <Age  value={ this.state.age }  handleChange={ this.handleChange }/>
          <Bio value={ this.state.bio } handleChange={ this.handleChange } />
        </fieldset>
        <fieldset>
          <legend>Sobre Narração</legend>
          <System value={ this.state.system } handleChange={ this.handleChange } />
          <Storyteller value={ this.state.storyteller } handleChange={ this.handleChange } />
          <File fileInput={ this.fileInput } />
        </fieldset>
      </form>
    )
  }
}

export default Form;
