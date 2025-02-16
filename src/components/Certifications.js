import React from 'react';
import { Zoom } from 'react-awesome-reveal';
import { 
  Card,
  CardContent,
  Typography,
  CardActions,
  Button
} from '@mui/material';
import { ProjectContainer, cardStyle, customTypo } from './Projects';
import { GridItem2 } from './Home';

const Certifications = () => {
  window.scrollTo(0, 0);
  const certArr = [
    {
      "title": "Back End Development and APIs",
      "doc": "13 April, 2024",
      "description": "Enhanced my back end development by building projects and add to my MERN stack skillset.",
      "skills": "JavaScript, APIs, Back-end Development",
      "issued": "Udemy",
      "link": "https://www.udemy.com/certificate/UC-c1effc75-970d-44ed-9067-40e72d5c36ab/"
    },
    {
      "title": "Meta Front-End Developer Certificate",
      "doc": "24th Feb, 2023",
      "description": "Completed Meta's comprehensive front-end development program, mastering React, JavaScript, and modern web development techniques.",
      "skills": "React, JavaScript, HTML, CSS, Front-End Development, Version Control, Git",
      "issued": "Coursera | Meta",
      "link": "https://www.credly.com/badges/d2daa752-44aa-471d-a218-53665954b0b9/print"
    },
    {
      "title": "JavaScript Algorithms and Data Structures",
      "doc": "12 June, 2020",
      "description": "Developed a strong foundation in JavaScript fundamentals and data structures.",
      "skills": "JavaScript, Data Structures, Algorithms, Problem-Solving",
      "issued": "Free Code Camp",
      "link": "https://www.freecodecamp.org/certification/parimalingle1805/javascriptalgorithms-and-data-structures"
    },
    {
      "title": "Python for DSA",
      "doc": "28 May, 2020",
      "description": "Enhanced problem-solving skills by studying data design with Python.",
      "skills": "Python, Data Structures, Algorithms",
      "issued": "Udemy",
      "link": "https://www.udemy.com/certificate/UC-c1effc75-970d-44ed-9067-40e72d5c36ab/"
    }
   ]
  return (
    <ProjectContainer>
    {certArr && certArr.map((cert, index) => (
      <GridItem2 style={{justifyContent: "space-between"}} key={index}>
        <Zoom>
            <Card sx={cardStyle}>
              <CardContent>
                <Typography gutterBottom variant="h4" component="div" style={{textAlign: "start"}}>
                {cert.title}
                </Typography>
                <Typography variant="body1" sx={customTypo}>
                  Issued By: {cert.issued}
                </Typography>
                <Typography variant="body1" sx={customTypo}>
                  Date of Completion: {cert.doc}
                </Typography>
                <Typography variant="body1" sx={customTypo}>
                  Description: {cert.description}
                </Typography>
                <Typography variant="body1" sx={customTypo}>
                  Skills Acquired: {cert.skills}
                </Typography>
              </CardContent>
              <CardActions>
                  <Button href={cert.link} size="small" target='_blank'>Verification Link</Button>
                </CardActions>
            </Card>
        </Zoom>
      </GridItem2>
    ))}
  </ProjectContainer>
  )
}

export default Certifications;