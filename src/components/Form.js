import React from 'react';
import styled from 'styled-components';

const FormContainer = styled.form`
  background-color: orange;
  text-align: center;
  display: flex;
  flex-direction: column;
  padding: 3rem;
  height: 100%;
`;

const Input = styled.input`
  font-size: 1.2rem;
  margin: 1rem;
  border: none;
  border-radius: 3px;
  padding: 4px;
`;

const Submit = styled.input`
  background-color: black;
  padding: 5px 15px;
  border-radius: 3px;
  color: white;
  text-align: center;
  align-self: center;
  font-size: 1.2rem;
  margin: 1rem;
`;

const Form = ({ getWeather }) => (
  <FormContainer onSubmit={getWeather}>
    <Input
      type="text"
      name="city"
      placeholder="City..."
    />
    <Input
      type="text"
      name="country"
      placeholder="Country..."
    />
    <Submit
      type="submit"
      value="Get Weather"
    />
  </FormContainer>
)

export default Form;