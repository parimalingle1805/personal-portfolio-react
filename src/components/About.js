import React from 'react';
import styled from 'styled-components';
import { Zoom } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';
import {
  Container,
  GridItem,
  GridItem2,
  IconWrap,
  Icons,
  ProfilePic,
  socialIcons
 } from './Home';
const About = () => {
  window.scrollTo(0, 0);

  let exp =[
    {
      date: "August 2024 - Present",
      title: "Graduate Student Assistant",
      company: "Bob Murphy Access Center (BMAC), CSULB"
    },
    {
      date: "June 2024 - July 2024",
      title: "AI Risk Management Market Research Extern",
      company: "Extern"
    },
    {
      date: "July 2021 - August 2023",
      title: "Senior Software Engineer",
      company: "Capgemini India Pvt. Ltd. | Financial Services"
    },
    {
      date: "Oct 2020 - June 2021",
      title: "Full Stack Web Developer",
      company: "UAS NMIMS"
    },
    {
      date: "Sept 2019 - May 2020",
      title: "Co - Founder / Android App Developer ",
      company: "Unlock (startup)"
    }
  ];
  let edu = [
    {
      date: "August 2023 - Present",
      title: "Master of Science in Information Systems",
      company: "California State University, Long Beach"
    },
    {
      date: "July 2017 - Aug 2021",
      title: "B.Tech in Electronics and Telecommunications",
      company: "Narsee Monjee Institute of Mangement Studies"
    }
  ];
  let skillSet = [
    {
      title: "Programming Languages",
      skills: "Python, Java, JavaScript, C++, C#"
    },
    {
      title: "Web Development",
      skills: "HTML, CSS, React, Node, Express, REST APIs, WordPress, Django"
    },
    {
      title: "Databases",
      skills: "SQL (MySQL, Oracle SQL), NoSQL (MongoDB)"
    },
    {
      title: "Tools/Operating Systems",
      skills: "Git, Excel, SPSS Statistics, Tableau, Figma, Prompt Engineering, Windows, Linux"
    }
  ];
  return (
    <AboutContainer1>   
      <GridItem>
        <Zoom>
          <ProfilePic />
        </Zoom>
      </GridItem>
      <Summary>
        <Zoom>
          <p className='summary-text'>
          "Driven MSIS candidate proficient in full-stack development and passionate about crafting intuitive user experiences 
           Eager to contribute to innovative software projects by bridging the gap between technology and user-centered design."
          </p>
        </Zoom>
      </Summary>
      <GridItem2>
        <Zoom>
          <h1 style={{fontWeight:"400"}}>MY SOCIALS</h1>
          <IconWrap1>
            {socialIcons && socialIcons.map((socialIcon, index) => (
                <Link key={index} aria-label={socialIcon.ariaLabel} to={socialIcon.link}>
                  <Icons>
                    {socialIcon.icon}
                  </Icons>
                </Link>
              ))}
          </IconWrap1>
        </Zoom>
      </GridItem2>
      <BriefExp style={{gridRow: "span 2"}}>
        <Zoom>
          <h1 className='heading'>Experience</h1>
          {exp && exp.map((exp, index) => (
            <div key={index}>
              <p className='expText'>{exp.date}</p>
              <p className='expTitle'>{exp.title}</p>
              <p className='expText'>{exp.company}</p>
            </div>
          ))}
        </Zoom>
      </BriefExp>
      <BriefExp>
        <Zoom>
          <h1 className='heading'>Education</h1>
          {edu && edu.map((edu, index) => (
            <div key={index}>
              <p className='expText'>{edu.date}</p>
              <p className='expTitle'>{edu.title}</p>
              <p className='expText'>{edu.company}</p>
            </div>
          ))}
        </Zoom>
      </BriefExp>
      <BriefExp>
        <Zoom>
          <h1 className='heading'>Skills</h1>
          {skillSet && skillSet.map((skill, index) => (
            <div key={index}>
              <p className='expText'>{skill.title}</p>
              <p className='expTitle'>{skill.skills}</p>
            </div>
          ))}
        </Zoom>
      </BriefExp>      
    </AboutContainer1>
  )
}

export default About;

const AboutContainer1 = styled(Container)`
  @media(max-width: 1080px){
    grid-template-columns: auto
  }
`;

const Summary = styled(GridItem)`
  grid-column: span 2;
  @media(max-width: 1440px){
    grid-column: 2 / 4;
  }
  @media(max-width: 1080px){
    grid-column: span 1;
  }
  display: flex;
  flex-direction: column;
  padding: 1em;
  align-items: center;
  justify-content: center;

  .summary-text {
    font-size: 1.7em;
    @media(max-width: 512px){
      font-size: 1.3em;
    }
  }
`;

const BriefExp = styled(GridItem2)`
  justify-content: start;
  padding: 0em 1em;
  grid-column: span 2;
  @media(max-width: 1080px){
    grid-column: span 1;
  }
  .heading {
    text-transform: uppercase;
    font-weight: 400;
  }

  .expText {
    font-size: 1em;
    font-weight: 400;
    color: rgb(200, 200, 200);
  }

  .expTitle {
    font-size: 1.3em;
    font-weight: 600;
    // margin: -10px 0 -10px 0;
  }
  @media(max-width: 1080px){
    grid-row: span 1;
  }
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
