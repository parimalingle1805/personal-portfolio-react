import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { Zoom } from 'react-awesome-reveal';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {
  LinkedIn,
  GitHub,
 } from '@mui/icons-material';
 import XIcon from '@mui/icons-material/X';
 import RedditIcon from '@mui/icons-material/Reddit';

let socialIcons = [
  {
    icon: <LinkedIn style={{"fontSize":"40px", "color":"rgb(0, 119, 181)"}} />,
    link: 'https://www.linkedin.com/in/parimalingle/',
    name: 'LinkedIn',
    ariaLabel: 'LinkedIn Profile URL'
  },
  {
    icon: <RedditIcon style={{"fontSize":"40px", "color":"rgb(255, 86, 0)"}} />,
    link: 'https://www.reddit.com/user/parimalingle1805/',
    name: 'Reddit',
    ariaLabel: 'Reddit Profile URL'
  },
  {
    icon: <GitHub style={{"fontSize":"40px", "color":"rgb(255, 255, 255)"}} />,
    link: 'https://github.com/parimalingle1805',
    name: 'GitHub',
    ariaLabel: 'Github Profile URL'
  },
  {
    icon: <XIcon style={{"fontSize":"40px", "color":"rgb(255, 255, 255)"}} />,
    link: 'https://x.com/IngleParimal',
    name: 'X/Twitter',
    ariaLabel: 'X Profile URL'
  }
];
const Home = () => {
  const { pathname } = useLocation();
 
   useEffect(() => {
    // Wait for 50 milliseconds before scrolling
    const timer = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 50);

    // Cleanup the timer if the user navigates away before it fires
    return () => clearTimeout(timer);
  }, [pathname]);

  let iconUrls = [
    {
      icon: '/personal-portfolio-react/workExpIcon.png',
      link: '/workExp',
      name: 'My Work Experience',
      ariaLabel: 'Work Experience Page URL'
    },
    {
      icon: '/personal-portfolio-react/projectIcon.png',
      link: '/projects',
      name: 'Explore My Projects',
      ariaLabel: 'Projects Page URL'
    },
    {
      icon: '/personal-portfolio-react/certificationIcon.png',
      link: '/certifications',
      name: 'See My Certificates',
      ariaLabel: 'Certifications Page URL'
    },
    {
      icon: '/personal-portfolio-react/infoIcon.png',
      link: '/about',
      name: 'Professional Summary',
      ariaLabel: 'About Page URL'
    }
  ];
  let resumeButtonStyle = {
    cursor: "pointer",
    gridColumn: "1 / 3",
    borderRadius:"20px",
    padding: "0.5em"
  };
  return (
    <Container>
        <GridItem1>
          <ProfilePic alt='Profile Picture'/>
          <SideInfo>
            <h1>Parimal Ingle</h1>
            <h3>Software Engineer | Java, Spring Boot, Microservices | AWS, REST & GraphQL APIs | ServiceNow</h3>
            <p>
              I architect scalable, production-grade enterprise applications using Java, Spring Boot, and AWS. 
              With 4+ years of experience in secure microservices and cloud-native architectures, 
              I deliver robust full-stack solutions that drive deployment reliability and operational excellence.
            </p>
          </SideInfo>
        </GridItem1>
        {iconUrls && iconUrls.map((iconUrl, index) => (
          <GridItem2 key={index}>
            <Zoom>
              <Link aria-label={iconUrl.ariaLabel} to={iconUrl.link}>
                  <Icon style={{content: `url(${iconUrl.icon})`}}/>
                  <h5 className='link'>{iconUrl.name}</h5>
              </Link>
            </Zoom>
          </GridItem2>
        ))}
        <GridItem2>
          <Zoom>
            <IconWrap>  
              {socialIcons && socialIcons.map((socialIcon, index) => (
                <Link key={index} aria-label={socialIcon.ariaLabel} to={socialIcon.link} target='_blank'>
                  <Icons>
                    {socialIcon.icon}
                  </Icons>
                </Link>
              ))}  
            </IconWrap>
            <h5 className="link">My Socials</h5>  
          </Zoom>
        </GridItem2>
        <GridItem2>
          <Zoom>
              <IconWrap style={{justifyContent: "space-between"}}>
                  <Icons style={resumeButtonStyle} onClick={() => window.open('/personal-portfolio-react/resume.pdf', '_blank')}>
                    View My Resume
                  </Icons>
                  <Icons style={resumeButtonStyle}> 
                    <a style={{color:"white", textDecoration:"none"}} href = '/personal-portfolio-react/resume.pdf' target='_blank' download="Parimal_Ingle_Resume">
                      Download Resume
                    </a>
                  </Icons>
              </IconWrap>
          </Zoom>
        </GridItem2>
    </Container>
  )
}

export default Home;

const Container = styled.div`
  display: grid;
  grid-template-columns: 23vw 23vw 23vw 23vw;
  justify-content: center;

  @media(max-width: 1080px){
    grid-template-columns: 30vw 30vw 30vw;
  }

  @media(max-width: 828px){
    grid-template-columns: 45vw 45vw;
    overflow-y: hidden;
  }

  width: 100vw;
  background-color: rgb(20, 20, 20);
  color: white;
  padding-top: 10vh;
  margin-top: 3vh;
`;

const GridItem = styled.div`
  background-color: rgb(40, 40, 40);
  margin: 0.7em;
  align-content: space-between;
  border-radius: 25px;
  @media(min-width: 1600px){
    font-size: 1.1em;
  }
  .link {
    color: rgb(200, 200, 200);
    text-decoration: underline;
    text-decoration-color: rgb(40, 40, 40);
    font-size: 1.1em;
    font-weight: 500;
    text-transform: uppercase;
    margin: 0.5em;
  }
`;

const GridItem1 = styled(GridItem)`
  grid-column: 1 / 3;
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-between;
  @media(max-width: 1080px){
    grid-row: 1 / 3;
  }
    
  @media(max-width: 512px){
    grid-template-columns: auto;
    padding: 1em;
    justify-content: center;
  }
  @keyframes slide-in {
      from {
        scale: 0%;
      }

      to {
        scale:100%;
      }
    }
  animation: slide-in 0.7s ease-in;
`;

const ProfilePic = styled.img`
  content: url('/personal-portfolio-react/home_profile.jpeg');
  justify-self: center;
  align-self: center;
  height: 15em;
  margin: 1em;
  padding: 1em;
  border-radius: 50px 0px 50px 0px;
`;

const SideInfo = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: 400;
  font-size: 1em;
  margin: 1em 2em 1em 0em;
  line-height: 1.5em;
  @media(max-width: 512px){
    font-weight: 200;
    font-size: 0.8em;
    padding-top: 1em;
    margin: 0em 1em 0em 0em;
  }
`;

const GridItem2 = styled(GridItem)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1em 0em;
`;

const Icon = styled.img`
  
  height: 8em;
  margin: 2em 2em 1em 2em;
  @media(max-width: 512px){
    height: 5em;
  }
`;

const IconWrap = styled(GridItem)`
  display: grid;
  grid-template-columns: auto auto;
  justify-content: center;
  align-items: center;
`;

const Icons = styled.div`
  margin: 0.5em;
  padding: 0.5em;
  background-color: rgb(60, 60, 60);
  border: 2px solid rgb(60, 60, 60);
  border-radius: 20px;
  font-size: 1.5em;
  @media(max-width: 512px){
    font-size: 1em;
  }
`;

export {
  ProfilePic,
  Container,
  GridItem,
  GridItem2,
  IconWrap,
  Icons,
  socialIcons
};