import React from 'react';
import styled from 'styled-components';

const FormContainer = styled.form`
  background-color: orange;
  text-align: center;
  display: flex;
  flex-direction: column;
  padding: 3rem;
  height: 100%;
  
  input {
    font-size: 1.2rem;
    margin: 1rem;
    border: none;
    background-color: white;
  }

  input[type=submit] {
    background-color: black;
    width: 10rem;
    border-radius: 3px;
    color: white;
    text-align: center;
    align-self: center;
  }
`;

const Form = ({ getWeather }) => (
  <FormContainer onSubmit={getWeather}>
    <input
      type="text"
      name="city"
      placeholder="City..."
    />
    <input
      type="text"
      name="country"
      placeholder="Country..."
    />
    <input
      type="submit"
      value="Get Weather"
    />
  </FormContainer>
)

export default Form;