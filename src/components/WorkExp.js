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
      "desgn": "Graduate Student Assistant (GSA)",
      "resp": [
        "Analyze exam request data, identifying trends and patterns to improve resource allocation and predict future demand, reducing student wait times by 10% increasing efficiency.",
        "Effectively resolve student/faculty inquiries, showcasing strong communication and management skills."
      ]
    },
    {
      "comp": "Extern",
      "duration": "June 2024 - July 2024",
      "desgn": "AI Risk Management Market Research Extern",
      "resp": [
        "Carried out detailed secondary research to pinpoint, scrutinize, and categorize common AI risks.",
        "Undertook extensive research on AI risks and organized them according to the AI risk framework.",
        "Developed a detailed case study that illustrates the potential business impacts of certain AI risks.",
        "Provided strategic insights and practical suggestions to clients for managing and mitigating AI risks."
      ]
    },
    {
      "comp": "Capgemini India Pvt. Ltd.",
      "duration": "July 2021 - August 2023",
      "desgn": "Senior Software Engineer",
      "resp": [
        "Spearheaded the transition of legacy payment processing modules to a modern front-end architecture using ReactJS, which improved transaction processing speed by 15% and enhanced code maintainability.",
        "Focused on building scalable, secure, and performant web applications, implementing RESTful APIs, optimizing database interactions, and ensuring seamless user experiences.",
        "Collaborated effectively within Agile teams, participating in all stages of the SDLC, from requirements gathering and design to testing, deployment, and maintenance."
      ]
    },
    {
      "comp": "UAS NMIMS",
      "duration": "Oct 2020 - June 2021",
      "desgn": "Full Stack Web Developer",
      "resp":[
        "Used Agile methodology and problem-solving skills to develop web apps and ranked within the top 5 in many competitions.",
        "Optimized the UAS website code to increase performance and decrease its loading time by 20%."
      ]
    },
    {
      "comp": "Eamvey Careers",
      "duration": "July 2020 - Aug 2020",
      "desgn": "Full Stack Web Developer",
      "resp":[
        "Performed website testing, identifying and reporting over 20 bugs, leading to improved website quality.",
        "Designed and documented system architecture using UML diagrams, enhancing code maintainability and team collaboration.",
        "Implemented front-end features and UI elements using HTML, CSS, and JavaScript, contributing to improved website user experience."
      ]
    },
    {
      "comp": "Unlock (Startup)",
      "duration": "Sept 2019 - May 2020",
      "desgn": "Co - Founder / Android App Developer",
      "resp":[
        "Co-founded Unlock and developed a Python/Django web app integrated with Google AdSense, generating revenue and securing a 15 lacs INR sponsorship from IEDC.",
        "Improved Android app UI/UX and web app performance, resulting in a combined 30% enhancement."
      ]
    },
  ]
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
