import React from "react";
import styled from "styled-components";

const WeatherContainer = styled.section`
  font-size: 1.1rem;
  text-align: center;
  height: 50%;
`;

const ErrorMessage = styled.p`
  background-color: white;
  padding: 10px;
  color: red;
  font-weight: bold;
`;

const Image = styled.img`
  width: 60px;
  align-self: center;
  margin-bottom: 20px;
`;

const Weather = ({
  city,
  country,
  temperature,
  humidity,
  description,
  iconUrl,
  error
}) => (
  <WeatherContainer>
    {city && country && (
      <p>
        Location: {city}, {country}
      </p>
    )}
    {temperature && <p>Temperature: {temperature}°C</p>}
    {humidity && <p>Humidity: {humidity}% </p>}
    {description && <p>Conditions: {description}</p>}
    { iconUrl && 
      <Image
        src={iconUrl}
        alt=""
      />
    }
    {error && <ErrorMessage>{error}</ErrorMessage>}
  </WeatherContainer>
);

export default Weather;
