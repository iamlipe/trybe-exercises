import React, { Component } from 'react'
import InputCidade from './InputCidade';
import InputCPF from './InputCPF';
import InputEmail from './InputEmail';
import InputEndereco from './InputEndereco';
import InputEstado from './InputEstado';
import InputHomeType from './InputHomeType';
import InputName from './InputName';

class Form extends Component {

  constructor () {
    super()
    this.state = {
      name: '',
      email: '',
      cpf: '',
      endereco: '',
      cidade: '',
      estado: '',
      home: '',
    }
  }

  handleForm = ( { target } ) => {
    const { name } = target
    const value = target.type === 'radio' ? target.id : target.value;    
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <fieldset>
        <InputName onChange={this.handleForm} value={this.state.name} />
        <InputEmail onChange={this.handleForm} value={this.state.email} />
        <InputCPF onChange={this.handleForm} value={this.state.cpf} />
        <InputEndereco onChange={this.handleForm} value={this.state.endereco} />
        <InputCidade onChange={this.handleForm} value={this.state.cidade} />
        <InputEstado onChange={this.handleForm} value={this.state.estado} />
        <InputHomeType onChange={this.handleForm} value={this.state.home} />      
    </fieldset>
    );
  };
};

export default Form;