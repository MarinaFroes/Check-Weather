import React from 'react';
import './App.css';
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';

const API_KEY = 'f6d3ccc3be4411b42258113ccd95bfec';

class App extends React.Component {
  render() {
    return (
      <div>
        <Titles
          title="Weather Checker"
          text="Find out temperature, conditions and more..."
        />
        <Form />
        <Weather />
      </div>
    );
  }
}

export default App;
