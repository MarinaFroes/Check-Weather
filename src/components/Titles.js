import React from 'react';
import styled from 'styled-components';

const TitleContainer = styled.div`
  background-color: black;
  color: #fff;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 15rem;
  padding: 2rem;

  @media only screen and (min-width: 600px){
    width: 50%;
    height: 30rem;
  }
`;

const Titles = ({ title, text }) => (
  <TitleContainer>
    <h1>{title}</h1>
    <p>{text}</p>
  </TitleContainer>
)

export default Titles;