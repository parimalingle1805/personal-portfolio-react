import React from 'react';
import { Zoom } from 'react-awesome-reveal';
import { 
  Card,
  CardContent,
  Typography,
} from '@mui/material';
import { ProjectContainer, cardStyle, customTypo } from './Projects';
import { GridItem2 } from './Home';

const WorkExp = () => {
  window.scrollTo(0, 0);
  const workArr = [
  {
    "comp": "Bob Murphy Access Center (BMAC), CSULB",
    "duration": "August 2024 - Present",
    "desgn": "Graduate Student Assistant",
    "resp": [
      "Reduced student wait times by 10% by engineering an optimized process for exam request management, achieved through detailed data analysis and trend identification.",
      "Streamlined support workflows by systematically investigating and resolving complex technical and procedural issues for students and faculty."
    ]
  },
  {
    "comp": "AI Risk Management Market Research",
    "duration": "June 2024 - July 2024",
    "desgn": "Extern",
    "resp": [
      "Carried out detailed secondary research to pinpoint, scrutinize, and categorize common AI risks.",
      "Undertook extensive research on AI risks and organized them according to the AI risk framework.",
      "Developed a detailed case study that illustrates the potential business impacts of certain AI risks."
    ]
  },
  {
    "comp": "Capgemini India Pvt. Ltd.",
    "duration": "July 2021 - August 2023",
    "desgn": "Senior Software Engineer",
    "resp": [
      "Accelerated transaction processing speed by 15% by spearheading the migration of legacy payment modules to a modern React.js frontend architecture.",
      "Enhanced application scalability and security by implementing RESTful APIs and optimizing database interactions within an Agile/Scrum framework.",
      "Contributed to all stages of the SDLC, from requirements gathering and design to testing and deployment, ensuring high-quality software delivery."
    ]
  },
  {
    "comp": "UAS NMIMS",
    "duration": "Oct 2020 - June 2021",
    "desgn": "Full Stack Web Developer",
    "resp":[
      "Achieved multiple top-5 placements in national competitions by developing high-performance web applications using Agile methodologies.",
      "Improved user experience by optimizing the UAS website codebase, resulting in 20% faster page loading times."
    ]
  },
  {
    "comp": "Eamvey Careers",
    "duration": "July 2020 - Aug 2020",
    "desgn": "Full Stack Web Developer",
    "resp":[
      "Improved website quality and stability by performing comprehensive testing to identify, document, and report over 20 critical bugs.",
      "Enhanced code maintainability and team collaboration by designing and documenting the complete system architecture using UML diagrams."
    ]
  },
  {
    "comp": "Unlock (Startup)",
    "duration": "Sept 2019 - May 2020",
    "desgn": "Co - Founder / Android App Developer",
    "resp":[
      "Secured 15 lacs INR in sponsorship by co-founding the startup and developing a Python/Django web app integrated with Google AdSense for revenue generation.",
      "Improved overall application engagement by enhancing the Android app UI/UX and web app performance, achieving a combined 30% performance boost."
    ]
  }
];
  return (
    <ProjectContainer>
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
    </ProjectContainer>
  )
}

export default WorkExp;
