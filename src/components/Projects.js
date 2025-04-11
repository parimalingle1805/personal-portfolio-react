import React from 'react';
import { Container, GridItem2 } from './Home';
import styled from 'styled-components';
import { 
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button
} from '@mui/material';
import { Zoom } from 'react-awesome-reveal';

let cardStyle = { 
  maxWidth: "100%",
  borderRadius: "20px", 
  padding: "0.5em",
  backgroundColor: "rgb(40, 40, 40)",
  boxShadow: 0,
  color: "white",
  justifyContent: "start",
}
let customTypo = {
  color: "white",
  py: 1,
  textAlign: "start"
}

const Projects = () => {
  window.scrollTo(0, 0);
  const projArr = [
    {
      "image": "/personal-portfolio-react/medimatch.png",
      "title": "Medimatch Patient-Portal",
      "desc": "A full-stack Python-Django web application enabling patients to securely manage their healthcare needs, including symptom input, appointment scheduling, and prescription information.",
      "contrib": "Full Stack Developer and data analyst, responsible for leading data collection, designing front end with other members, and delivering project.",
      "tech": "Python, Django, HTML, CSS, Bootstrap, SQLite, RESTful API",
      "keyAchiev": [
        "Developed a full-stack Python-Django web application enabling patients to securely manage their healthcare needs, including symptom input, appointment scheduling, and prescription information.",
        "Implemented a RESTful API to integrate the front-end with the database, optimizing data retrieval process by 10%.",
        "Implemented algorithms to analyze patient symptoms and provide recommendations, contributing to a more efficient and data-driven approach to healthcare and resulted in estimated time efficiency increase by 15-20%."
      ],
      "gitLink": "https://github.com/parimalingle1805/patient-portal.git"
    },
    {
      "image": "/personal-portfolio-react/portfolio.png",
      "title": "Personal Portfolio Web App (ReactJS)",
      "desc": "A responsive and interactive personal portfolio website built with ReactJS to showcase my front-end development and UX design skills",
      "contrib": "Sole designer and developer, responsible for all aspects of the website, from concept to deployment.",
      "tech": "ReactJS, HTML, CSS, JavaScript, Git, Github Pages, Figma, Material-UI",
      "keyAchiev": [
        "Conducted User research to prioritize user needs, implemented a user-friendly interface reducing query resolve times by 60% improving overall engagement and collaboration for IIT bombay",
        "Secured 5th place globally in the contest, showcasing innovative thinking, problem-solving,the app's scalability and user-friendly interface."
      ],
      "gitLink": "https://github.com/parimalingle1805/personal-portfolio-react.git"
    },
    {
      "image": "/personal-portfolio-react/farmersForum.png",
      "title": "Farmer's Forum Web App | IIT Bombay Techfest",
      "desc": "A full-stack scalable MERN web app with Node.js back-end created for a Computational Agriculture contest, facilitating a more reliable connection between farmers.",
      "contrib": "Sole developer of the full-stack MERN web app that was implemented.",
      "tech": "MongoDB, Express.js, React.js, Node.js, HTML, CSS, JavaScript",
      "keyAchiev": [
        "Conducted User research to prioritize user needs, implemented a user-friendly interface reducing query resolve times by 60% improving overall engagement and collaboration for IIT bombay",
        "Secured 5th place globally in the contest, showcasing innovative thinking, problem-solving,the app's scalability and user-friendly interface."
      ],
      "gitLink": "https://github.com/parimalingle1805/CompAgri.git"
    },
    {
      "image": "/personal-portfolio-react/encryption.png",
      "title": "Performance Analysis of Blowfish, AES & DES Algorithms with Steganography",
      "desc": "A comparative analysis of the performance characteristics (encryption/decryption times and other parameters) of three widely used encryption algorithms (Blowfish, AES, and DES) using steganography.",
      "contrib": "Researcher and analyst, responsible for designing the methodology, conducting experiments, and interpreting results.",
      "tech": "Python, Java, Statistical Analysis, Data Visualization",
      "keyAchiev": [
        "Designed and developed a RESTful API to efficiently deliver data insights and maintain scalability, all while enhancing UI functions.",
        "Improved time efficiency by 15-20% by creating low/hi-fi mockups using Figma that was approved by all stakeholders."
      ],
      "gitLink": "https://github.com/parimalingle1805/Image-Encryption-and-Steganography.git"
    },
    {
      "image": "/personal-portfolio-react/wireless_comm.png",
      "title": "Wireless Communication (Hackathon)",
      "desc": "An Android app that can transmit photos from aerial drone to ground station without an active internet connection, increasing data transmission reliability.",
      "contrib": "Led design on Android development",
      "tech": "Android, Java",
      "keyAchiev": [
        "Reduced need for active internet connection, increasing reliability by 20%.",
        "Secured 1st place in the Hackathon."
      ],
      "gitLink": "https://github.com/parimalingle1805/hackathon_4.0_15.git"
    },
    
  ];
  return (
    <ProjectContainer>
      {projArr && projArr.map((proj, index) => (
        <GridItem2 style={{justifyContent: "space-between"}} key={index}>
          <Zoom>
              <Card sx={cardStyle}>
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
                  <Typography gutterBottom variant="h6">
                    {proj.desc}
                  </Typography>
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
                </CardContent>
                <CardActions>
                  <Button href={proj.gitLink} size="small" target='_blank'>Visit Github Repository</Button>
                </CardActions>
              </Card>
          </Zoom>
        </GridItem2>
      ))}
    </ProjectContainer>
  )
}

export default Projects;

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