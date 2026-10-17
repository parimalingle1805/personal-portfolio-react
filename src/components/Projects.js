import React, { useState } from 'react';
import styled from 'styled-components';

const projArr = [
  {
    image: '/personal-portfolio-react/ai_content_scanner.png',
    title: 'AI Content Provenance Scanner',
    status: 'PRODUCTION // C2PA / SYNTHID',
    desc: 'A secure full stack web application architected to cryptographically detect synthetic media and deepfakes via C2PA and SynthID standards, reducing manual verification time to under 5 seconds.',
    contrib: 'Architected a polyglot cloud environment, integrating a React frontend, a Node Express API, and Dockerized Python microservices securely routed through an AWS CloudFront reverse proxy.',
    tech: ['React.js', 'Node.js', 'Express.js', 'PostgreSQL', 'MongoDB', 'Python', 'Docker', 'AWS (CloudFront, EC2, S3, WAF)', 'Tailwind CSS'],
    keyAchiev: [
      'Deployed AWS CloudFront as a global Content Delivery Network and reverse proxy, securing the frontend with automated HTTPS and eliminating CORS errors.',
      'Engineered a polyglot backend by isolating heavy Python machine learning libraries within Docker containers, preventing main thread blocking on Express.',
      'Resolved Out of Memory kernel panics on constrained AWS EC2 infrastructure by repartitioning Linux file system with a 2GB virtual swap file.',
      'Configured AWS Web Application Firewall in monitor mode to prevent false positive payload rejections of raw binary image streams.'
    ],
    gitLink: 'https://github.com/parimalingle1805/ai-content-detector',
    link: 'https://d1xdwf1wrjelil.cloudfront.net'
  },
  {
    image: '/personal-portfolio-react/ai_code_doc_generator.png',
    title: 'AI Code Documentation Generator',
    status: 'PRODUCTION // MULTI-AGENT ADK',
    desc: 'A deterministic, multi-agent AI platform built with Google Genkit and Gemini 3 Flash. Features an event-driven React UI and mathematically verified AST hashing to guarantee zero code hallucination, boosting team velocity by 15%.',
    contrib: 'Architected the complete end-to-end system, from the strict TypeScript ADK orchestration pipeline to the real-time SSE frontend and containerized CI/CD deployment.',
    tech: ['TypeScript', 'React', 'Node.js', 'Google Genkit (ADK)', 'Gemini 3 Flash', 'Tree-sitter (AST)', 'Zod', 'SSE', 'Docker', 'GitHub Actions'],
    keyAchiev: [
      'Architected a strict TypeScript, multi-agent pipeline using Google Genkit and Tree-sitter AST parsing to automate technical writing.',
      'Engineered cryptographic logic-integrity checks via AST hashing to mathematically guarantee zero code alteration, eliminating AI-introduced logic regressions.',
      'Developed a real-time React frontend utilizing Server-Sent Events (SSE) to stream agent execution states with persistent localStorage quota gating.'
    ],
    gitLink: 'https://github.com/parimalingle1805/ai-code-documentation-generator',
    link: 'https://ai-doc-client.onrender.com/'
  },
  {
    image: '/personal-portfolio-react/medimatch.png',
    title: 'MediMatch Patient-Portal',
    status: '1ST PLACE AWARD // MICROSERVICES',
    desc: 'An award-winning, ML-driven patient triage system. Engineered to accelerate healthcare decision-making by over 15% through a scikit-learn urgency classification model and a deterministic symptom-to-medicine PostgreSQL mapping engine, deployed across a scalable microservices architecture.',
    contrib: 'Lead Full Stack & Machine Learning Engineer, responsible for designing the classification algorithms, complex relational database schemas, and robust AWS cloud deployment.',
    tech: ['Node.js', 'React', 'Python', 'FastAPI', 'Scikit-Learn', 'AWS (RDS, EC2)', 'Docker', 'PostgreSQL'],
    keyAchiev: [
      'Architected an award-winning ML patient triage platform ranking 1st in a graduate cohort judged by industry leaders from Microsoft, Blackrock, and the Senate office.',
      'Isolated the scikit-learn binary classification model within a containerized Python FastAPI service to prevent blocking the primary Node.js API gateway.',
      'Engineered a critical human-in-the-loop PostgreSQL database state machine, strictly enforcing doctor authorization workflows for automated prescriptions.'
    ],
    gitLink: 'https://github.com/parimalingle1805/patient-portal.git'
  },
  {
    image: '/personal-portfolio-react/portfolio.png',
    title: 'Personal Portfolio Web App (Terminal UI)',
    status: 'PRODUCTION // CLAUDE CODE HYBRID',
    desc: 'A modern Hybrid Terminal UI combining a Claude Code CLI shell with a Linux Fastfetch hero diagnostic block, WCAG accessibility, and responsive dual keyboard/mouse navigation.',
    contrib: 'Sole Full Stack Engineer, responsible for UX architecture, terminal component design, responsive styling, and GitHub Pages deployment.',
    tech: ['React.js', 'styled-components', 'JavaScript', 'HTML5', 'CSS3', 'Git', 'GitHub Pages'],
    keyAchiev: [
      'Engineered an interactive hybrid CLI terminal interface featuring real-time slash command execution and Linux Fastfetch system diagnostics.',
      'Maintained 100% WCAG accessibility and keyboard-first developer workflows, boosting recruiter engagement.'
    ],
    gitLink: 'https://github.com/parimalingle1805/personal-portfolio-react.git',
    link: 'https://parimalingle1805.github.io/personal-portfolio-react/'
  },
  {
    image: '/personal-portfolio-react/farmersForum.png',
    title: "Farmer's Forum | IIT Bombay Techfest",
    status: '5TH GLOBALLY // IIT BOMBAY',
    desc: 'A globally recognized, full-stack MERN application that placed 5th in a worldwide competition hosted by IIT-Bombay. Architected a scalable platform for agricultural communities, cutting query resolution times by 60%.',
    contrib: 'Lead Full Stack Developer, architecting the real-time backend services and the responsive user interface.',
    tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'REST APIs', 'JWT'],
    keyAchiev: [
      'Developed a scalable MERN web application for Computational Agriculture contest hosted by IIT-Bombay Techfest (placed 5th globally).',
      'Applied Advanced Data Structures and Algorithms to optimize search and database query logic, reducing query resolve times by 60%.',
      'Prioritized user needs through UX research, resulting in an accessible interface for all technical levels.'
    ],
    gitLink: 'https://github.com/parimalingle1805/CompAgri.git'
  },
  {
    image: '/personal-portfolio-react/encryption.png',
    title: 'Performance Analysis of AES, DES & Blowfish',
    status: 'RESEARCH // CRYPTOGRAPHY & STEGO',
    desc: 'A deep-dive empirical analysis into the performance of cryptographic algorithms, focusing on speed, throughput, and resource utilization, paired with advanced steganography techniques.',
    contrib: 'Lead Security Researcher, responsible for designing the testing methodology, conducting algorithmic experiments, and analyzing the performance datasets.',
    tech: ['Python', 'Java', 'Cryptography', 'Statistical Analysis', 'Data Visualization'],
    keyAchiev: [
      'Developed a custom Python-based testing harness to automate the benchmarking of cryptographic functions.',
      'Processed and analyzed a 10GB dataset of diverse file types to validate algorithm performance under real-world conditions.',
      'Successfully embedded encrypted payloads of up to 5MB within image files using steganography with a 99.5% undetectability rate.'
    ],
    gitLink: 'https://github.com/parimalingle1805/Image-Encryption-and-Steganography.git'
  },
  {
    image: '/personal-portfolio-react/wireless_comm.png',
    title: 'Wireless Communication (Hackathon)',
    status: '1ST PLACE // AD-HOC NETWORKING',
    desc: 'A hackathon-winning Android application designed to transmit critical image data from an aerial drone to a ground station in zero-connectivity environments, creating a resilient ad-hoc network.',
    contrib: 'Lead Android & Network Engineer, responsible for UI architecture and low-level peer-to-peer protocol implementation.',
    tech: ['Android SDK', 'Java', 'Wi-Fi Direct', 'TCP/IP'],
    keyAchiev: [
      'Engineered a resilient peer-to-peer communication protocol using Wi-Fi Direct, achieving a stable connection for data transfer up to 500 meters.',
      'Implemented custom data chunking and compression in Java, transmitting 10MB images in under 15 seconds (40% speed improvement).',
      'Secured 1st Place among 30 competing teams with live drone telemetry prototype.'
    ],
    gitLink: 'https://github.com/parimalingle1805/hackathon_4.0_15.git'
  }
];

const Projects = () => {
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (idx) => {
    setExpanded((prev) => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  return (
    <SectionContainer id="projects">
      <SectionCommandHeader>
        <span className="cmd-prefix">&gt;</span>
        <span className="cmd-name"> executing tool:</span>
        <span className="cmd-call"> project_registry.inspect(filter="FEATURED", count={projArr.length})</span>
      </SectionCommandHeader>

      <ProjectsGrid>
        {projArr.map((proj, idx) => {
          const isExp = !!expanded[idx];
          return (
            <ProjectCard key={idx}>
              <CardMediaWrapper>
                <CardImage src={proj.image} alt={proj.title} loading="lazy" />
                <StatusTag>{proj.status}</StatusTag>
              </CardMediaWrapper>

              <CardBody>
                <ProjectTitle>{proj.title}</ProjectTitle>
                <ProjectDesc>{proj.desc}</ProjectDesc>

                <TechPillsWrapper>
                  {proj.tech.map((t, tIdx) => (
                    <TechPill key={tIdx}>{t}</TechPill>
                  ))}
                </TechPillsWrapper>

                {isExp && (
                  <ExpandedDetails>
                    {proj.contrib && (
                      <DetailBlock>
                        <span className="detail-label">MY ROLE:</span>
                        <span className="detail-text">{proj.contrib}</span>
                      </DetailBlock>
                    )}
                    {proj.keyAchiev && (
                      <DetailBlock>
                        <span className="detail-label">KEY ACHIEVEMENTS:</span>
                        <ul className="achiev-list">
                          {proj.keyAchiev.map((achiev, aIdx) => (
                            <li key={aIdx}>
                              <span className="achiev-arrow">❯</span> {achiev}
                            </li>
                          ))}
                        </ul>
                      </DetailBlock>
                    )}
                  </ExpandedDetails>
                )}

                <CardFooter>
                  <ActionButtons>
                    <ActionButton
                      href={proj.gitLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`GitHub for ${proj.title}`}
                    >
                      <span className="btn-bracket">[</span> GitHub <span className="btn-bracket">]</span>
                    </ActionButton>
                    {proj.link && (
                      <ActionButtonLive
                        href={proj.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Live Demo for ${proj.title}`}
                      >
                        <span className="btn-bracket">[</span> Live Demo <span className="btn-bracket">]</span>
                      </ActionButtonLive>
                    )}
                  </ActionButtons>

                  <ReadMoreBtn onClick={() => toggleExpand(idx)}>
                    {isExp ? '▲ Less' : '▼ Details'}
                  </ReadMoreBtn>
                </CardFooter>
              </CardBody>
            </ProjectCard>
          );
        })}
      </ProjectsGrid>
    </SectionContainer>
  );
};

export default Projects;

// Compatibility exports
export const ProjectContainer = styled.div``;
export const cardStyle = {};
export const customTypo = {};

// --- STYLED COMPONENTS ---

const SectionContainer = styled.section`
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  margin-bottom: 3rem;
  scroll-margin-top: 80px;
`;

const SectionCommandHeader = styled.div`
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: var(--font-mono);
  font-size: 1rem;
  margin-bottom: 1.2rem;
  padding: 0.5rem 0.8rem;
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-left: 3px solid var(--accent-cyan);
  border-radius: 6px;
  word-break: break-word;
  overflow-wrap: anywhere;

  .cmd-prefix {
    color: var(--accent-cyan);
    font-weight: 700;
  }
  .cmd-name {
    color: var(--text-secondary);
  }
  .cmd-call {
    color: var(--accent-green);
    font-weight: 500;
    word-break: break-all;
  }

  @media (max-width: 640px) {
    font-size: 0.82rem;
    flex-wrap: wrap;
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 320px), 1fr));
  gap: 1.2rem;
  width: 100%;

  @media (max-width: 600px) {
    grid-template-columns: minmax(0, 1fr);
  }
`;

const ProjectCard = styled.div`
  width: 100%;
  max-width: 100%;
  min-width: 0;
  box-sizing: border-box;
  background-color: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
  transition: border-color 0.2s ease, transform 0.2s ease;

  &:hover {
    border-color: var(--border-hover);
    transform: translateY(-2px);
  }
`;

const CardMediaWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  background-color: var(--bg-code);
  overflow: hidden;
  border-bottom: 1px solid var(--border-color);
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${ProjectCard}:hover & {
    transform: scale(1.03);
  }
`;

const StatusTag = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  background: rgba(13, 15, 18, 0.9);
  border: 1px solid var(--accent-terracotta);
  color: var(--accent-terracotta);
  font-size: 0.68rem;
  font-weight: 600;
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  letter-spacing: 0.5px;
`;

const CardBody = styled.div`
  padding: 1.2rem;
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 512px) {
    padding: 0.85rem;
  }
`;

const ProjectTitle = styled.h3`
  font-size: 1.15rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 0.5rem;
`;

const ProjectDesc = styled.p`
  font-size: 0.85rem;
  color: var(--text-secondary);
  line-height: 1.5;
  margin-bottom: 1rem;
`;

const TechPillsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
  margin-bottom: 1rem;
`;

const TechPill = styled.span`
  background: var(--bg-code);
  border: 1px solid var(--border-color);
  color: var(--accent-cyan);
  font-size: 0.72rem;
  padding: 0.15rem 0.45rem;
  border-radius: 4px;
`;

const ExpandedDetails = styled.div`
  margin-top: 0.5rem;
  padding-top: 0.8rem;
  border-top: 1px dashed var(--border-color);
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  font-size: 0.82rem;
  animation: fadeIn 0.2s ease-in;

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`;

const DetailBlock = styled.div`
  .detail-label {
    display: block;
    color: var(--accent-yellow);
    font-size: 0.72rem;
    font-weight: 600;
    margin-bottom: 0.3rem;
  }
  .detail-text {
    color: var(--text-secondary);
    line-height: 1.5;
  }
  .achiev-list {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 0.4rem;

    li {
      display: flex;
      gap: 0.4rem;
      color: var(--text-secondary);
      line-height: 1.5;
    }
    .achiev-arrow {
      color: var(--accent-green);
      font-size: 0.75rem;
      margin-top: 2px;
      flex-shrink: 0;
    }
  }
`;

const CardFooter = styled.div`
  margin-top: auto;
  padding-top: 1rem;
  border-top: 1px solid var(--border-color);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

const ActionButton = styled.a`
  background: rgba(255, 255, 255, 0.05);
  color: var(--text-primary);
  border: 1px solid var(--border-color);
  font-size: 0.78rem;
  padding: 0.35rem 0.65rem;
  border-radius: 6px;
  cursor: pointer;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  transition: all 0.2s ease;

  .btn-bracket {
    color: var(--text-muted);
    margin: 0 0.2rem;
  }

  &:hover {
    border-color: var(--accent-terracotta);
    color: var(--accent-terracotta);
    background: rgba(217, 119, 87, 0.1);
  }
`;

const ActionButtonLive = styled(ActionButton)`
  border-color: rgba(86, 182, 194, 0.4);
  color: var(--accent-cyan);

  .btn-bracket {
    color: var(--accent-cyan);
  }

  &:hover {
    border-color: var(--accent-cyan);
    color: #ffffff;
    background: rgba(86, 182, 194, 0.2);
  }
`;

const ReadMoreBtn = styled.button`
  background: transparent;
  border: none;
  color: var(--accent-yellow);
  font-family: var(--font-mono);
  font-size: 0.75rem;
  cursor: pointer;
  padding: 0.3rem 0.4rem;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.8;
  }
`;