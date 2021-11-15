import React, { Component } from 'react'

class InputEmail extends Component {
  render() {
    const { value , onChange } = this.props
    return (
      <label>
        Email:
        <input
          type="email"
          name="email"
          maxLength="50"
          required
          value= { value }
          onChange = { onChange }
        />
      </label>
    );
  };
};

export default InputEmail;