import * as React from 'react';
import './App.css';
import Board from './componets/Board'
import { DragDropContextProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <DragDropContextProvider backend={HTML5Backend}>
        <Board/>
        </DragDropContextProvider>
      </div>
    );
  }
}

export default App;
