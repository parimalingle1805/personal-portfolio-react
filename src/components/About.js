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
      date: "Nov 2024 - Present",
      title: "Software Engineer",
      company: "ServiceNow, GA"
    },
    {
      date: "Aug 2020 - July 2023",
      title: "Software Engineer",
      company: "Orion Technolab, India"
    },
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

  let skillSet = [
    {
      title: "Languages & Web Core",
      skills: [
        "Java", "JavaScript", "TypeScript", "Python", "C/C++", 
        "HTML5", "CSS3", "JSON", "XML", "AJAX", "JSP", 
        "Servlets", "WebSockets", "CMS"
      ]
    },
    {
      title: "Frameworks, Libraries & APIs",
      skills: [
        "Spring Boot", "Spring MVC", "Spring Security", "Microservices Architecture", 
        "Hibernate/JPA", "React.js", "Vue.js", "Angular", "Node.js", 
        "Express.js", "Django", "Vite", "REST APIs", "GraphQL"
      ]
    },
    {
      title: "Cloud, DevOps & Infrastructure",
      skills: [
        "AWS (EC2, S3, RDS, Lambda)", "Azure", "GCP", "Docker", "Kubernetes", 
        "Jenkins", "Terraform", "CI/CD Pipelines", "Nginx", 
        "ServiceNow Platform (SAM Pro)", "Linux", "Unix", "Windows"
      ]
    },
    {
      title: "Data Engineeering & AI",
      skills: [
        "SQL", "NoSQL", "PostgreSQL", "MySQL", "MongoDB", 
        "AI-powered Tools", "Workflow Automation", "AI-driven Insights"
      ]
    },
    {
      title: "Tools, Testing & Methodologies",
      skills: [
        "Git", "GitHub", "IntelliJ IDEA", "Postman", "Figma", "Tableau", 
        "Apache Tomcat", "WebSphere", "JUnit", "Jest", "Mocha", 
        "Test Automation", "Agile", "Scrum", "SDLC", "Waterfall"
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
            Full-Stack Software Engineer with <span style={{ color: hColor }}> 4+ years of experience</span> building scalable, production-grade applications. 
            My expertise in <span style={{ color: hColor }}> Java, Spring Boot, and Microservices</span>, combined with cloud-native skills in 
            <span style={{ color: hColor }}> AWS and Docker</span>, enables me to deliver secure, high-performance solutions across enterprise environments.
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