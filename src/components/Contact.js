import React from 'react';
import { ProjectContainer } from './Projects';
import { Zoom } from 'react-awesome-reveal';
import { Icons } from './Home';
import { Link } from 'react-router-dom';
import {
  MailOutlineTwoTone,
  Phone,
  LocationOn,
  LinkedIn,
  GitHub,
} from '@mui/icons-material';
import XIcon from '@mui/icons-material/X';
import RedditIcon from '@mui/icons-material/Reddit';
import styled from 'styled-components';
import { GridItem2 } from './Home';

const Contact = () => {
  window.scrollTo(0, 0);
  return (
    <ContactContainer>
      
        <GridItem2>
        <Zoom>
          <SocialCont>
            <SocialIcons>
              <MailOutlineTwoTone style={{"fontSize": "40px"}}/>
            </SocialIcons>
            <p>parimal.ingle18@gmail.com</p>
          </SocialCont>
          <SocialCont>
            <SocialIcons>
              <Phone style={{"fontSize": "40px"}}/>
            </SocialIcons>
            <p>+1 (562) 846-0322</p>
          </SocialCont>
          <SocialCont>
            <SocialIcons>
              <LocationOn style={{"fontSize": "40px"}}/>
            </SocialIcons>
            <p>Long Beach, California</p>
          </SocialCont>
          </Zoom>
        </GridItem2>
      
      
        <GridItem2>
        <Zoom>
          <h1 style={{fontWeight:"400"}}>MY SOCIALS</h1>
          <SocialContRight>
            <Link to='https://github.com/parimalingle1805' target='_blank'>
              <CustomGithub>
                  <GitHub style={{"fontSize":"75px", "color":"white","marginRight":"0.4em"}} />
                <p className='link'>Github</p>
              </CustomGithub>
            </Link>
            <Link to='https://www.linkedin.com/in/parimalingle/' target='_blank'>
                <CustomLinkedin>
                    <LinkedIn style={{"fontSize":"75px", "color":"white","marginRight":"0.4em"}} />
                  <p className='link'>LinkedIn</p>
                </CustomLinkedin>
            </Link>
            <Link to='https://www.reddit.com/user/parimalingle1805/' target='_blank'>
              <CustomReddit>
                  <RedditIcon style={{"fontSize":"75px", "color":"white","marginRight":"0.4em"}} />
                <p className='link'>Reddit</p>
              </CustomReddit>
            </Link>
            <Link to='https://x.com/IngleParimal' target='_blank'>
              <CustomX>
                  <XIcon style={{"fontSize":"75px", "color":"white","marginRight":"0.4em"}} />
                <p className='link'>X</p>
              </CustomX>
            </Link>
          </SocialContRight>
          </Zoom>
        </GridItem2>
      
      {/* <CustZoom>
        <h1 className='connect'>LET'S</h1>
      </CustZoom>
      <CustZoom>
        <h1 className='connect'>CONNECT!</h1>
      </CustZoom> */}
    </ContactContainer>
  )
}

export default Contact;

const ContactContainer = styled(ProjectContainer)`
  grid-template-columns: 50vw 50vw;
  @media(max-width: 1080px) {
    grid-template-columns: 100vw;
  }
`;

const SocialCont = styled.div`
  display: flex;
  justify-content: start;
  padding: 1em;

  p {
    margin: 0.5em 1em 0em 0em;
    font-weight: 400;
    font-size: 1.3em;
  }
  @media(max-width: 512px) {
    p {
      font-size: 1.1em;
    }
  }
  @media(max-width: 350px) {
    p {
      font-size: 0.9em;
    }
  }
`;
const SocialIcons = styled(Icons)`
  border-radius: 30%;
  margin 0em 0.7em;
`;

const SocialContRight = styled.div`
  display: grid;
  grid-template-columns: 48% 48%;
  column-gap: 1.5em;
  row-gap: 1.5em;
  //justify-content: start;
  padding: 2em;

  p {
    margin: 0.5em 1em 0em 0em;
    font-weight: 400;
    font-size: 1.3em;
  }
  @media(max-width: 1440px) {
    p {
      font-size: 1.1em;
    }
    padding: 0.8em;
    grid-template-columns: auto;
  }
  @media(max-width: 512px) {
    p {
      font-size: 1.1em;
    }
    padding: 0.8em;
    grid-template-columns: 100%;
  }
  

`;

const CustomIcons = styled.div`
  border-radius: 20px;
  display: flex;
  justify-content: center;
  padding: 0.5em 1em;
  .link {
    color: white;
    text-decoration: underline;
    font-size: 1.8em;
    font-weight: 500;
    //flex-wrap: nowrap;
  }
`;

const CustomLinkedin = styled(CustomIcons)`
  background: rgb(0, 119, 181);
  .link {
  text-decoration-color: rgb(0, 119, 181);
  }
`;

const CustomReddit = styled(CustomIcons)`
  background: rgb(255, 86, 0);
  .link {
    text-decoration-color: rgb(255, 86, 0);
    }
`;
const CustomGithub = styled(CustomIcons)`
  background: rgb(0, 0, 0);
  .link {
    text-decoration-color: rgb(0, 0, 0);
    }
`;
const CustomX = styled(CustomIcons)`
  background: rgb(0, 0, 0);
  .link {
    text-decoration-color: rgb(0, 0, 0);
    }
`;

// const CustZoom = styled(Zoom)`
//     font-size: 3em;

//     @media(max-width: 512px) {
//       font-size: 1.8em;
//     }
// `;