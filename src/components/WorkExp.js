import React from 'react';
import styled from 'styled-components';

const workArr = [
  {
    company: 'Blancco Software',
    duration: 'Aug 2026 - Present',
    designation: 'Software Developer (License & Cloud R&D)',
    location: 'Pune, IN',
    techStack: 'Java (Spring Boot, JPA), Python, AWS (Lambda, Aurora, DynamoDB, CloudWatch, CodePipeline), CI/CD',
    bullets: [
      'Engineer distributed Java microservices and serverless Python AWS Lambda modules for the Blancco Management Portal, securely managing high-throughput license entitlements and tamper-proof data erasure verification workflows.',
      'Optimize enterprise data state management across Amazon Aurora and DynamoDB, structuring schemas to securely process, aggregate, and store global IT asset lifecycle reporting logs.',
      'Maintain and scale enterprise CI/CD deployment pipelines utilizing AWS CodeCommit, CodePipeline, and CloudWatch, ensuring zero-downtime releases and regulatory compliance for cloud API endpoints.',
      'Accelerate engineering velocity by integrating AI-assisted development tools into rapid-release cycles to minimize sprint delivery latency.'
    ]
  },
  {
    company: 'Saayam For All',
    duration: 'Jul 2025 - Jun 2026',
    designation: 'Full Stack Developer',
    location: 'Remote / Hybrid',
    techStack: 'TypeScript, Google Genkit, Ollama (Gemma), React, Node.js, web-tree-sitter, SHA256',
    bullets: [
      'Architected and integrated an internal local-first AI technical documentation tool using TypeScript and Google Genkit, designed to automate complex module analysis and accelerate volunteer engineering velocity by 30%.',
      'Eliminated 100% of cloud infrastructure token costs and guaranteed data compliance by designing the tool to orchestrate model inference via a local developer pipeline, leveraging Ollama to serve Gemma models directly on client machines.',
      'Engineered dynamic, real-time React dashboards featuring custom server-side pagination workflows and component memoization, reducing initial UI page load latencies by 25% and optimizing volunteer coordination layouts.',
      'Integrated cryptographic logic-integrity checks via AST hashing (web-tree-sitter + SHA256) to mathematically guarantee zero AI-introduced logic drift or syntax regressions during automated code-block documentation parsing.'
    ]
  },
  {
    company: 'Capgemini (Financial Services)',
    duration: 'Jul 2021 - Aug 2023',
    designation: 'Senior Software Engineer',
    location: 'Mumbai, IN',
    techStack: 'ReactJS, AWS AppSync, AWS Lambda, GraphQL, Docker, Jenkins, Microservices, PCI DSS',
    bullets: [
      'Spearheaded the transition of legacy payment modules to a modern ReactJS front-end, boosting transaction processing speed by 30% and contributing to a CNY 2 million increase in annual transaction revenue.',
      'Architected a unified GraphQL data layer using AWS AppSync and Lambda to aggregate data from multiple legacy mainframe services, eliminating over-fetching and reducing client-side network requests by 40%.',
      'Mentored a team of 3 junior engineers on complex React/API integration patterns, driving knowledge transfer and contributing to team skill growth.',
      'Engineered a complete CI/CD pipeline using Docker and Jenkins, ensuring all deployments adhered to strict PCI DSS compliance standards for data encryption and security protocols.'
    ]
  },
  {
    company: 'Unlock (Startup)',
    duration: 'Sep 2019 - May 2020',
    designation: 'Co-Founder / Lead Full Stack Engineer',
    location: 'Mumbai, IN',
    techStack: 'MERN Stack, PostgreSQL (JSONB), AWS, Docker, REST APIs, CI/CD',
    bullets: [
      'Co-founded an early-stage tech startup, driving the technical vision and end-to-end product strategy to build a SaaS platform, directly contributing to the acquisition of INR 1.5 million in sponsorship.',
      'Led full-stack development utilizing the MERN stack (MongoDB, Express.js, React.js, Node.js), engineering backend REST APIs and responsive, data-driven frontend dashboards for real-time user management.',
      'Architected a hybrid database solution utilizing PostgreSQL with JSONB columns to support dynamic, user-defined inventory attributes, resolving early migration bottlenecks and improving complex query execution speeds by 35%.',
      'Orchestrated cloud infrastructure and CI/CD workflows using AWS and Docker, establishing containerized deployment pipelines that standardized release processes.'
    ]
  },
  {
    company: 'Bob Murphy Access Center (BMAC)',
    duration: 'Aug 2024 - May 2025',
    designation: 'Graduate Assistant',
    location: 'Long Beach, CA',
    techStack: 'React, Node.js, Oracle SQL, REST APIs',
    bullets: [
      'Led the design and development of a full-stack student check-in feature for the myBMAC web app using React and Node.js.',
      'Created a real-time notification system that slashed student wait times and boosted operational efficiency by over 70%.',
      'Boosted application performance by 40% by optimizing backend Node.js services and refactoring data retrieval from the Oracle SQL database.',
      'Resolved complex technical and procedural API issues for thousands of active students and faculty members.'
    ]
  },
  {
    company: 'UAS NMIMS',
    duration: 'Oct 2020 - Jun 2021',
    designation: 'Web Development Lead',
    location: 'Mumbai, IN',
    techStack: 'JavaScript, Mapbox API, Node.js, Agile',
    bullets: [
      'Led Agile development for competition-winning web applications, achieving top-5 placements globally in events hosted by IIT-Bombay.',
      'Developed real-time geolocation tracking UI interfaces utilizing the Mapbox API to visualize drone telemetry data during competitive deployments.',
      'Optimized the main UAS organization website, resulting in a 25% reduction in page load times and significantly improved user accessibility.'
    ]
  }
];

const WorkExp = () => {
  return (
    <SectionContainer id="experience">
      <SectionCommandHeader>
        <span className="cmd-prefix">&gt;</span>
        <span className="cmd-name"> executing tool:</span>
        <span className="cmd-call"> work_experience.audit(order="DESC", status="VERIFIED")</span>
      </SectionCommandHeader>

      <ToolPanelsList>
        {workArr.map((item, idx) => (
          <ToolCard key={idx}>
            <ToolHeader>
              <div className="tool-call-info">
                <span className="call-icon">⠿</span>
                <span className="call-tag">ToolCall:</span>
                <span className="company-name">{item.company}</span>
              </div>
              <div className="status-badges">
                <span className="badge-duration">{item.duration}</span>
                <span className="badge-ok">exit: 0</span>
              </div>
            </ToolHeader>

            <ToolBody>
              <MetaRow>
                <div className="meta-item">
                  <span className="meta-label">ROLE {'//'}</span>
                  <span className="meta-value role">{item.designation}</span>
                </div>
                <div className="meta-item">
                  <span className="meta-label">LOCATION {'//'}</span>
                  <span className="meta-value">{item.location}</span>
                </div>
              </MetaRow>

              {item.techStack && (
                <TechStackRow>
                  <span className="meta-label">TECH_STACK {'//'}</span>
                  <span className="meta-tech">{item.techStack}</span>
                </TechStackRow>
              )}

              <Divider />

              <BulletsList>
                {item.bullets.map((bullet, bIdx) => (
                  <BulletItem key={bIdx}>
                    <span className="bullet-sym">❯</span>
                    <span className="bullet-text">{bullet}</span>
                  </BulletItem>
                ))}
              </BulletsList>
            </ToolBody>
          </ToolCard>
        ))}
      </ToolPanelsList>
    </SectionContainer>
  );
};

export default WorkExp;

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
  border-left: 3px solid var(--accent-terracotta);
  border-radius: 6px;
  word-break: break-word;
  overflow-wrap: anywhere;

  .cmd-prefix {
    color: var(--accent-terracotta);
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
    font-size: 0.82rem;
    flex-wrap: wrap;
  }
`;

const ToolPanelsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  width: 100%;
`;

const ToolCard = styled.div`
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  background-color: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
  transition: border-color 0.2s ease, transform 0.2s ease;

  &:hover {
    border-color: var(--border-hover);
    transform: translateY(-2px);
  }
`;

const ToolHeader = styled.div`
  background: var(--bg-code);
  border-bottom: 1px solid var(--border-color);
  padding: 0.6rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0.4rem;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 512px) {
    padding: 0.5rem 0.75rem;
  }

  .tool-call-info {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    .call-icon {
      color: var(--accent-terracotta);
      font-size: 1rem;
    }
    .call-tag {
      color: var(--text-muted);
      font-size: 0.78rem;
    }
    .company-name {
      color: #ffffff;
      font-weight: 700;
      font-size: 1.05rem;
    }
  }

  .status-badges {
    display: flex;
    align-items: center;
    gap: 0.6rem;

    .badge-duration {
      color: var(--accent-yellow);
      background: rgba(229, 192, 123, 0.1);
      border: 1px solid rgba(229, 192, 123, 0.3);
      padding: 0.15rem 0.5rem;
      border-radius: 4px;
      font-size: 0.75rem;
    }
    .badge-ok {
      color: var(--accent-green);
      background: rgba(152, 195, 121, 0.1);
      border: 1px solid rgba(152, 195, 121, 0.3);
      padding: 0.15rem 0.45rem;
      border-radius: 4px;
      font-size: 0.72rem;
      font-weight: 600;
    }
  }
`;

const ToolBody = styled.div`
  padding: 1.2rem;
  font-family: var(--font-mono);
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 512px) {
    padding: 0.85rem;
  }
`;

const MetaRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-bottom: 0.6rem;
  font-size: 0.85rem;

  .meta-item {
    display: flex;
    align-items: center;
    gap: 0.4rem;
  }
  .meta-label {
    color: var(--text-muted);
    font-size: 0.75rem;
  }
  .meta-value {
    color: var(--text-primary);
    &.role {
      color: var(--accent-terracotta);
      font-weight: 600;
    }
  }
`;

const TechStackRow = styled.div`
  font-size: 0.82rem;
  margin-bottom: 0.8rem;
  display: flex;
  align-items: baseline;
  gap: 0.4rem;
  flex-wrap: wrap;

  .meta-label {
    color: var(--text-muted);
    font-size: 0.75rem;
  }
  .meta-tech {
    color: var(--accent-cyan);
  }
`;

const Divider = styled.div`
  height: 1px;
  background: dashed var(--border-color);
  margin: 0.8rem 0;
`;

const BulletsList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
`;

const BulletItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 0.6rem;
  font-size: 0.88rem;
  line-height: 1.6;

  .bullet-sym {
    color: var(--accent-green);
    font-size: 0.85rem;
    margin-top: 2px;
    flex-shrink: 0;
  }

  .bullet-text {
    color: var(--text-secondary);
  }
`;
