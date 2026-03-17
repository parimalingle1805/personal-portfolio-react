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

  let exp = [
    {
      date: "May 2025 - Present",
      title: "Full Stack Developer",
      company: "Saayam For All"
    },
    {
      date: "July 2021 - Aug 2023",
      title: "Senior Software Engineer",
      company: "Capgemini (Financial Services)"
    },
    {
      date: "Oct 2020 - June 2021",
      title: "Web Development Lead",
      company: "UAS NMIMS"
    },
    {
      date: "Sept 2019 - May 2020",
      title: "Co-Founder / Lead Full Stack Engineer",
      company: "Unlock (SaaS Startup)"
    }
  ];

  let edu = [
    {
      date: "May 2025",
      title: "Master of Science in Information Systems",
      company: "California State University, Long Beach"
    },
    {
      date: "August 2021",
      title: "B.Tech in Electronics and Telecommunications",
      company: "Narsee Monjee Institute of Management Studies"
    }
  ];

  let skillSet =[
    {
      title: "Languages & Web Core",
      skills:[
        "JavaScript", "TypeScript", "Python", "C/C++",
        "HTML5", "CSS3", "JSON", "GraphQL", "WebSockets"
      ]
    },
    {
      title: "Frameworks, Libraries & APIs",
      skills:[
        "React.js", "Node.js", "Express.js", "Django",
        "Vite", "Zod", "Server-Sent Events (SSE)", "Mapbox API", "REST APIs"
      ]
    },
    {
      title: "Cloud, DevOps & Infrastructure",
      skills:[
        "Docker", "Kubernetes", "CI/CD Pipelines", "GitHub Actions",
        "AWS (EC2, S3, RDS)", "Jenkins", "Linux", "Nginx"
      ]
    },
    {
      title: "Data Engineering & AI",
      skills:[
        "PostgreSQL", "MongoDB", "Oracle SQL", "Google Genkit (ADK)",
        "Gemini API", "Tree-sitter (AST)", "AI-Agent Architectures"
      ]
    },
    {
      title: "Tools, Testing & Methodologies",
      skills:[
        "Git", "GitHub", "Postman", "Jest",
        "SEO & WCAG Accessibility", "Agile", "Scrum", "SDLC"
      ]
    }
  ];

  let hColor = "#00E5FF"
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
            Full-Stack Software Engineer with <span style={{ color: hColor }}>4+ years of experience</span> blending the 0-to-1 agility of a startup founder 
            with enterprise fintech compliance. My expertise in <span style={{ color: hColor }}>React, Node.js, and TypeScript</span>, combined with modern 
            <span style={{ color: hColor }}> AI Agent Architectures</span>, enables me to deliver secure, scalable, and mathematically verified web platforms.
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