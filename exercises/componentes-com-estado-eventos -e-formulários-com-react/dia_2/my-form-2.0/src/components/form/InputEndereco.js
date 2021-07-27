import React, { Component } from 'react'

class InputEndereco extends Component {
  render() {
    const { value , onChange } = this.props
    return (
      <label>
        Endereço:
        <input
          type="text"
          name="endereco"
          maxLength="200"
          required
          value={ value }
          onChange = { onChange}
        />
      </label>
    );
  };
};

export default InputEndereco;