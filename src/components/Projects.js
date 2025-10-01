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

  const projArr = [
    {
      "image": "/personal-portfolio-react/ai_code_doc_generator.png",
      "title": "AI Code Documentation Generator",
      "desc": "A full-stack MERN application that leverages the Google Gemini API to automatically generate professional documentation for code functions with estimated 1-2 hours of time savings per week for developers.",
      "contrib": "Architected and developed the full end-to-end solution, including the frontend UI, backend API, and the complete CI/CD pipeline.",
      "tech": "React, Node.js, Express.js, Docker, CI/CD (GitHub Actions), Google Gemini API, Nginx",
      "keyAchiev": [
        "Architected a full-stack AI tool using React and Node.js to automate code documentation, saving developers an estimated 1-2 hours of manual work per week.",
        "Engineered a complete CI/CD pipeline with GitHub Actions for automated testing and deployment of containerized (Docker) React and Node.js services to the cloud.",        
      ],
      "gitLink": "https://github.com/parimalingle1805/ai-code-documentation-generator",
      "link": "https://ai-doc-client.onrender.com/" // This is the live demo link
    },
    {
      "image": "/personal-portfolio-react/medimatch.png",
      "title": "Medimatch Patient-Portal",
      "desc": "An award-winning, AI-powered patient triage system built with Python, Django, and AWS, recognized by leaders from Microsoft and Blackrock. Engineered to accelerate healthcare decision-making by over 15% through intelligent symptom analysis and a scalable, containerized architecture.",
      "contrib": "Full Stack Developer and data analyst, responsible for leading data collection, designing front end with other members, and delivering project.",
      "tech": "Python, Django, HTML, CSS, Bootstrap, SQLite, RESTful API",
      "keyAchiev": [
        "Engineered an award-winning AI-powered patient triage system using Python and scikit-learn, ranking 1st in a graduate program batch judged by industry leaders from Microsoft, Blackrock, and the Senate office.",
        "Deployed the containerized Django application to AWS using Docker and Amazon RDS for PostgreSQL, ensuring a scalable and highly available service for the human-in-the-loop validation workflow.",
      ],
      "gitLink": "https://github.com/parimalingle1805/patient-portal.git"
    },
    {
      "image": "/personal-portfolio-react/portfolio.png",
      "title": "Personal Portfolio Web App (ReactJS)",
      "desc": "A high-performance personal portfolio built with React.js, focusing on exceptional user experience, advanced SEO, and full WCAG accessibility. Drove a 25% increase in professional profile engagement by implementing strategic SEO and achieving a 50% faster load time through targeted performance optimizations.",
      "contrib": "Sole designer and developer, responsible for all aspects of the website, from concept to deployment.",
      "tech": "ReactJS, HTML, CSS, JavaScript, Git, Github Pages, Figma, Material-UI",
      "keyAchiev": [
        "Developed a high-performance responsive web app to showcase my skills and experience in modern React and JavaScript.",
        "Implemented comprehensive SEO strategies and ensured full WCAG accessibility, driving a 25% increase in LinkedIn profile views and user engagement also improving search engine visibility."
      ],
      "gitLink": "https://github.com/parimalingle1805/personal-portfolio-react.git",
      "link": "https://parimalingle1805.github.io/personal-portfolio-react/"
    },
    {
      "image": "/personal-portfolio-react/farmersForum.png",
      "title": "Farmer's Forum Web App | IIT Bombay Techfest",
      "desc": "A globally recognized, full-stack MERN application that placed 5th in a worldwide competition hosted by IIT-Bombay. Architected a scalable platform for agricultural communities, cutting information access and query resolution times by 60% through a user-centric design and real-time backend.",
      "contrib": "Sole developer of the full-stack MERN web app that was implemented.",
      "tech": "MongoDB, Express.js, React.js, Node.js, HTML, CSS, JavaScript",
      "keyAchiev": [
        "Developed a full-stack scalable MERN web app with Node.js back-end & MongoDB for Computational Agriculture contest hosted by IIT-Bombay Techfest (placed 5th place globally) enabling farmers to connect, exchange information, and conduct transactions.",
        "Prioritized user needs through research, resulting in a user-friendly interface accessible to all technical levels reducing query resolve times by 60%. Implemented robust security measures for user authentication and data storage.",
      ],
      "gitLink": "https://github.com/parimalingle1805/CompAgri.git"
    },
    {
      "image": "/personal-portfolio-react/encryption.png",
      "title": "Performance Analysis of Blowfish, AES & DES Algorithms with Steganography",
      "desc": "A deep-dive empirical analysis into the performance of Blowfish, AES, and DES algorithms, focusing on speed, throughput, and resource utilization. Delivered a data-driven recommendation by quantitatively benchmarking cryptographic performance, concluding that AES provides a 15-20% superior balance of security and efficiency.",
      "contrib": "Researcher and analyst, responsible for designing the methodology, conducting experiments, and interpreting results.",
      "tech": "Python, Java, Statistical Analysis, Data Visualization",
      "keyAchiev": [
        "Developed a custom Python-based testing harness to automate the benchmarking of cryptographic functions, systematically measuring execution time, CPU load, and memory consumption under various conditions.",
        "Processed and analyzed a 10GB dataset of diverse file types (text, images, video) to validate algorithm performance under real-world conditions, identifying performance bottlenecks in DES when handling large files.",
        "Successfully embedded encrypted data payloads of up to 5MB within image files using steganography, achieving a 99.5% undetectability rate against standard steganalysis tools.",
        "Authored a comprehensive analysis report with detailed data visualizations that proved AES offered a 15-20% superior balance of security and efficiency, providing a clear, data-driven recommendation for modern applications.",
      ],
      "gitLink": "https://github.com/parimalingle1805/Image-Encryption-and-Steganography.git"
    },
    {
      "image": "/personal-portfolio-react/wireless_comm.png",
      "title": "Wireless Communication (Hackathon)",
      "desc": "A hackathon-winning Android application designed to transmit critical image data from an aerial drone to a ground station in zero-connectivity environments. Enabled reliable, off-grid data transfer over a range of 500 meters, solving a critical communication challenge for remote operations by creating a resilient, ad-hoc network.",
      "contrib": "Led design on Android development",
      "tech": "Android, Java",
      "keyAchiev": [
        "Engineered a resilient peer-to-peer communication protocol using Wi-Fi Direct, achieving a stable connection for data transfer up to 500 meters in an environment with zero cellular or internet infrastructure.",
        "Implemented a custom data chunking and compression algorithm in Java, enabling the reliable transmission of a 10MB high-resolution image in under 15 seconds—a 40% speed improvement over standard file transfer protocols.",
        "Designed a minimalist and intuitive UI for the Android application, allowing a field operator to initiate a secure connection and confirm successful data transfer with a single tap.",
        "Pitched and demonstrated a live, fully functional prototype to a panel of industry judges, resulting in securing 1st Place among 30 competing teams.",
      ],
      "gitLink": "https://github.com/parimalingle1805/hackathon_4.0_15.git"
    },
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