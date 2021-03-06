import React from "react";
import "./App.css";
import Titles from "./components/Titles";
import Form from "./components/Form";
import Footer from "./components/Footer.js";
import Weather from "./components/Weather";
import styled from "styled-components";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media only screen and (min-width: 600px) {
    background-color: snow;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  @media only screen and (min-width: 600px) {
    flex-direction: row;
    margin: 2rem;
    justify-content: center;
    align-items: center;
    width: 35rem;
    height: 30rem;
    box-shadow: 3px 3px 10px grey;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.color};
  height: 30rem;
  width: 100%;

  @media only screen and (min-width: 600px) {
    width: 50%;
  }
`;

const API_KEY = "f6d3ccc3be4411b42258113ccd95bfec";

class App extends React.Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    icon: undefined,
    error: undefined
  };

  getWeather = async e => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`
    );
    const data = await api_call.json();
    if (city && country) {
      // console.log(data);
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        icon: data.weather[0].icon,
        error: ""
      });
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        icon: undefined,
        error: "Please enter valid values."
      });
    }
  };

  render() {
    return (
      <Main>
        <Container>
          <Titles
            title="Weather Checker"
            text="Find out temperature, conditions and more..."
          />
          <Info color="palevioletred">
            <Form color="palevioletred" getWeather={this.getWeather} />
            <Weather
              temperature={this.state.temperature}
              city={this.state.city}
              country={this.state.country}
              humidity={this.state.humidity}
              description={this.state.description}
              error={this.state.error}
              iconUrl={`https://openweathermap.org/img/w/${
                this.state.icon
              }.png`}
            />
          </Info>
        </Container>
        <Footer />
      </Main>
    );
  }
}

export default App;
