import React from 'react';
import './App.css';
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';

const API_KEY = 'f6d3ccc3be4411b42258113ccd95bfec';
const CITY_ID = '524901';

class App extends React.Component {
  
  getWeather = async () => {
    const api_call = await fetch(`https://samples.openweathermap.org/data/2.5/forecast?id=${CITY_ID}&appid=${API_KEY}`);
    const data = await api_call.json();
    console.log(data);
  } 
  
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
