import React, { useEffect } from 'react';
import styled from 'styled-components';

const About = () => {
  useEffect(() => {
    // If rendered as dedicated route, scroll to top or summary
    const element = document.getElementById('summary');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const edu = [
    {
      date: 'May 2025',
      title: 'Master of Science in Information Systems (GPA 3.80)',
      institution: 'California State University, Long Beach (CSULB)'
    },
    {
      date: 'August 2021',
      title: 'B.Tech in Electronics and Telecommunications',
      institution: 'Narsee Monjee Institute of Management Studies (NMIMS)'
    }
  ];

  const skillSet = [
    {
      title: 'Languages & Web Core',
      skills: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C/C++', 'HTML5', 'CSS3', 'JSON', 'GraphQL', 'WebSockets']
    },
    {
      title: 'Frameworks, Libraries & Cloud APIs',
      skills: ['React.js', 'Node.js', 'Express.js', 'Spring Boot', 'FastAPI', 'Vite', 'Zod', 'Server-Sent Events (SSE)', 'REST APIs']
    },
    {
      title: 'Cloud Infrastructure & DevOps',
      skills: ['AWS (Lambda, Aurora, DynamoDB, EKS, API Gateway, Cognito, CodePipeline)', 'Docker', 'Kubernetes', 'CI/CD Pipelines', 'Linux/Unix', 'GitHub Actions']
    },
    {
      title: 'AI Engineering & Tooling',
      skills: ['Google Genkit', 'Gemini API', 'Ollama (Gemma)', 'Tree-sitter (AST)', 'AI-Agent Architectures', 'AST Hashing (SHA256)']
    }
  ];

  return (
    <SectionContainer id="summary">
      <SectionCommandHeader>
        <span className="cmd-prefix">&gt;</span>
        <span className="cmd-name"> executing tool:</span>
        <span className="cmd-call"> profile_diagnostic.inspect(category="EDUCATION_AND_SKILLS")</span>
      </SectionCommandHeader>

      <AboutGrid>
        <TuiCard>
          <CardTopBar>
            <span className="bar-title">ACADEMIC_CREDENTIALS</span>
            <span className="bar-tag">VERIFIED</span>
          </CardTopBar>
          <CardBody>
            {edu.map((item, idx) => (
              <EduItem key={idx}>
                <div className="edu-date">{item.date}</div>
                <div className="edu-title">{item.title}</div>
                <div className="edu-inst">{item.institution}</div>
              </EduItem>
            ))}
          </CardBody>
        </TuiCard>

        <TuiCard>
          <CardTopBar>
            <span className="bar-title">CORE_COMPETENCIES_MATRIX</span>
          </CardTopBar>
          <CardBody>
            {skillSet.map((cat, idx) => (
              <SkillGroup key={idx}>
                <div className="group-title">{cat.title} {'//'}</div>
                <PillsWrap>
                  {cat.skills.map((s, sIdx) => (
                    <Pill key={sIdx}>{s}</Pill>
                  ))}
                </PillsWrap>
              </SkillGroup>
            ))}
          </CardBody>
        </TuiCard>
      </AboutGrid>
    </SectionContainer>
  );
};

export default About;

// Compatibility exports
export const BriefExp = styled.div``;
export const IconWrap1 = styled.div``;

// --- STYLED COMPONENTS ---

const SectionContainer = styled.section`
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  margin-bottom: 3.5rem;
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
  margin-bottom: 1.5rem;
  padding: 0.5rem 0.8rem;
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-left: 3px solid var(--accent-yellow);
  border-radius: 6px;
  word-break: break-word;
  overflow-wrap: anywhere;

  .cmd-prefix {
    color: var(--accent-yellow);
    font-weight: 700;
  }
  .cmd-name {
    color: var(--text-secondary);
  }
  .cmd-call {
    color: var(--accent-cyan);
    font-weight: 500;
    word-break: break-all;
  }

  @media (max-width: 640px) {
    font-size: 0.85rem;
    flex-wrap: wrap;
  }
`;

const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.3fr;
  gap: 1.5rem;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;

  @media (max-width: 900px) {
    grid-template-columns: minmax(0, 1fr);
  }
`;

const TuiCard = styled.div`
  width: 100%;
  max-width: 100%;
  min-width: 0;
  box-sizing: border-box;
  background-color: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
`;

const CardTopBar = styled.div`
  background: var(--bg-code);
  border-bottom: 1px solid var(--border-color);
  padding: 0.6rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.76rem;
  flex-wrap: wrap;
  gap: 0.4rem;
  width: 100%;
  box-sizing: border-box;

  .bar-title {
    color: var(--accent-yellow);
    font-weight: 600;
    word-break: break-all;
  }
  .bar-tag {
    color: var(--accent-green);
  }
`;

const CardBody = styled.div`
  padding: 1.2rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 512px) {
    padding: 0.85rem;
  }
`;

const EduItem = styled.div`
  border-left: 2px solid var(--accent-yellow);
  padding-left: 0.8rem;
  word-break: break-word;
  overflow-wrap: anywhere;

  .edu-date {
    color: var(--accent-yellow);
    font-size: 0.76rem;
    margin-bottom: 2px;
  }
  .edu-title {
    color: #ffffff;
    font-size: 0.95rem;
    font-weight: 600;
    margin-bottom: 2px;
    word-break: break-word;
  }
  .edu-inst {
    color: var(--text-secondary);
    font-size: 0.82rem;
    word-break: break-word;
  }
`;

const SkillGroup = styled.div`
  word-break: break-word;
  overflow-wrap: anywhere;

  .group-title {
    font-size: 0.78rem;
    color: var(--text-muted);
    margin-bottom: 0.4rem;
  }
`;

const PillsWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
  width: 100%;
`;

const Pill = styled.span`
  background: var(--bg-code);
  border: 1px solid var(--border-color);
  color: var(--accent-cyan);
  font-size: 0.75rem;
  padding: 0.18rem 0.5rem;
  border-radius: 4px;
  word-break: break-word;
`;