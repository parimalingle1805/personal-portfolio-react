import React from 'react';
import {Fade } from 'react-awesome-reveal';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Home = () => {
  return (
    <Container>
      <Fade style={{"gridColumn": "1 / 3"}}>
        <GridItem1>
          <ProfilePic />
          <SideInfo>
            <p>WEB DEVELOPER</p>
            <h1>Parimal Ingle</h1>
            <p>I am a Senior Software Engineer<br /> currently working at Capgemini.</p>
          </SideInfo>
        </GridItem1>
      </Fade>
      <Fade>
        <Link to='/about'>
          <GridItem2>
            <InfoIcon />
            <h5 className='link'>More About me</h5>
          </GridItem2>
        </Link>
      </Fade>
      <Fade>
        <Link to='/projects'>
          <GridItem3>
            <ProjectIcon />
            <h5 className='link'>Explore My Works</h5>
          </GridItem3>
        </Link>
      </Fade>
      <Fade>
        <Link to='/certifications'>
          <GridItem4>
            <CertificationIcon />
            <h5 className='link'>See My Certifications</h5>
          </GridItem4>
        </Link>
      </Fade>
      <Fade>
        <Link to='/workExp'>
          <GridItem5>
            <WorkExpIcon />
            <h5 className='link'>My Work Experience</h5>
          </GridItem5>
        </Link>
      </Fade>
      <Fade>
        Social Profiles
      </Fade>
      <Fade>
        Baner (work exp years, projects)
      </Fade>
      <Fade>
        Contact me BLAA BLAAAAA
      </Fade>
    </Container>
  )
}

export default Home;

const Container = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  //grid-auto-rows: 1fr;
  justify-content: center;
  
  @media(max-width: 1080px){
    grid-template-columns: 30vw 30vw 30vw;
  }

  @media(max-width: 828px){
    grid-template-columns: 50vw 50vw;
    overflow-y: hidden;
  }

  width: 100vw;
  background-color: rgb(20, 20, 20);
  color: white;
  padding-top: 10vh;
  margin-top: 5vh;
`;

const GridItem = styled.div`
  background-color: rgb(40, 40, 40);
  margin: 0.7em 0.7em;
  border-radius: 25px;

  .link {
    color: rgb(200, 200, 200);
    text-decoration: none;
    font-size: 1.2em;
    font-weight: 500;
    text-transform: uppercase;
    padding: 0 10px;
    margin: 0em 0em 1em 0em;
    flex-wrap: nowrap;
  }
`;

const GridItem1 = styled(GridItem)`
  display: flex;
  justify-content: space-between;
`;

const ProfilePic = styled.img`
  content: url('/home_profile.jpeg');
  height: 13em;
  margin: 1em;
  padding: 1em;
  border-radius: 50px 0px 50px 0px;
  @media(max-width: 512px){
    height: 7em; 
  }
`;

const SideInfo = styled.div`
  display: flex;
  flex-direction: column;
  //justify-content: space-between;
  //align-items: start;
  font-weight: 600;
  margin: 1em 7em 1em 0em;
  padding-top: 1em;
  @media(max-width: 512px){
    font-weight: 300;
    font-size: 0.7em;
    padding-top: 1.7em;
    margin: 0em 2em 0em 0em;
  }
`;

const GridItem2 = styled(GridItem)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const InfoIcon = styled.img`
  content: url('/infoIcon.jpg');
  height: 10.7em;
  border-radius: 30px;
  margin: 2em 2em 1em 2em;
`;

const GridItem3 = styled(GridItem)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 2em;
`;

const ProjectIcon = styled.img`
  content: url('/projectIcon.png');
  height: 10.7em;
  border-radius: 30px;
  margin: 0em 2em 1em 2em;
`;

const GridItem4 = styled(GridItem)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const CertificationIcon = styled.img`
  content: url('/certificationIcon.png');
  height: 10em;
  width: 10em;
  border-radius: 30px;
  margin: 2em 2em 1em 2em;
`;

const GridItem5 = styled(GridItem)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 2em;
  align-items: center;
`;

const WorkExpIcon = styled.img`
  content: url('/workExpIcon.png');
  height: 10em;
  width: 10em;
  border-radius: 30px;
  margin: 0em 2em 1em 2em;
`;