import React from 'react';
import styled from 'styled-components';
import { Zoom } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';
import {
  Container,
  GridItem,
  GridItem6,
  IconWrap,
  Icons
 } from './Home';
import {
  Flare,
  Instagram,
  LinkedIn,
  GitHub,
  ReadMore
 } from '@mui/icons-material';

const About = () => {
  return (
    <AboutContainer1>
      <Zoom>
      <GridItem>
        <AboutProfilePic />
      </GridItem>
      <Summary>
        <h1 className='heading'>
          <Flare style={{"marginRight": "1em"}} />
            Objective
          <Flare style={{"marginLeft": "1em"}}/>
        </h1>
        <p className='summary-text'>
          Looking for an opportunity to explore my knowledge in the field of computer science and work as a
          software developer in an organization which will provide me the platform to use my analytical and
          technical skills for mutual benefit and growth. My skills will help me to secure a challenging position in
          the domain that utilizes experience, while allowing me the opportunity to grow professionally.
        </p>
      </Summary>
      <BriefExp>
        <h1 className='heading'>Experience</h1>
        <p className='expText'>July 2021 - August 2023</p>
        <p className='expTitle'>Senior Software Engineer</p>
        <p className='expText'>Capgemini India Pvt. Ltd.</p>
        <br />
        <p className='expText'>Oct 2020 - June 2021</p>
        <p className='expTitle'>Full Stack Web Developer</p>
        <p className='expText'>UAS NMIMS</p>
      </BriefExp>
      <EduSocialsWrap>
          <Education>
            <h1 className='heading'>Education</h1>
            <p className='expText'>August 2023 - Present</p>
            <p className='expTitle'>Master of Science in Information Systems</p>
            <p className='expText'>California State University, Long Beach</p>
            <br />
            <p className='expText'>July 2017 - Aug 2021</p>
            <p className='expTitle'>B.Tech in Electronics and Telecommunications</p>
            <p className='expText'>Narsee Monjee Institute of Mangement Studies</p>
          </Education>
          <Education>
            <h1 className='heading'>Skills</h1>
            <br />
            <p className='expTitle'>Python, HTML, CSS, Git</p>
            <p className='expText'>Proficient</p>
            <br />
            <p className='expTitle'>Javascript, Bootstrap, Java, C++</p>
            <p className='expText'>Competent</p>
            <br />
            <p className='expTitle'>ReactJs, DSA, NodeJs, ExpressJs</p>
            <p className='expText'>Beginner</p>
          </Education>
        <GridItem6>
          <h1 style={{"fontWeight":"400","paddingTop":"0.6em","paddingLeft":"0.8em","textAlign":"start"}}>MY SOCIALS</h1>
          <IconWrap1>
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
          </IconWrap1>
        </GridItem6>
      </EduSocialsWrap>
      </Zoom>
    </AboutContainer1>
  )
}

export default About;

const AboutContainer1 = styled(Container)`
  grid-template-columns: auto auto;
  padding-left: 1vw;
  padding-right: 1vw;
  width: 98vw;
  @media(max-width: 1080px){
    grid-template-columns: 97vw;
    overflow-y: hidden;
  }
`;

// const AboutProfilePic = styled(ProfilePic)`
//   content: url('personal-portfolio-react/home_profile.jpeg');
//   height: 18em;
// `;

const AboutProfilePic = styled.img`
  content: url('/personal-portfolio-react/home_profile.jpeg');
  height: 18em;
  margin: 1em;
  padding: 1em;
  border-radius: 50px 0px 50px 0px;
  @media(max-width: 512px){
    height: 7em;
  }
`;

const Summary = styled(GridItem)`
  display: flex;
  flex-direction: column;
  padding: 1em;
  flex-wrap: nowrap;
  justify-content: space-between;


  .heading {
    text-transform: uppercase;
    font-size: 3em;
    @media(max-width: 512px){
      font-size: 2em;
    }
  }
  .summary-text {
    font-size: 1.5em;
    @media(max-width: 512px){
      font-size: 1em;
    }
  }
`;

const BriefExp = styled(GridItem)`
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 1em;

  .heading {
    text-transform: uppercase;
    font-weight: 400;
  }

  .expText {
    font-size: 0.9em;
    font-weight: 400;
    color: rgb(200, 200, 200);
  }

  .expTitle {
    font-size: 1.2em;
    font-weight: 600;
    margin: -10px 0 -10px 0;
  }
`;

const EduSocialsWrap = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  @media(max-width: 1080px){
    grid-template-columns: 97vw;
  }
`;

const Education = styled(BriefExp)`

`;

const IconWrap1 = styled(IconWrap)`
  @media(max-width: 1080px){
    grid-template-columns: auto auto auto auto;
  }
`;

export {
  BriefExp,
  IconWrap1
};
