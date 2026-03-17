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
  const workArr =[
    {
      "comp": "Saayam For All",
      "duration": "May 2025 - Present",
      "desgn": "Full Stack Developer",
      "resp":[
        "Engineered responsive, dynamic React.js dashboards for real-time volunteer coordination and donation tracking, optimizing component rendering to improve UI load times by 25%.",
        "Architected secure frontend-to-backend integrations, connecting React applications to Java/Spring Boot microservices via AWS API Gateway.",
        "Implemented robust JWT session management and identity verification using AWS Cognito.",
        "Strengthened platform reliability by participating in the deployment of containerized workloads to AWS EKS (Kubernetes) and authoring comprehensive automated test suites, reducing UI regression defects by 30%."
      ]
    },
    {
      "comp": "Bob Murphy Access Center (BMAC)",
      "duration": "Aug 2024 - May 2025",
      "desgn": "Graduate Assistant",
      "resp":[
        "Led the design and development of a full-stack student check-in feature for the myBMAC web app using React and Node.js.",
        "Created a real-time notification system that slashed student wait times and boosted operational efficiency by over 70%.",
        "Boosted application performance by 40% by optimizing backend Node.js services and refactoring data retrieval from the Oracle SQL database.",
        "Resolved complex technical and procedural API issues for thousands of active students and faculty members."
      ]
    },
    {
      "comp": "Capgemini (Financial Services)",
      "duration": "July 2021 - Aug 2023",
      "desgn": "Senior Software Engineer",
      "resp":[
        "Spearheaded the transition of legacy payment modules to a modern ReactJS front-end, boosting transaction processing speed by 30% and contributing to a CNY 2 million increase in annual transaction revenue.",
        "Architected a unified GraphQL data layer using AWS AppSync and Lambda to aggregate data from multiple legacy mainframe services, eliminating over-fetching and reducing client-side network requests by 60%.",
        "Mentored a team of 3 junior engineers on complex React/API integration patterns, driving knowledge transfer and contributing to team skill growth.",
        "Engineered a complete CI/CD pipeline using Docker and Jenkins, ensuring all deployments adhered to strict PCI DSS compliance standards for data encryption and security protocols."
      ]
    },
    {
      "comp": "UAS NMIMS",
      "duration": "Oct 2020 - June 2021",
      "desgn": "Web Development Lead",
      "resp":[
        "Led Agile development for competition-winning web applications, achieving top-5 placements globally in events hosted by IIT-Bombay.",
        "Developed real-time geolocation tracking UI interfaces utilizing the Mapbox API to visualize drone telemetry data during competitive deployments.",
        "Optimized the main UAS organization website, resulting in a 25% reduction in page load times and significantly improved user accessibility."
      ]
    },
    {
      "comp": "Unlock",
      "duration": "Sept 2019 - May 2020",
      "desgn": "Co-Founder / Lead Full Stack Engineer",
      "resp":[
        "Co-founded an early-stage tech startup, driving the technical vision and end-to-end product strategy to build a SaaS platform, directly contributing to the acquisition of INR 1.5 million in sponsorship.",
        "Led full-stack development utilizing the MERN stack (MongoDB, Express.js, React.js, Node.js), engineering backend REST APIs and responsive, data-driven frontend dashboards for real-time user management.",
        "Architected a hybrid database solution utilizing PostgreSQL with JSONB columns to support dynamic, user-defined inventory attributes, resolving early migration bottlenecks and improving complex query execution speeds by 35%.",
        "Orchestrated cloud infrastructure and CI/CD workflows using AWS and Docker, establishing containerized deployment pipelines that standardized release processes."
      ]
    }
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
