import React from 'react';
import { Fade, Zoom } from 'react-awesome-reveal';
import styled from 'styled-components';

const Home = () => {
  return (
    <Container>
      <Zoom style={{"gridColumn": "1 / 3"}}>
        <GridItem1>
          <ProfilePic />
        </GridItem1>
      </Zoom>
      <Zoom>
        About
      </Zoom>
      <Zoom>
        Projects
      </Zoom>
      <Zoom>
        Certifications
      </Zoom>
      <Zoom>
        Work Experience
      </Zoom>
      <Zoom>
        Social Profiles
      </Zoom>
      <Zoom>
        Baner (work exp years, projects)
      </Zoom>
      <Zoom>
        Contact me BLAA BLAAAAA
      </Zoom>
    </Container>
  )
}

export default Home;

const Container = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  height: 95vh;
  width: 100vw;
  background-color: rgb(20, 20, 20);
  color: white;
  padding-top: 10vh;
  margin-top: 5vh;
`;

const GridItem = styled.div`
  background-color: rgb(40, 40, 40);
  margin: 3vh 3vw;
  border-radius: 25px;
`;

const GridItem1 = styled(GridItem)`
  grid-column: 1 / 3;
`;

const ProfilePic = styled.img`
  content: url('/home_profile.jpeg');
  height: 25vh;
  margin: 1em;
  padding: 1em;
  border-radius: 50px 0px 50px 0px;
`;