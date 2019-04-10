import React from 'react';
import './App.css';
import Titles from './components/Titles';
import Form from './components/Form';

class App extends React.Component {
  render() {
    return (
      <div>
        <Titles
          title="Weather Checker"
          text="Find out temperature, conditions and more..."
        />
        <Form />
      </div>
    );
  }
}

export default App;
