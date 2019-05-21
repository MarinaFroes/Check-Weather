import React from "react";
import styled from "styled-components";

const TitleContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: black;
  color: #fff;
  text-align: center;

  @media only screen and (min-width: 600px) {
    width: 50%;
    height: 30rem;
    margin: auto;
  }
`;

const Title = styled.h1`
  margin-top: 30px;
`;

const Text = styled.p`
  margin-bottom: 30px;
  padding: 10px;
`;

const Titles = ({ title, text }) => (
  <TitleContainer>
    <Title>{title}</Title>
    <Text>{text}</Text>
  </TitleContainer>
);

export default Titles;
