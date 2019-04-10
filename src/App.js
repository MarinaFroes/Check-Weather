import React from 'react';
import './App.css';
import Titles from './components/Titles';

class App extends React.Component {
  render() {
    return (
      <div>
        <Titles
          title="Weather Checker"
          text="Find out temperature, conditions and more..."
        />
      </div>
    );
  }
}

export default App;
