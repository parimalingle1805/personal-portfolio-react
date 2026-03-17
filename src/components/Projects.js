import React, { useState } from 'react';
import { Container, GridItem2 } from './Home';
import styled from 'styled-components';
import { 
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
  Box // 1. Import Box for better layout control
} from '@mui/material';
import { Zoom } from 'react-awesome-reveal';

// No changes to cardStyle, it's already great for the container
let cardStyle = { 
  maxWidth: "100%",
  borderRadius: "20px", 
  padding: "0.5em",
  backgroundColor: "rgb(40, 40, 40)",
  boxShadow: 0,
  color: "white",
  display: 'flex',
  flexDirection: 'column',
  height: '100%' // Ensure cards in the same row are the same height
}
let customTypo = {
  color: "white",
  py: 1,
  textAlign: "start"
}

const Projects = () => {
  const [expanded, setExpanded] = useState({});

  const handleToggleReadMore = (index) => {
    setExpanded(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const projArr =[
    {
      "image": "/personal-portfolio-react/ai_code_doc_generator.png",
      "title": "AI Code Documentation Generator",
      "desc": "A deterministic, multi-agent AI platform built with Google Genkit and Gemini 3 Flash. Features an event-driven React UI and mathematically verified AST hashing to guarantee zero code hallucination, boosting team velocity by 15%.",
      "contrib": "Architected the complete end-to-end system, from the strict TypeScript ADK orchestration pipeline to the real-time SSE frontend and containerized CI/CD deployment.",
      "tech": "TypeScript, React, Node.js, Google Genkit (ADK), Gemini 3 Flash, Tree-sitter (AST), Zod, Server-Sent Events (SSE), Docker, GitHub Actions",
      "keyAchiev":[
        "Architected a strict TypeScript, multi-agent pipeline using Google Genkit and Tree-sitter AST parsing to automate technical writing, boosting engineering team velocity by 15%.",
        "Engineered cryptographic logic-integrity checks via AST hashing to mathematically guarantee zero code alteration, eliminating 100% of AI-introduced logic regressions.",
        "Developed a real-time React frontend utilizing Server-Sent Events (SSE) to stream agent execution states, and implemented a persistent localStorage quota gate to ensure zero UI downtime."
      ],
      "gitLink": "https://github.com/parimalingle1805/ai-code-documentation-generator",
      "link": "https://ai-doc-client.onrender.com/"
    },
    {
      "image": "/personal-portfolio-react/medimatch.png",
      "title": "Medimatch Patient-Portal",
      "desc": "An award-winning, AI-powered patient triage system built with Python, Django, and AWS. Engineered to accelerate healthcare decision-making by over 15% through intelligent symptom analysis and a scalable, containerized architecture.",
      "contrib": "Lead Full Stack & Machine Learning Engineer, responsible for designing the predictive algorithms, database schemas, and robust AWS cloud deployment.",
      "tech": "Python, Django, Scikit-Learn, AWS (RDS, EC2), Docker, PostgreSQL, REST APIs",
      "keyAchiev":[
        "Engineered an award-winning AI-powered patient triage system using Python and scikit-learn, ranking 1st in a graduate program batch judged by industry leaders from Microsoft, Blackrock, and the Senate office.",
        "Deployed the containerized Django application to AWS using Docker and Amazon RDS for PostgreSQL, ensuring a scalable and highly available service for the human-in-the-loop validation workflow."
      ],
      "gitLink": "https://github.com/parimalingle1805/patient-portal.git"
    },
    {
      "image": "/personal-portfolio-react/portfolio.png",
      "title": "Personal Portfolio Web App (ReactJS)",
      "desc": "A high-performance personal portfolio built with modern React.js, focusing on exceptional user experience, advanced SEO, and full WCAG accessibility to drive professional engagement.",
      "contrib": "Sole Frontend Engineer, managing all aspects of UI/UX design, accessibility compliance, performance optimization, and CI/CD deployment.",
      "tech": "React.js, Vite, HTML5, CSS3, Material-UI, Git, GitHub Pages",
      "keyAchiev":[
        "Engineered a high-performance responsive web application to showcase technical capabilities, utilizing modern React hooks and functional components.",
        "Implemented comprehensive SEO strategies and ensured full WCAG accessibility, driving a 25% increase in LinkedIn profile views and significantly improving search engine visibility."
      ],
      "gitLink": "https://github.com/parimalingle1805/personal-portfolio-react.git",
      "link": "https://parimalingle1805.github.io/personal-portfolio-react/"
    },
    {
      "image": "/personal-portfolio-react/farmersForum.png",
      "title": "Farmer's Forum Web App | IIT Bombay Techfest",
      "desc": "A globally recognized, full-stack MERN application that placed 5th in a worldwide competition hosted by IIT-Bombay. Architected a scalable platform for agricultural communities, cutting query resolution times by 60%.",
      "contrib": "Lead Full Stack Developer, architecting the real-time backend services and the responsive user interface.",
      "tech": "MongoDB, Express.js, React.js, Node.js, REST APIs, JSON Web Tokens (JWT)",
      "keyAchiev":[
        "Developed a scalable MERN web application for a Computational Agriculture contest hosted by IIT-Bombay Techfest (placed 5th globally), enabling farmers to connect and conduct secure transactions.",
        "Applied Advanced Data Structures and Algorithms to optimize search and database query logic, reducing query resolve times by 60% for thousands of concurrent users.",
        "Prioritized user needs through UX research, resulting in an accessible interface for all technical levels while implementing robust security measures for data storage."
      ],
      "gitLink": "https://github.com/parimalingle1805/CompAgri.git"
    },
    {
      "image": "/personal-portfolio-react/encryption.png",
      "title": "Performance Analysis of AES, DES & Blowfish",
      "desc": "A deep-dive empirical analysis into the performance of cryptographic algorithms, focusing on speed, throughput, and resource utilization, paired with advanced steganography techniques.",
      "contrib": "Lead Security Researcher, responsible for designing the testing methodology, conducting algorithmic experiments, and analyzing the performance datasets.",
      "tech": "Python, Java, Cryptography, Statistical Analysis, Data Visualization",
      "keyAchiev":[
        "Developed a custom Python-based testing harness to automate the benchmarking of cryptographic functions, systematically measuring execution time, CPU load, and memory consumption.",
        "Processed and analyzed a 10GB dataset of diverse file types to validate algorithm performance under real-world conditions, identifying critical performance bottlenecks in DES.",
        "Successfully embedded encrypted data payloads of up to 5MB within image files using steganography, achieving a 99.5% undetectability rate against standard steganalysis tools.",
        "Authored a comprehensive analysis report with detailed visualizations proving AES offered a 15-20% superior balance of security and efficiency."
      ],
      "gitLink": "https://github.com/parimalingle1805/Image-Encryption-and-Steganography.git"
    },
    {
      "image": "/personal-portfolio-react/wireless_comm.png",
      "title": "Wireless Communication (Hackathon)",
      "desc": "A hackathon-winning Android application designed to transmit critical image data from an aerial drone to a ground station in zero-connectivity environments, creating a resilient ad-hoc network.",
      "contrib": "Lead Android & Network Engineer, responsible for UI architecture and low-level peer-to-peer protocol implementation.",
      "tech": "Android SDK, Java, Wi-Fi Direct, TCP/IP",
      "keyAchiev":[
        "Engineered a resilient peer-to-peer communication protocol using Wi-Fi Direct, achieving a stable connection for data transfer up to 500 meters in an environment with zero cellular infrastructure.",
        "Implemented a custom data chunking and compression algorithm in Java, enabling the reliable transmission of a 10MB high-resolution image in under 15 seconds—a 40% speed improvement.",
        "Pitched and demonstrated a live, fully functional prototype to a panel of industry judges, resulting in securing 1st Place among 30 competing teams."
      ],
      "gitLink": "https://github.com/parimalingle1805/hackathon_4.0_15.git"
    }
  ];

  const CHAR_LIMIT = 120; // Shortened the limit slightly for a cleaner look

  return (
    <ProjectContainer>
      {projArr && projArr.map((proj, index) => {
        const isExpanded = !!expanded[index]; // Use !! to ensure it's a boolean
        const needsTruncation = proj.desc.length > CHAR_LIMIT;
        
        const displayText = isExpanded || !needsTruncation 
          ? proj.desc 
          : `${proj.desc.substring(0, CHAR_LIMIT)}...`;

        return (
          <GridItem2 key={index}>
            <Zoom>
                <Card sx={cardStyle}>
                  {/* Use Box to make the content area grow, pushing actions to the bottom */}
                  <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                    <CardMedia
                      style={{ margin: '1em', borderRadius: "20px" }}
                      sx={{ height: 300 }}
                      image={proj.image}
                      title="project image"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h4" component="div">
                        {proj.title}
                      </Typography>
                      
                      <Typography gutterBottom variant="h6" component="p">
                        {displayText}
                      </Typography>

                      {/* Conditionally render the rest of the content */}
                      {isExpanded && (
                        <>
                          <Typography variant="body1" sx={customTypo}>
                            My Role: <i>{proj.contrib}</i>
                          </Typography>
                          <Typography variant="body1" sx={customTypo}>
                            Technologies Used: {proj.tech}
                          </Typography>
                          <Typography variant="body1" sx={customTypo}>
                            Key Achievements:
                            <ul>
                              {proj.keyAchiev && proj.keyAchiev.map((achiev, index) => (
                                <li key={index}>{achiev}</li>
                              ))}
                            </ul>
                          </Typography>
                        </>
                      )}
                    </CardContent>
                  </Box>
                  
                  {/* 2. Group all actions together in CardActions for better alignment */}
                  <CardActions sx={{ justifyContent: 'space-between', padding: '0 16px 8px' }}>
                    {/* 3. Make the Github button more visible */}
                    <Button 
                      variant="outlined" 
                      href={proj.gitLink} 
                      size="small" 
                      target='_blank'
                    >
                      Visit Github
                    </Button>
                    {proj.link &&
                      <Button
                        variant="outlined" 
                        href={proj.link} 
                        size="small" 
                        target='_blank'
                      >
                        Live Demo
                      </Button>
                    }

                    {/* 4. Make the Read More button more visible and clear */}
                    {needsTruncation && (
                      <Button 
                        size="small" 
                        onClick={() => handleToggleReadMore(index)}
                      >
                        {isExpanded ? 'Read Less' : 'Read More'}
                      </Button>
                    )}
                  </CardActions>
                </Card>
            </Zoom>
          </GridItem2>
        )
      })}
    </ProjectContainer>
  )
}

export default Projects;

// Your responsive grid container remains the same
const ProjectContainer = styled(Container)`
  grid-template-columns: 30vw 30vw 30vw;
  
  .heading {
    align-self: center;
    font-size: 3em;

    @media(max-width: 512px) {
      font-size: 1.5em;
    }
  }

  @media(max-width: 1440px){
    grid-template-columns: 45vw 45vw;
  }

  @media(max-width: 1080px){
    grid-template-columns: 95vw;
  }
`;

export {
  ProjectContainer,
  cardStyle,
  customTypo
}