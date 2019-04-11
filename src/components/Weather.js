import React from 'react';
import styled from 'styled-components';

const WeatherContainer = styled.div`
  font-size: 1.1rem;
`;

const ErrorMessage = styled.p`
  background-color: white;
  padding: 10px;
  color: red;
  font-weight: bold;
`;

const Weather = ({ city, country, temperature, humidity, description, error}) => (
  <WeatherContainer>
      {  city && country && <p>Location: {city}, {country}</p>  }
      {  temperature && <p>Temperature: {temperature}°C</p>  }
      {  humidity && <p>Humidity: {humidity}% </p>  }
      {  description && <p>Conditions: {description}</p>  }
    {error && <ErrorMessage>{error}</ErrorMessage>  }
  </WeatherContainer>
);

export default Weather;
