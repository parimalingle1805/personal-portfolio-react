import React from 'react';
import { Fade, Zoom } from 'react-awesome-reveal';
import styled from 'styled-components';

const Home = () => {
  return (
    <Container>
      <Zoom>
      <h1 style={{"color":"red"}}>Hellooooo</h1>
      <h1>Hellooooo</h1>
      <h1>Hellooooo</h1>
      <h1>Hellooooo</h1>
      <h1>Hellooooo</h1>
      <h1>Hellooooo</h1>
      <h1>Hellooooo</h1>
      <h1>Hellooooo</h1>
      <h1>Hellooooo</h1>
      </Zoom>
    </Container>
  )
}

export default Home;

const Container = styled.div`
    height: 90vh;
    width: 100vw;
    background-color: rgb(20, 20, 20);
    color: cyan;
    padding-top: 10vh;
    margin-top: 10vh;
`;