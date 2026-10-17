import React from 'react';
import styled from 'styled-components';

const certArr = [
  {
    title: 'Generative AI with Large Language Models',
    doc: 'May 2025',
    description: 'Completed a comprehensive course on the LLM project lifecycle, from model architecture and fine-tuning to building practical, end-to-end AI applications.',
    skills: 'Generative AI, LLMs, Transformer Architecture, Fine-Tuning, PEFT, RLHF, RAG, LangChain, Prompt Engineering',
    issued: 'Coursera | DeepLearning.AI & AWS',
    link: '',
    status: 'COMPLETED // ACTIVE'
  },
  {
    title: 'Back End Development and APIs',
    doc: '13 April, 2024',
    description: 'Enhanced my back end development by building projects and add to my MERN stack skillset.',
    skills: 'JavaScript, APIs, Back-end Development',
    issued: 'Udemy',
    link: 'https://www.udemy.com/certificate/UC-c1effc75-970d-44ed-9067-40e72d5c36ab/',
    status: 'VERIFIED CREDENTIAL'
  },
  {
    title: 'Meta Front-End Developer Professional Certification',
    doc: '24th Feb, 2023',
    description: "Completed Meta's comprehensive front-end development program, mastering React, JavaScript, and modern web development techniques.",
    skills: 'React, JavaScript, HTML, CSS, Front-End Development, Version Control, Git',
    issued: 'Coursera | Meta',
    link: 'https://www.credly.com/badges/d2daa752-44aa-471d-a218-53665954b0b9/print',
    status: 'CREDLY BADGE // VERIFIED'
  },
  {
    title: 'JavaScript Algorithms and Data Structures',
    doc: '12 June, 2020',
    description: 'Developed a strong foundation in JavaScript fundamentals and data structures.',
    skills: 'JavaScript, Data Structures, Algorithms, Problem-Solving',
    issued: 'Free Code Camp',
    link: 'https://www.freecodecamp.org/certification/parimalingle1805/javascriptalgorithms-and-data-structures',
    status: 'VERIFIED CREDENTIAL'
  },
  {
    title: 'Python for DSA',
    doc: '28 May, 2020',
    description: 'Enhanced problem-solving skills by studying data design with Python.',
    skills: 'Python, Data Structures, Algorithms',
    issued: 'Udemy',
    link: 'https://www.udemy.com/certificate/UC-c1effc75-970d-44ed-9067-40e72d5c36ab/',
    status: 'VERIFIED CREDENTIAL'
  }
];

const Certifications = () => {
  return (
    <SectionContainer id="certificates">
      <SectionCommandHeader>
        <span className="cmd-prefix">&gt;</span>
        <span className="cmd-name"> executing tool:</span>
        <span className="cmd-call"> credential_store.audit(format="VERIFIED_LOG", count={certArr.length})</span>
      </SectionCommandHeader>

      <CertsGrid>
        {certArr.map((cert, idx) => (
          <CertCard key={idx}>
            <CertHeader>
              <div className="cert-id">
                <span className="log-icon">⚿</span>
                <span className="log-hash">CRED_LOG_0x0{idx + 1}</span>
              </div>
              <CertStatusBadge $isVerified={!!cert.link}>
                {cert.link ? '✓ VERIFIED' : '● ACTIVE'}
              </CertStatusBadge>
            </CertHeader>

            <CertBody>
              <CertTitle>{cert.title}</CertTitle>
              <CertMeta>
                <div className="meta-item">
                  <span className="meta-label">ISSUER:</span>
                  <span className="meta-val issuer">{cert.issued}</span>
                </div>
                <div className="meta-item">
                  <span className="meta-label">DATE:</span>
                  <span className="meta-val date">{cert.doc}</span>
                </div>
              </CertMeta>

              <CertDesc>{cert.description}</CertDesc>

              <SkillsSection>
                <span className="skills-label">SKILLS_VERIFIED {'//'}</span>
                <SkillsList>
                  {cert.skills.split(',').map((skill, sIdx) => (
                    <SkillPill key={sIdx}>{skill.trim()}</SkillPill>
                  ))}
                </SkillsList>
              </SkillsSection>

              <CertFooter>
                {cert.link ? (
                  <VerifyButton
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Verify ${cert.title}`}
                  >
                    <span className="btn-bracket">[</span> Verify Credential ↗ <span className="btn-bracket">]</span>
                  </VerifyButton>
                ) : (
                  <InstitutionalTag>Official Curriculum Completed</InstitutionalTag>
                )}
              </CertFooter>
            </CertBody>
          </CertCard>
        ))}
      </CertsGrid>
    </SectionContainer>
  );
};

export default Certifications;

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
  border-left: 3px solid var(--accent-purple);
  border-radius: 6px;
  word-break: break-word;
  overflow-wrap: anywhere;

  .cmd-prefix {
    color: var(--accent-purple);
    font-weight: 700;
  }
  .cmd-name {
    color: var(--text-secondary);
  }
  .cmd-call {
    color: var(--accent-yellow);
    font-weight: 500;
    word-break: break-all;
  }

  @media (max-width: 640px) {
    font-size: 0.85rem;
    flex-wrap: wrap;
  }
`;

const CertsGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
`;

const CertCard = styled.div`
  width: 100%;
  max-width: 100%;
  min-width: 0;
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

const CertHeader = styled.div`
  background: var(--bg-code);
  border-bottom: 1px solid var(--border-color);
  padding: 0.55rem 1.2rem;
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

  .cert-id {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.78rem;

    .log-icon {
      color: var(--accent-purple);
    }
    .log-hash {
      color: var(--text-muted);
      letter-spacing: 0.5px;
    }
  }
`;

const CertStatusBadge = styled.span`
  font-size: 0.72rem;
  font-weight: 600;
  padding: 0.15rem 0.5rem;
  border-radius: 4px;
  background: ${(props) =>
    props.$isVerified
      ? 'rgba(152, 195, 121, 0.12)'
      : 'rgba(86, 182, 194, 0.12)'};
  border: 1px solid
    ${(props) =>
      props.$isVerified
        ? 'rgba(152, 195, 121, 0.35)'
        : 'rgba(86, 182, 194, 0.35)'};
  color: ${(props) =>
    props.$isVerified ? 'var(--accent-green)' : 'var(--accent-cyan)'};
`;

const CertBody = styled.div`
  padding: 1.2rem;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 512px) {
    padding: 0.85rem;
  }
`;

const CertTitle = styled.h3`
  font-size: 1.15rem;
  font-weight: 700;
  color: #ffffff;
  word-break: break-word;

  @media (max-width: 512px) {
    font-size: 1.02rem;
  }
`;

const CertMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.2rem;
  font-size: 0.82rem;
  word-break: break-word;

  .meta-item {
    display: flex;
    gap: 0.4rem;
  }
  .meta-label {
    color: var(--text-muted);
    font-size: 0.75rem;
  }
  .meta-val {
    &.issuer {
      color: var(--accent-cyan);
      font-weight: 500;
    }
    &.date {
      color: var(--accent-yellow);
    }
  }
`;

const CertDesc = styled.p`
  font-size: 0.85rem;
  color: var(--text-secondary);
  line-height: 1.5;
  word-break: break-word;
`;

const SkillsSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  width: 100%;

  .skills-label {
    color: var(--text-muted);
    font-size: 0.72rem;
    font-weight: 600;
  }
`;

const SkillsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
  width: 100%;
`;

const SkillPill = styled.span`
  background: var(--bg-code);
  border: 1px solid var(--border-color);
  color: var(--text-secondary);
  font-size: 0.72rem;
  padding: 0.15rem 0.45rem;
  border-radius: 4px;
  word-break: break-word;
`;

const CertFooter = styled.div`
  margin-top: 0.3rem;
  padding-top: 0.8rem;
  border-top: 1px dashed var(--border-color);
  display: flex;
  justify-content: flex-start;
  width: 100%;
`;

const VerifyButton = styled.a`
  background: rgba(86, 182, 194, 0.1);
  color: var(--accent-cyan);
  border: 1px solid rgba(86, 182, 194, 0.4);
  padding: 0.35rem 0.75rem;
  border-radius: 6px;
  font-size: 0.82rem;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  transition: all 0.2s ease;

  .btn-bracket {
    color: var(--accent-cyan);
    margin: 0 0.2rem;
  }

  &:hover {
    background: rgba(86, 182, 194, 0.22);
    border-color: var(--accent-cyan);
    color: #ffffff;
    box-shadow: 0 0 10px rgba(86, 182, 194, 0.2);
  }
`;

const InstitutionalTag = styled.span`
  color: var(--text-muted);
  font-size: 0.75rem;
  font-style: italic;
`;