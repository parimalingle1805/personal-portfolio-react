import React from 'react';
import { Zoom } from 'react-awesome-reveal';
import { Flare, RadioButtonChecked } from '@mui/icons-material';
import { ProjectContainer, Project } from './Projects';

const WorkExp = () => {

  const workArr = [
    {
      "comp": "Capgemini India Pvt. Ltd.",
      "duration": "July 2021 - August 2023",
      "desgn": "Senior Software Engineer",
      "resp": [
        "Working with Job Control Language and COBOL language.",
        "Triggering and testing UAT and final regression batches.",
        "Troubleshooting errors in production batches.",
        "Supporting UAT/SKA and production batches."
      ]
    },
    {
      "comp": "UAS NMIMS",
      "duration": "Oct 2020 - June 2021",
      "desgn": "Full Stack Web Developer",
      "resp":[
        "Plan and develop websites and web apps as per the requirements.",
        "Editing and maintaining the UAS NMIMS website."
      ]
    },
    {
      "comp": "Eamvey Careers",
      "duration": "July 2020 - Aug 2020",
      "desgn": "Full Stack Web Developer Intern",
      "resp":[
        "Testing Websites.",
        "Making UML (Unified Modeling Language) diagram.",
        "Developing websites using HTML, CSS and JS."
      ]
    },
  ]
  return (
    <ProjectContainer>
      <Zoom>
        <h1 className='heading'>
          <Flare style={{"marginRight": "1em"}} />
            MY EXPERIENCE
          <Flare style={{"marginLeft": "1em"}} />
        </h1>
      </Zoom>
      <zoom>

      </zoom>
      {workArr && workArr.map((work, index) => (
        <Zoom key={index}>
          <Project>
            <p className='expTitle'>
              <RadioButtonChecked style={{"marginRight":"0.8em"}}/>
              {work.comp}
            </p>
            <ul>
              <li>
                <p className='expText'>
                  Duration: {work.duration}
                </p>
              </li>
              <li>
                <p className='expText'>
                  Designation: {work.desgn}
                </p>
              </li>
              <li>
                <p className='expText'>
                  Responsibilities:
                  <ol>
                    {work.resp && work.resp.map((resps, index) => (
                      <li>{resps}</li>
                    ))}
                  </ol>
                </p>
              </li>
            </ul>
          </Project>
        </Zoom>
      ))}
    </ProjectContainer>
  )
}

export default WorkExp;
