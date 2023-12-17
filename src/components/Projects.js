import React from 'react';
import { Container } from './Home';
import styled from 'styled-components';
import { Zoom } from 'react-awesome-reveal';
import { Flare, RadioButtonChecked } from '@mui/icons-material';
import { BriefExp } from './About';

const Projects = () => {

  const projArr = [
    {
      "title": "Personal Portfolio Web App",
      "duration": "Apr 2023-May 2023",
      "field": "Front End Web Development",
      "info": "Built my own portfolio website using ReactJs."
    },
    {
      "title": "SKB",
      "duration": "Feb 2022-Jan 2023",
      "field": "Mainframe",
      "info": "Triggered UAT/SKA batches and provided production support."
    },
    {
      "title": "VOLTAGE",
      "duration": "Oct 2021-Jan 2022",
      "field": "Mainframe, VisionPlus",
      "info": "Worked on encryption and decryption of sensitive data fields using PCI-DSS and PII."
    },
    {
      "title": "Farmer’s forum web app",
      "duration": "Oct-Nov 2020",
      "field": "Full Stack Web Development",
      "info": ": Built a Farmer’s Forum MERN stack app for Computational Agriculture competition organized by IIT-B and secured 5th position."
    },
    {
      "title": "Automated Car Parking System",
      "duration": "Dec 2019-Apr 2020",
      "field": "Android App Development",
      "info": "Built an application that would display empty parking slots at public places and navigates you to selected slot."
    },
  ];
  return (
    <ProjectContainer>
      <Zoom>
        <h1 className='heading'>
          <Flare style={{"marginRight": "1em"}} />
            MY PROJECTS
          <Flare style={{"marginLeft": "1em"}} />
        </h1>
      </Zoom>
      <zoom>

      </zoom>
      {projArr && projArr.map((proj, index) => (
        <Zoom key={index}>
          <Project>
            <p className='expTitle'>
              <RadioButtonChecked style={{"marginRight":"0.8em"}}/>
              {proj.title}
            </p>
            <ul>
              <li>
                <p className='expText'>
                  Duration of Project: {proj.duration}
                </p>
              </li>
              <li>
                <p className='expText'>
                  Field: {proj.field}
                </p>
              </li>
              <li>
                <p className='expText'>
                  Information: {proj.info}
                </p>
              </li>
            </ul>
          </Project>
        </Zoom>
      ))}
    </ProjectContainer>
  )
}

export default Projects;

const ProjectContainer = styled(Container)`
  grid-template-columns: auto auto;

  .heading {
    align-self: center;
    font-size: 3em;

    @media(max-width: 512px) {
      font-size: 1.5em;
    }
  }

  @media(max-width: 1080px){
    grid-template-columns: 95vw;
  }
`;
const Project = styled(BriefExp)`
  padding: 2em;
  max-width: 85%;
  .expTitle {
    font-size: 2em;

    @media(max-width: 512px) {
      font-size: 1.3em;
    }
  }

  .expText {
    font-size: 1.4em;
    font-weight: 400;

    @media(max-width: 512px) {
      font-size: 1em;
    }
  }
  li {
    text-align: start;
    .expText {
    font-size: 1.4em;
    font-weight: 400;

    @media(max-width: 512px) {
      font-size: 1em;
    }
  }
`;

export {
  ProjectContainer,
  Project
}