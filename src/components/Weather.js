import React from 'react';
import styled from 'styled-components';

const WeatherContainer = styled.div`
  font-size: 1.1rem;
  
  p.error {
    background-color: white;
    padding: 10px;
    color: red;
  }
`;

const Weather = ({ city, country, temperature, humidity, description, error}) => (
  <WeatherContainer>
      {  city && country && <p>Location: {city}, {country}</p>  }
      {  temperature && <p>Temperature: {temperature}°C</p>  }
      {  humidity && <p>Humidity: {humidity}% </p>  }
      {  description && <p>Conditions: {description}</p>  }
      {  error && <p className="error">{error}</p>  }
  </WeatherContainer>
);

export default Weather;
