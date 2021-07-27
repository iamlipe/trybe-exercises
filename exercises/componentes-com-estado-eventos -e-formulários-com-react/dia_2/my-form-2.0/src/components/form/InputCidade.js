import React, { Component } from 'react'

class InputCidade extends Component {
  render() {
    const { value , onChange } = this.props
    return (
      <label>
        Cidade:
        <input
          type="text"
          name="cidade"
          maxLength="28"
          required
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  };
};

export default InputCidade;