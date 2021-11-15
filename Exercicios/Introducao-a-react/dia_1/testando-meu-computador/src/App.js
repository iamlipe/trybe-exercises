import React from 'react'

function App() {

  const array = ['estudar', 'terminar portfolio', 'dentista'];

  const Task = (value) => {
    return (
      value.map((i) => <li>{i}</li>)
    );
  }

  return (
    <ul>
      {Task(array)}
    </ul>
  );
}

export default App;
