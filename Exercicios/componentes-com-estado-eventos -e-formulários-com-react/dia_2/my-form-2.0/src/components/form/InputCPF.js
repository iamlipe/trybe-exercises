import React, { Component } from 'react'

class InputCPF extends Component {
  render() {
    const { value , onChange } = this.props
    return (
      <label>
        CPF:
        <input
          type="number"
          name="cpf"
          maxLength="11"
          required
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  };
};

export default InputCPF;