import * as React from 'react';
import './App.css';
import Board from './componets/Board'

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Board/>
      </div>
    );
  }
}

export default App;
