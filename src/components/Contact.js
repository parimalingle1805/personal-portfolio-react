import React, { useState } from 'react';
import styled from 'styled-components';
import { Fade } from 'react-awesome-reveal';
import {
  MailOutline,
  Phone,
  LocationOn,
  LinkedIn,
  GitHub,
  ContentCopy,
  CheckCircle,
} from '@mui/icons-material';
import XIcon from '@mui/icons-material/X';
import RedditIcon from '@mui/icons-material/Reddit';

const Contact = () => {
  window.scrollTo(0, 0);

  // State for the contact form
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // State to manage the "Copied!" tooltip
  const [copied, setCopied] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleCopy = (textToCopy, field) => {
    navigator.clipboard.writeText(textToCopy);
    setCopied(field);
    setTimeout(() => setCopied(''), 2000); // Hide tooltip after 2 seconds
  };

  const contactInfo = [
    {
      icon: <MailOutline />,
      text: 'parimal@cvejobs.com',
      copyable: true,
    },
    {
      icon: <Phone />,
      text: '+1 (401) 236-5205',
      copyable: true,
    },
    {
      icon: <LocationOn />,
      text: 'Atlanta, GA',
      copyable: false,
    },
  ];

  const socialLinks = [
    {
      icon: <GitHub />,
      label: 'GitHub',
      url: 'https://github.com/parimalingle1805',
      bgColor: '#333',
    },
    {
      icon: <LinkedIn />,
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/parimalingle/',
      bgColor: '#0077B5',
    },
    {
      icon: <RedditIcon />,
      label: 'Reddit',
      url: 'https://www.reddit.com/user/parimalingle1805/',
      bgColor: '#FF4500',
    },
    {
      icon: <XIcon />,
      label: 'X',
      url: 'https://x.com/IngleParimal',
      bgColor: '#000000',
    },
  ];

  return (
    <ContactPageContainer>
      <Fade direction="up" triggerOnce duration={800}>
        <ContactWrapper>
          <Header>
            <h1>Get In Touch</h1>
            <p>Have a question or want to work together? Leave your details and I'll get back to you as soon as possible.</p>
          </Header>

          <ContactGrid>
            {/* Left Side: Contact Form */}
            <Fade cascade damping={0.2} direction="left" triggerOnce>
              <ContactForm action="https://formspree.io/f/xvgrrvla" method="POST">
                <StyledInput
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <StyledInput
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <StyledTextarea
                  name="message"
                  placeholder="Your Message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></StyledTextarea>
                <SubmitButton type="submit">Send Message</SubmitButton>
              </ContactForm>
            </Fade>

            {/* Right Side: Direct Info & Socials */}
            <DirectContact>
              <Fade cascade damping={0.2} direction="right" triggerOnce>
                {contactInfo.map((info, index) => (
                  <ContactInfoRow key={index} onClick={() => info.copyable && handleCopy(info.text, info.text)}>
                    <IconWrapper>{info.icon}</IconWrapper>
                    <span>{info.text}</span>
                    {info.copyable && (
                      <CopyIconWrapper>
                        {copied === info.text ? <CheckCircle style={{ color: '#4caf50' }} /> : <ContentCopy />}
                      </CopyIconWrapper>
                    )}
                  </ContactInfoRow>
                ))}

                <SocialLinksContainer>
                  {socialLinks.map((social, index) => (
                    <SocialLink key={index} href={social.url} target="_blank" rel="noopener noreferrer" style={{'--bg-color': social.bgColor}}>
                      {social.icon}
                      {social.label}
                    </SocialLink>
                  ))}
                </SocialLinksContainer>
              </Fade>
            </DirectContact>
          </ContactGrid>
        </ContactWrapper>
      </Fade>
    </ContactPageContainer>
  );
};

export default Contact;

// --- STYLED COMPONENTS ---

const ContactPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2em 1em;
  min-height: 80vh;
`;

const ContactWrapper = styled.div`
  background-color: rgb(40, 40, 40);
  border-radius: 20px;
  padding: 2em 3em;
  width: 100%;
  max-width: 1100px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  color: white;

  @media (max-width: 768px) {
    padding: 2em 1.5em;
  }
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 2.5em;
  h1 {
    font-size: 2.5em;
    font-weight: 600;
    margin-bottom: 0.25em;
  }
  p {
    font-size: 1.1em;
    color: rgb(200, 200, 200);
    max-width: 600px;
    margin: 0 auto;
  }
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3em;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
    gap: 4em;
  }
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5em;
`;

const inputStyles = `
  background-color: rgb(55, 55, 55);
  border: 1px solid rgb(80, 80, 80);
  border-radius: 10px;
  padding: 1em;
  color: white;
  font-size: 1em;
  font-family: inherit;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &:focus {
    outline: none;
    border-color: #90caf9;
    box-shadow: 0 0 0 3px rgba(144, 202, 249, 0.3);
  }
`;

const StyledInput = styled.input`${inputStyles}`;
const StyledTextarea = styled.textarea`${inputStyles}
  resize: vertical;
`;

const SubmitButton = styled.button`
  background-color: #90caf9;
  color: rgb(20, 20, 20);
  border: none;
  border-radius: 10px;
  padding: 1em;
  font-size: 1.1em;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #a9d6fa;
    transform: translateY(-3px);
  }
`;

const DirectContact = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5em;
`;

const ContactInfoRow = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
  background-color: rgb(55, 55, 55);
  padding: 1em;
  border-radius: 10px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;

  span {
    font-size: 1.1em;
  }
  
  ${props => props.onClick && `
    cursor: pointer;
    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    }
  `}
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #90caf9;
`;

const CopyIconWrapper = styled.div`
  margin-left: auto;
  color: rgb(150, 150, 150);
`;

const SocialLinksContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1em;
  margin-top: 1em;
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75em;
  padding: 0.8em;
  border-radius: 10px;
  background-color: var(--bg-color);
  color: white;
  text-decoration: none;
  font-size: 1.1em;
  font-weight: 500;
  transition: transform 0.3s ease, filter 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    filter: brightness(1.2);
  }

  svg {
    font-size: 1.5em;
  }
`;