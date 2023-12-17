import React from 'react';
import { Zoom } from 'react-awesome-reveal';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {
  Info,
  Instagram,
  LinkedIn,
  GitHub,
  ReadMore
 } from '@mui/icons-material';

const Home = () => {
  return (
    <Container>
      <Zoom style={{"gridColumn": "1 / 3"}}>
        <GridItem1>
          <ProfilePic />
          <SideInfo>
            <p>MSIS STUDENT</p>
            <h1>Parimal Ingle</h1>
            <p>Currently pursuing Masters in Information Systems<br /> at California State University, Long Beach.</p>
          </SideInfo>
        </GridItem1>
      </Zoom>
      <Zoom>
        <Link to='/about'>
          <GridItem2>
            {/* <InfoIcon /> */}
            <Info style={{"color":"white", "fontSize":"10em","margin":"0.1em auto"}}/>
            <h5 className='link'>More About me</h5>
          </GridItem2>
        </Link>
      </Zoom>
      <Zoom>
        <Link to='/projects'>
          <GridItem3>
            <ProjectIcon />
            <h5 className='link'>Explore My Works</h5>
          </GridItem3>
        </Link>
      </Zoom>
      <Zoom>
        <Link to='/certifications'>
          <GridItem4>
            <CertificationIcon />
            <h5 className='link'>See My Certificates</h5>
          </GridItem4>
        </Link>
      </Zoom>
      <Zoom>
        <Link to='/workExp'>
          <GridItem5>
            <WorkExpIcon />
            <h5 className='link'>My Work Experience</h5>
          </GridItem5>
        </Link>
      </Zoom>
      <Zoom>
        <GridItem6>
          <IconWrap>
            <Icons>
              <Link to='https://www.linkedin.com/in/parimalingle/' target='_blank'>
                <LinkedIn style={{"fontSize":"40px", "color":"rgb(0, 119, 181)"}} />
              </Link>
            </Icons>
            <Icons>
              <Link to='https://www.instagram.com/parimalingle/' target='_blank'>
                <Instagram style={{"fontSize":"40px", "color":"rgb(188, 42, 141)"}} />
              </Link>
            </Icons>
            <Icons>
              <Link to='https://github.com/parimalingle1805' target='_blank'>
                <GitHub style={{"fontSize":"40px", "color":"rgb(255, 255, 255)"}} />
              </Link>
            </Icons>
            <Icons>
              <Link to='/contact'>
                <ReadMore style={{"fontSize":"40px", "color":"rgb(29, 161, 242)"}} />
              </Link>
            </Icons>
          </IconWrap>
          <h5 className="link">My Socials</h5>
        </GridItem6>
      </Zoom>
      <Zoom>
        <GridItem7>
          <IconWrap>
            <IconsFilled>
              <BanerText>
                <h2>02+</h2>
                <p className='banerText'>YEARS EXPERIENCE</p>
              </BanerText>
            </IconsFilled>
            <IconsEmpty>

            </IconsEmpty>
            <IconsEmpty>

            </IconsEmpty>
            <IconsFilled>
              <BanerText>
                <h2>04+</h2>
                <p className='banerText'>PROJECTS</p>
              </BanerText>
            </IconsFilled>
          </IconWrap>
        </GridItem7>
      </Zoom>
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
  margin: 0.7em;
  border-radius: 25px;

  .link {
    color: rgb(200, 200, 200);
    text-decoration: underline;
    text-decoration-color: rgb(40, 40, 40);
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
  content: url('/personal-portfolio-react/home_profile.jpeg');
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
  padding: 1em 0em;
`;

const GridItem3 = styled(GridItem)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 2em;
`;

const ProjectIcon = styled.img`
  content: url('/personal-portfolio-react/projectIcon.png');
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
  content: url('/personal-portfolio-react/certificationIcon.png');
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
  content: url('/personal-portfolio-react/workExpIcon.png');
  height: 10em;
  width: 10em;
  border-radius: 30px;
  margin: 0em 2em 1em 2em;
`;

const GridItem6 = styled(GridItem)`
  background-color: rgba(0, 0, 0, 0)
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 0.2em;
`;

const IconWrap = styled(GridItem)`
  display: grid;
  grid-template-columns: auto auto;
  justify-content: center;
  align-items: center;
`;

const Icons = styled.div`
  margin: 1em;
  padding: 0.5em;
  background-color: rgb(60, 60, 60);
  border: 2px solid rgb(60, 60, 60);
  border-radius: 50%;
`;

const GridItem7 = styled(GridItem6)`
  padding: 0.5em;
  @media(max-width: 828){
    padding: 1em;
  }
`;

const IconsFilled = styled(Icons)`
  border-radius: 10px;
  margin: -0.01em;
`;

const IconsEmpty = styled(Icons)`
  background-color: rgb(40, 40, 40);
  border: 0px;
  margin: -0.01em;
`;

const BanerText = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0.5em;
  @media(max-width: 828px){
    margin-top: 1em;
  }

  h2{
    font-size: 2em;
    margin: -0.1em;
  }

  .banerText {
    font-size: 0.8em;
    @media(max-width: 900px){
      font-size: 0.5em;
    }
  }
`;

export {
  ProfilePic,
  Container,
  GridItem,
  GridItem6,
  IconWrap,
  Icons
};