import React from 'react';
import { ProjectContainer } from './Projects';
import { Zoom } from 'react-awesome-reveal';
import { Icons } from './Home';
import { Link } from 'react-router-dom';
import {
  MailOutlineTwoTone,
  Phone,
  LocationOn,
  Instagram,
  LinkedIn,
  GitHub,
  Twitter
} from '@mui/icons-material';
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
          <SocialContRight>
          <Link to='https://www.linkedin.com/in/parimalingle/' target='_blank'>
              <CustomLinkedin>
                  <LinkedIn style={{"fontSize":"75px", "color":"white","marginRight":"0.4em"}} />
                <p className='link'>LinkedIn</p>
              </CustomLinkedin>
          </Link>
          <Link to='https://www.instagram.com/parimalingle/' target='_blank'>
              <CustomInsta>
                  <Instagram style={{"fontSize":"75px", "color":"white","marginRight":"0.4em"}} />
                <p className='link'>Instagram</p>
              </CustomInsta>
            </Link>
            <Link to='https://github.com/parimalingle1805' target='_blank'>
              <CustomGithub>
                  <GitHub style={{"fontSize":"75px", "color":"white","marginRight":"0.4em"}} />
                <p className='link'>Github</p>
              </CustomGithub>
            </Link>
            <Link to='https://twitter.com/IngleParimal' target='_blank'>
              <CustomTwitter>
                  <Twitter style={{"fontSize":"75px", "color":"white","marginRight":"0.4em"}} />
                <p className='link'>Twitter</p>
              </CustomTwitter>
            </Link>
          </SocialContRight>
          </Zoom>
        </GridItem2>
      
      <CustZoom>
        <h1 className='connect'>LET'S</h1>
      </CustZoom>
      <CustZoom>
        <h1 className='connect'>CONNECT!</h1>
      </CustZoom>
    </ContactContainer>
  )
}

export default Contact;

const ContactContainer = styled(ProjectContainer)`
  grid-template-columns: 40vw 40vw;
  @media(max-width: 1900px) {
    grid-template-columns: 80vw;
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
`;
const SocialIcons = styled(Icons)`
  border-radius: 30%;
  margin 0em 0.7em;
`;

const SocialContRight = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  column-gap: 2em;
  row-gap: 2em;
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

const CustomInsta = styled(CustomIcons)`
  background: rgb(188, 42, 141);
  .link {
    text-decoration-color: rgb(188, 42, 141);
    }
`;
const CustomGithub = styled(CustomIcons)`
  background: rgb(0, 0, 0);
  .link {
    text-decoration-color: rgb(0, 0, 0);
    }
`;
const CustomTwitter = styled(CustomIcons)`
  background: rgb(29, 161, 242);
  .link {
    text-decoration-color: rgb(29, 161, 242);
    }
`;

const CustZoom = styled(Zoom)`
    font-size: 3em;

    @media(max-width: 512px) {
      font-size: 1.8em;
    }
`;