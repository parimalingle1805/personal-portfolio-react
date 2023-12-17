import React from 'react';
import { Zoom } from 'react-awesome-reveal';
import { Flare, RadioButtonChecked } from '@mui/icons-material';
import { ProjectContainer, Project } from './Projects';

const Certifications = () => {

  const certArr = [
    {
      "title": "Meta Front-End Developer Certificate",
      "doc": "24th Feb, 2023",
      "issued": "Coursera | Meta"
    },
    {
      "title": "Front End Libraries",
      "doc": "31st July, 2020",
      "issued": "Free Code Camp"
    },
    {
      "title": "Modern Javascript for ReactJs",
      "doc": "29th July, 2020",
      "issued": "Udemy"
    },
    {
      "title": "Fundamentals of Digital Marketing",
      "doc": "8th July, 2020",
      "issued": "Google Digital Garage | The Open University"
    },
    {
      "title": "Game Of Codes",
      "info": "Finished in top 400 in the national level Hackathon",
      "issued": "Bridgingo"
    },
    {
      "title": "Javascript Algorithms and Data Structures",
      "doc": "12 June, 2020",
      "issued": "Free Code Camp"
    },
    {
      "title": "Python for DSA",
      "doc": "28 May, 2020",
      "issued": "Udemy"
    },
    {
      "title": "Responsive Web Design",
      "doc": "10 May, 2020",
      "issued": "Free Code Camp"
    },
    {
      "title": "Google Kickstart",
      "info": "Ranked 3547th worldwide in the Kickstart coding Contest",
      "issued": "Google"
    },
  ]
  return (
    <ProjectContainer>
      <Zoom>
        <h1 className='heading'>
          <Flare style={{"marginRight": "1em"}} />
            MY CERTIFICATIONS
          <Flare style={{"marginLeft": "1em"}} />
        </h1>
      </Zoom>
      <zoom>

      </zoom>
      {certArr && certArr.map((cert, index) => (
        <Zoom key={index}>
          <Project>
            <p className='expTitle'>
              <RadioButtonChecked style={{"marginRight":"0.8em"}}/>
              {cert.title}
            </p>
            <ul>
              <li>
                  {cert.doc && <p className='expText'> Date of completion: {cert.doc}</p>}
                  {cert.info && <p className='expText'> Information: {cert.info}</p>}
              </li>
              <li>
                <p className='expText'>
                  Issued / Authorised by: {cert.issued}
                </p>
              </li>
            </ul>
          </Project>
        </Zoom>
      ))}
    </ProjectContainer>
  )
}

export default Certifications;