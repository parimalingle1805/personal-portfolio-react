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
      company: "Capgemini, Financial Services"
    },
    {
      date: "Oct 2020 - June 2021",
      title: "Full Stack Web Developer",
      company: "UAS NMIMS"
    },
    {
      date: "July 2020 - Aug 2020",
      title: "Full Stack Web Developer",
      company: "Eamvey Careers"
    },
    {
      date: "Sept 2019 - May 2020",
      title: "Co - Founder / Android App Developer",
      company: "Unlock (startup)"
    }
  ];

  let edu = [
    {
      date: "Expected May 2025",
      title: "Master of Science in Information Systems",
      company: "California State University, Long Beach"
    },
    {
      date: "August 2021",
      title: "B.Tech in Electronics and Telecommunications",
      company: "Narsee Monjee Institute of Management Studies"
    }
  ];

  let skillSet = [
    {
      title: "Programming Languages",
      skills: ["JavaScript/TypeScript", "GraphQL", "Python", "Java", "C++"]
    },
    {
      title: "Web Development",
      skills: ["React.js/Redux", "Node.js", "Express.js", "Django", "REST APIs/GraphQL", "HTML5", "CSS3", "WordPress (CMS)"]
    },
    {
      title: "DevOps & Cloud",
      skills: ["Docker", "Kubernetes", "Amazon Web Services (AWS)", "CI/CD (GitHub Actions)", "Nginx", "Render (PaaS)", "Git"]
    },
    {
      title: "Databases & Generative AI",
      skills: ["SQL (MySQL, Oracle)", "NoSQL (MongoDB)", "LLM API Integration", "Prompt Engineering"]
    },
    {
      title: "Tools & Methodologies",
      skills: ["Linux/Unix", "Agile/Scrum", "Data Structures & Algorithms", "Figma", "Postman"]
    }
  ];

  let hColor = "#ffe600ff"
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
            Product-oriented Full-Stack Engineer who transforms ideas into scalable, <span style={{ color: hColor }}>AI-powered</span> web applications. 
            My expertise in <span style={{ color: hColor }}>React, Node.js, and AWS</span>, 
            combined with a focus on robust <span style={{ color: hColor }}>CI/CD pipelines</span>, 
            has delivered solutions that cut release cycles from weeks to days and secured<span style={{ color: hColor }}> $50,000+ </span>in funding and sponsorships.
          </p>
        </Zoom>
      </Summary>
      <GridItem2>
        <Zoom>
          <h1 style={{fontWeight:"400"}}>MY SOCIALS</h1>
          <IconWrap1>
            {socialIcons && socialIcons.map((socialIcon, index) => (
                <Link key={index} aria-label={socialIcon.ariaLabel} to={socialIcon.link} target="_blank" rel="noopener noreferrer">
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
            <div key={index} style={{marginBottom: '1.5em'}}>
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
            <div key={index} style={{marginBottom: '1.5em'}}>
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
          {skillSet && skillSet.map((category, index) => (
            <SkillCategory key={index}>
              <p className='expTitle' style={{fontSize: '1.1em', marginBottom: '0.5em'}}>{category.title}</p>
              <SkillPillContainer>
                {category.skills.map((skill, skillIndex) => (
                  <SkillPill key={skillIndex}>{skill}</SkillPill>
                ))}
              </SkillPillContainer>
            </SkillCategory>
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
    line-height: 1.6; // Added for better readability
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
    margin: 0.2em 0; // Adjusted margin for better spacing
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


const SkillCategory = styled.div`
  margin-bottom: 1.5em;
`;

const SkillPillContainer = styled.div`
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
  gap: 0.75em;
`;

const SkillPill = styled.span`
  background-color: rgb(60, 60, 60);
  color: rgb(210, 210, 210);
  padding: 0.5em 1em;
  border-radius: 15px;
  font-size: 0.9em;
  font-weight: 500;
`;

export {
  BriefExp,
  IconWrap1
};