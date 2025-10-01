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
    "duration": "Aug 2024 - May 2025",
    "desgn": "Graduate Student Assistant",
    "resp": [
      "Led the design and development of a full-stack student check-in feature for the myBMAC web app using React and Node.js, slashing student wait times and boosting operational efficiency by over 70%.",
      "Engineered a 40% performance boost by optimizing backend Node.js services and refactoring data retrieval logic from the core Oracle SQL database.",
    ]
  },
  {
    "comp": "National Research Group (NRG)",
    "duration": "June 2024 - July 2024",
    "desgn": "AI Risk Management Extern",
    "resp": [
      "Analyzed over 50 emerging AI risks within a defined governance framework, producing five detailed case studies on potential market impacts for enterprise clients.",
      "Delivered data-informed strategic recommendations projected to enhance client value and mitigate financial risks by 10-15% through proactive governance.",
    ]
  },
  {
    "comp": "Capgemini India Pvt. Ltd.",
    "duration": "July 2021 - August 2023",
    "desgn": "Senior Software Engineer",
    "resp": [
      "Spearheaded the migration of legacy payment modules to a modern ReactJS front-end, boosting transaction processing speed by 30% and contributing to a CNY 2 million increase in annual revenue.",
      "Architected a unified GraphQL data layer using AWS AppSync and Lambda, aggregating data from legacy mainframe services and reducing client-side network requests by 60%.",
      "Engineered a complete CI/CD pipeline using Docker and Jenkins, automating deployment of microservices and cutting release cycles from 2 weeks to 1 day.",
    ]
  },
  {
    "comp": "UAS NMIMS",
    "duration": "Oct 2020 - June 2021",
    "desgn": "Full Stack Web Developer",
    "resp":[
      "Architected and developed competition-winning web applications for multiple national engineering events, directly securing over $50,000 in corporate sponsorships.",
      "Refactored the primary UAS website codebase to boost front-end performance, resulting in a 25% reduction in page load times and a significantly improved user experience.",
    ]
  },
  {
    "comp": "Eamvey Careers",
    "duration": "July 2020 - Aug 2020",
    "desgn": "Full Stack Web Developer Intern",
    "resp":[
      "Engineered a comprehensive testing and QA framework that reduced critical bug report volume by 40% post-launch and significantly improved application stability.",
      "Authored the complete system architecture documentation, creating a single source of truth that improved team collaboration and cut new developer onboarding time by 30%."
    ]
  },
  {
    "comp": "Unlock (Startup)",
    "duration": "Sept 2019 - May 2020",
    "desgn": "Co - Founder / Android App Developer",
    "resp":[
      "Led the end-to-end product lifecycle as Co-Founder, building both a native Android app and a Python/Django web platform that secured INR 1.5 million in sponsorship.",
      "Drove a 50% enhancement in cross-platform performance and user engagement through targeted backend optimizations and a complete UI/UX overhaul."
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
