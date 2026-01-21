import React from 'react';
import { Zoom } from 'react-awesome-reveal';
import { 
  Card,
  CardContent,
  Typography,
} from '@mui/material';
import styled from 'styled-components';
import { ProjectContainer, cardStyle, customTypo } from './Projects';
import { GridItem2 } from './Home';

const WorkExp = () => {
  window.scrollTo(0, 0);
  const workArr = [
  {
    "comp": "ServiceNow, GA",
    "duration": "Nov 2024 - Present",
    "desgn": "Software Engineer",
    "resp": [
      "Designed and developed scalable backend services using Java, Spring Boot, Hibernate/JPA, following microservices architecture and REST standards to support enterprise-grade workflows.",
      "Built and integrated secure APIs using Spring Security, JWT, REST APIs, and GraphQL, enabling reliable data exchange across internal and third-party systems.",
      "Containerized services using Docker and deployed on AWS (EC2, RDS, S3) with CI/CD pipelines (Jenkins), reducing manual deployment effort and improving release consistency.", 
      "Implemented frontend components using React.js and TypeScript, collaborating with UX teams to deliver responsive, reusable UI modules aligned with platform standards.",
      "Optimized database interactions with PostgreSQL and MongoDB, applying indexing and query tuning to improve API response times and system reliability.", 
      "Contributed to code quality and platform stability through unit testing (JUnit, Jest), Postman testing, code reviews, and Agile Scrum ceremonies, improving defect detection and release confidence.",
    ]
  },
  {
    "comp": "Orion Technolab, India",
    "duration": "Aug 2020 - July 2023",
    "desgn": "Software Engineer",
    "resp": [
      "Developed full-stack web applications using Java, Spring MVC, JSP, Servlets, JavaScript, and REST APIs, delivering end-to-end features aligned with client business requirements.",
      "Built backend services with Spring Boot and Hibernate/JPA, applying SDLC and Agile methodologies to ensure maintainable, production-ready code.",
      "Designed and maintained relational and NoSQL databases using MySQL and MongoDB, supporting transactional and document-based data models.",
      "Implemented frontend features using Angular, Vue.js, HTML5, CSS3, and AJAX, improving usability and cross-browser compatibility.",
      "Integrated third-party APIs and internal services using JSON, XML, and REST, enabling seamless system interoperability and automation workflows.",
      "Deployed and managed applications on Apache Tomcat and WebSphere, handling configuration, monitoring, and production issue resolution.", 
      "Improved application quality through unit testing, Postman API testing, Git-based version control, and structured code reviews, reducing production defects and rework.",
    ]
  },
];
  return (
    <WorkExpContainer>
      {workArr && workArr.map((work, index) => (
        <GridItem2 style={{justifyContent: "space-between"}} key={index}>
          <Zoom>
              <Card sx={cardStyle}>
                <CardContent>
                  <Typography gutterBottom variant="h4" component="div" style={{textAlign: "start"}}>
                  {work.comp} | <i>{work.desgn}</i>
                  </Typography>
                  <Typography variant="body1" sx={customTypo}>
                    {work.duration}
                  </Typography>
                  <Typography variant="body1" sx={customTypo}>
                    Key Responsibilities:
                    <ul>
                      {work.resp && work.resp.map((res, index) => (
                        <li key={index}>{res}</li>
                      ))}
                    </ul>
                  </Typography>
                </CardContent>
              </Card>
          </Zoom>
        </GridItem2>
      ))}
    </WorkExpContainer>
  )
}

const WorkExpContainer = styled(ProjectContainer)`
  grid-template-columns: 45vw 45vw;

  @media(max-width: 1440px){
    grid-template-columns: 95vw;
  }
`;


export default WorkExp;
