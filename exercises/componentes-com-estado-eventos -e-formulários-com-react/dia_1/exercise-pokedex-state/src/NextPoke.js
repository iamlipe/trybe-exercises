import React from 'react';


class NextPoke extends React.Component {
  render() {
    return <button onClick={this.props.next}  >Next Pokemon</button>
  }
}

export default NextPoke;