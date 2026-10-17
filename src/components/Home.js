import React from 'react';
import styled from 'styled-components';

// Preserve social links
export const socialIcons = [
  {
    name: 'LinkedIn',
    label: 'in/parimalingle',
    link: 'https://www.linkedin.com/in/parimalingle/',
    iconText: 'in',
    color: '#0077b5'
  },
  {
    name: 'GitHub',
    label: 'gh/parimalingle1805',
    link: 'https://github.com/parimalingle1805',
    iconText: 'gh',
    color: '#ffffff'
  },
  {
    name: 'Reddit',
    label: 'u/parimalingle1805',
    link: 'https://www.reddit.com/user/parimalingle1805/',
    iconText: 'r/',
    color: '#ff4500'
  },
  {
    name: 'X',
    label: '@IngleParimal',
    link: 'https://x.com/IngleParimal',
    iconText: '𝕏',
    color: '#1da1f2'
  }
];

const fastfetchDiagnostics = [
  {
    key: 'OS',
    value: 'AI Platform Architecture & Enterprise Cloud Infrastructure',
    color: 'var(--accent-cyan)'
  },
  {
    key: 'Host',
    value: 'Blancco Software (License & Cloud R&D) | Aug 2026 - Present',
    color: 'var(--accent-terracotta)'
  },
  {
    key: 'Kernel',
    value: 'Java (Spring Boot, JPA), Python, TypeScript/JavaScript, C++, SQL, NoSQL',
    color: 'var(--accent-green)'
  },
  {
    key: 'Cloud',
    value: 'AWS (Lambda, Aurora, DynamoDB, EKS, API Gateway, Cognito, CodePipeline), Docker, CI/CD',
    color: 'var(--accent-yellow)'
  },
  {
    key: 'AI & Tooling',
    value: 'Google Genkit, Gemini API, Ollama (Gemma), Zod, Tree-sitter (AST), Linux/Unix',
    color: 'var(--accent-purple)'
  },
  {
    key: 'Web Stack',
    value: 'React.js, Node.js/Express.js, Vite, REST APIs, GraphQL, Server-Sent Events (SSE)',
    color: 'var(--accent-blue)'
  },
  {
    key: 'Education',
    value: 'MS in Information Systems (CSULB, GPA 3.80) | B.Tech in E&TC (NMIMS)',
    color: 'var(--text-secondary)'
  },
  {
    key: 'Impact',
    value: 'INR 1.5M Funding Secured | +30% Payment Speed (CNY 2M) | +30% AI Dev Velocity',
    color: 'var(--accent-green)'
  }
];

// Standard and bright 8-color terminal palettes
const standardColors = ['#282c34', '#e06c75', '#98c379', '#e5c07b', '#61afef', '#c678dd', '#56b6c2', '#abb2bf'];
const brightColors = ['#5c6370', '#be5046', '#7ca668', '#d19a66', '#4fa6ed', '#b558ce', '#42b0bd', '#e1e4ea'];

const Home = () => {
  return (
    <HeroWrapper id="home">
      {/* 1. Top Claude Code Welcome Box */}
      <ClaudeBox>
        <TuiWindowHeader>
          <div className="window-dots">
            <span className="dot red" />
            <span className="dot yellow" />
            <span className="dot green" />
          </div>
          <span className="window-title">claude-code — session #0x7F2A — bash</span>
          <span className="window-status">● LIVE</span>
        </TuiWindowHeader>
        <ClaudeBannerBody>
          <div className="banner-ascii">
            <span className="bracket">╭─</span> <span className="session-tag">Claude Code CLI Session</span> <span className="ascii-rule" /><span className="bracket">╮</span>
          </div>
          <div className="banner-content">
            <div className="engineer-name">Parimal Jaykumar Ingle</div>
            <div className="engineer-sub">
              <span className="role">Software Engineer</span> (AI Platform & Cloud Infrastructure)
            </div>
            <div className="engineer-loc">
              <span className="loc-pin">📍</span> Pune, IN <span className="divider">|</span> <span className="status-badge">Available for High-Impact Eng Roles</span>
            </div>
          </div>
          <div className="banner-ascii bottom">
            <span className="bracket">╰</span><span className="ascii-rule" /><span className="bracket">╯</span>
          </div>
        </ClaudeBannerBody>
      </ClaudeBox>

      {/* 2. Auto-Executed Command Block */}
      <CommandBlock>
        <span className="cmd-prompt">
          <span className="cmd-user">parimal</span>
          <span className="cmd-at">@</span>
          <span className="cmd-host">blancco-rd</span>
          <span className="cmd-tilde"> ~</span>
          <span className="cmd-dollar"> $</span>
        </span>
        <span className="cmd-exec">fastfetch</span>
        <span className="cmd-cursor">_</span>
      </CommandBlock>

      {/* 3. Fastfetch Hero Diagnostic Block (Summary) */}
      <FastfetchCard id="summary">
        <FastfetchHeader>
          <span className="card-tag">SYSTEM DIAGNOSTIC HERO</span>
          <span className="uptime">uptime: 4+ yrs industry eng</span>
        </FastfetchHeader>

        <FastfetchGrid>
          {/* Left Column: Photo, Action Buttons, Socials */}
          <LeftColumn>
            <AvatarFrame>
              <AvatarImage
                src="/personal-portfolio-react/home_profile.jpeg"
                alt="Parimal Jaykumar Ingle"
              />
              <StatusOverlay>
                <span className="pulse-dot" />
                <span>ACTIVE_STATION</span>
              </StatusOverlay>
            </AvatarFrame>

            <ActionButtonsContainer>
              <TerminalButton
                onClick={() => window.open('/personal-portfolio-react/resume.pdf', '_blank')}
                aria-label="View My Resume"
              >
                <span className="btn-bracket">[</span> View My Resume <span className="btn-bracket">]</span>
              </TerminalButton>

              <TerminalButtonDownload
                href="/personal-portfolio-react/resume.pdf"
                target="_blank"
                download="Parimal_Ingle_Resume"
                aria-label="Download Resume"
              >
                <span className="btn-bracket">[</span> Download Resume <span className="btn-bracket">]</span>
              </TerminalButtonDownload>
            </ActionButtonsContainer>

            <SocialContainer>
              <div className="social-header">CONNECTIONS {'//'} SOCIALS</div>
              <SocialGrid>
                {socialIcons.map((item, idx) => (
                  <SocialBadge
                    key={idx}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    $hoverColor={item.color}
                    aria-label={item.name}
                  >
                    <span className="badge-icon">{item.iconText}</span>
                    <span className="badge-name">{item.name}</span>
                  </SocialBadge>
                ))}
              </SocialGrid>
            </SocialContainer>
          </LeftColumn>

          {/* Right Column: Key-Value System Diagnostics */}
          <RightColumn>
            <DiagnosticsTitle>
              <span className="diag-symbol">⚡</span> parimal@blancco-rd
              <div className="diag-underline" />
            </DiagnosticsTitle>

            <DiagnosticsList>
              {fastfetchDiagnostics.map((diag, index) => (
                <DiagRow key={index}>
                  <DiagKey style={{ color: diag.color }}>{diag.key}</DiagKey>
                  <DiagSeparator>:</DiagSeparator>
                  <DiagValue>{diag.value}</DiagValue>
                </DiagRow>
              ))}
            </DiagnosticsList>
          </RightColumn>
        </FastfetchGrid>

        {/* 8-Color Classic Terminal Palette Bar */}
        <PaletteSection>
          <PaletteRow>
            {standardColors.map((color, idx) => (
              <PaletteSquare key={`std-${idx}`} style={{ backgroundColor: color }} title={color} />
            ))}
          </PaletteRow>
          <PaletteRow>
            {brightColors.map((color, idx) => (
              <PaletteSquare key={`brt-${idx}`} style={{ backgroundColor: color }} title={color} />
            ))}
          </PaletteRow>
        </PaletteSection>
      </FastfetchCard>
    </HeroWrapper>
  );
};

export default Home;

// Compatibility exports
export const ProfilePic = styled.img``;
export const Container = styled.div``;
export const GridItem = styled.div``;
export const GridItem2 = styled.div``;
export const IconWrap = styled.div``;
export const Icons = styled.div``;

// --- STYLED COMPONENTS ---

const HeroWrapper = styled.div`
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  padding-top: 80px;
  margin-bottom: 3rem;
`;

const ClaudeBox = styled.div`
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  background-color: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 1.2rem;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
`;

const TuiWindowHeader = styled.div`
  background-color: var(--bg-code);
  border-bottom: 1px solid var(--border-color);
  padding: 0.5rem 0.8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.78rem;
  color: var(--text-muted);
  width: 100%;
  box-sizing: border-box;
  flex-wrap: wrap;
  gap: 0.4rem;

  .window-dots {
    display: flex;
    gap: 6px;
    align-items: center;
    flex-shrink: 0;

    .dot {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      display: inline-block;
      &.red { background-color: #e06c75; }
      &.yellow { background-color: #e5c07b; }
      &.green { background-color: #98c379; }
    }
  }

  .window-title {
    color: var(--text-secondary);
    font-size: 0.76rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    min-width: 0;
    flex: 1;
    text-align: center;
    padding: 0 0.5rem;

    @media (max-width: 512px) {
      font-size: 0.7rem;
    }
  }

  .window-status {
    color: var(--accent-green);
    font-size: 0.72rem;
    font-weight: 600;
    flex-shrink: 0;
  }
`;

const ClaudeBannerBody = styled.div`
  padding: 1.2rem 1.4rem;
  font-family: var(--font-mono);
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 512px) {
    padding: 0.8rem 0.75rem;
  }

  .banner-ascii {
    color: var(--border-hover);
    font-size: 0.82rem;
    display: flex;
    align-items: center;
    gap: 0.35rem;
    width: 100%;
    max-width: 100%;
    overflow: hidden;

    .bracket {
      color: var(--accent-terracotta);
      flex-shrink: 0;
    }
    .session-tag {
      color: var(--accent-cyan);
      font-weight: 600;
      flex-shrink: 0;
      white-space: nowrap;

      @media (max-width: 400px) {
        font-size: 0.75rem;
      }
    }
    .ascii-rule {
      flex: 1;
      height: 1px;
      background: var(--border-color);
      min-width: 10px;
    }
    &.bottom {
      margin-top: 0.5rem;
    }
  }

  .banner-content {
    padding: 0.7rem 1rem;
    border-left: 2px solid var(--accent-terracotta);
    margin: 0.4rem 0.4rem;

    @media (max-width: 512px) {
      padding: 0.5rem 0.6rem;
      margin: 0.3rem 0;
    }
  }

  .engineer-name {
    font-size: 1.8rem;
    font-weight: 700;
    color: #ffffff;
    letter-spacing: -0.5px;
    margin-bottom: 0.2rem;
    word-break: break-word;

    @media (max-width: 640px) {
      font-size: 1.35rem;
    }
    @media (max-width: 400px) {
      font-size: 1.2rem;
    }
  }

  .engineer-sub {
    font-size: 1rem;
    color: var(--text-secondary);
    margin-bottom: 0.5rem;
    line-height: 1.5;
    word-break: break-word;

    .role {
      color: var(--accent-terracotta);
      font-weight: 600;
    }

    @media (max-width: 640px) {
      font-size: 0.88rem;
    }
  }

  .engineer-loc {
    font-size: 0.85rem;
    color: var(--text-muted);
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.4rem;

    @media (max-width: 512px) {
      font-size: 0.78rem;
    }

    .divider {
      color: var(--border-color);
    }
    .status-badge {
      color: var(--accent-green);
      background: rgba(152, 195, 121, 0.1);
      padding: 0.15rem 0.45rem;
      border-radius: 4px;
      font-size: 0.75rem;
    }
  }
`;

const CommandBlock = styled.div`
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  background: var(--bg-code);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: 0.65rem 1rem;
  margin-bottom: 1.2rem;
  font-family: var(--font-mono);
  font-size: 0.92rem;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.4rem;
  box-shadow: inset 0 2px 6px rgba(0, 0, 0, 0.4);

  @media (max-width: 512px) {
    font-size: 0.82rem;
    padding: 0.5rem 0.75rem;
  }

  .cmd-prompt {
    display: flex;
    align-items: center;
    white-space: nowrap;
  }

  .cmd-user { color: var(--accent-green); font-weight: 600; }
  .cmd-at { color: var(--text-muted); }
  .cmd-host { color: var(--accent-cyan); }
  .cmd-tilde { color: var(--accent-yellow); }
  .cmd-dollar { color: var(--text-secondary); }
  .cmd-exec { color: #ffffff; font-weight: 600; }
  .cmd-cursor {
    color: var(--accent-terracotta);
    animation: blink 1s step-start infinite;
  }

  @keyframes blink {
    50% { opacity: 0; }
  }
`;

const FastfetchCard = styled.div`
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  background-color: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  padding: 1.4rem;
  box-shadow: 0 8px 28px rgba(0, 0, 0, 0.5);
  scroll-margin-top: 85px;

  @media (max-width: 512px) {
    padding: 0.85rem;
  }
`;

const FastfetchHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.4rem;
  border-bottom: 1px dashed var(--border-color);
  padding-bottom: 0.7rem;
  margin-bottom: 1.2rem;
  font-size: 0.78rem;

  .card-tag {
    color: var(--accent-cyan);
    font-weight: 600;
    letter-spacing: 0.5px;
  }
  .uptime {
    color: var(--text-muted);
  }
`;

const FastfetchGrid = styled.div`
  display: grid;
  grid-template-columns: 280px minmax(0, 1fr);
  gap: 1.8rem;
  width: 100%;

  @media (max-width: 960px) {
    grid-template-columns: minmax(0, 1fr);
    gap: 1.4rem;
  }
`;

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  width: 100%;
`;

const AvatarFrame = styled.div`
  position: relative;
  width: 190px;
  height: 190px;
  max-width: 100%;
  border-radius: 12px;
  border: 2px solid var(--accent-terracotta);
  padding: 4px;
  background-color: var(--bg-code);
  box-shadow: 0 0 20px rgba(217, 119, 87, 0.2);

  @media (max-width: 512px) {
    width: 160px;
    height: 160px;
  }
`;

const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
`;

const StatusOverlay = styled.div`
  position: absolute;
  bottom: 8px;
  right: 8px;
  background: rgba(13, 15, 18, 0.9);
  border: 1px solid var(--accent-green);
  border-radius: 10px;
  padding: 0.12rem 0.45rem;
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 0.62rem;
  color: var(--accent-green);
  font-weight: 600;

  .pulse-dot {
    width: 5px;
    height: 5px;
    background-color: var(--accent-green);
    border-radius: 50%;
    box-shadow: 0 0 6px var(--accent-green);
  }
`;

const ActionButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const TerminalButton = styled.button`
  width: 100%;
  background: rgba(217, 119, 87, 0.12);
  color: #ffffff;
  border: 1px solid var(--accent-terracotta);
  padding: 0.6rem 0.8rem;
  border-radius: 6px;
  font-family: var(--font-mono);
  font-size: 0.85rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  .btn-bracket {
    color: var(--accent-terracotta);
    margin: 0 0.35rem;
  }

  &:hover {
    background: rgba(217, 119, 87, 0.25);
    box-shadow: 0 0 12px rgba(217, 119, 87, 0.3);
    transform: translateY(-1px);
  }
`;

const TerminalButtonDownload = styled.a`
  width: 100%;
  background: rgba(86, 182, 194, 0.1);
  color: var(--accent-cyan);
  border: 1px solid rgba(86, 182, 194, 0.4);
  padding: 0.6rem 0.8rem;
  border-radius: 6px;
  font-family: var(--font-mono);
  font-size: 0.85rem;
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  .btn-bracket {
    color: var(--accent-cyan);
    margin: 0 0.35rem;
  }

  &:hover {
    background: rgba(86, 182, 194, 0.2);
    border-color: var(--accent-cyan);
    box-shadow: 0 0 12px rgba(86, 182, 194, 0.25);
    transform: translateY(-1px);
  }
`;

const SocialContainer = styled.div`
  width: 100%;
  margin-top: 0.3rem;

  .social-header {
    font-size: 0.7rem;
    color: var(--text-muted);
    margin-bottom: 0.5rem;
    text-align: center;
    letter-spacing: 0.5px;
  }
`;

const SocialGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.45rem;
  width: 100%;
`;

const SocialBadge = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.35rem;
  background: var(--bg-code);
  border: 1px solid var(--border-color);
  padding: 0.4rem 0.5rem;
  border-radius: 6px;
  color: var(--text-secondary);
  font-size: 0.78rem;
  text-decoration: none;
  transition: all 0.2s ease;

  .badge-icon {
    font-weight: 700;
    color: ${(props) => props.$hoverColor || 'var(--accent-cyan)'};
    font-size: 0.82rem;
  }

  .badge-name {
    font-size: 0.75rem;
  }

  &:hover {
    border-color: ${(props) => props.$hoverColor || 'var(--accent-terracotta)'};
    color: #ffffff;
    transform: translateY(-2px);
  }
`;

const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 0;
`;

const DiagnosticsTitle = styled.div`
  font-size: 1.05rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 0.7rem;
  width: 100%;

  .diag-symbol {
    color: var(--accent-yellow);
    margin-right: 0.35rem;
  }
  .diag-underline {
    border-bottom: 1px dashed var(--border-color);
    margin-top: 6px;
    width: 100%;
    height: 1px;
  }
`;

const DiagnosticsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  width: 100%;
`;

const DiagRow = styled.div`
  display: flex;
  align-items: flex-start;
  font-size: 0.86rem;
  line-height: 1.5;
  width: 100%;
  word-break: break-word;

  @media (max-width: 600px) {
    flex-direction: column;
    font-size: 0.8rem;
  }
`;

const DiagKey = styled.span`
  min-width: 130px;
  font-weight: 600;
  white-space: nowrap;

  @media (max-width: 600px) {
    min-width: auto;
    margin-bottom: 2px;
  }
`;

const DiagSeparator = styled.span`
  color: var(--text-muted);
  margin-right: 0.65rem;

  @media (max-width: 600px) {
    display: none;
  }
`;

const DiagValue = styled.span`
  color: var(--text-primary);
  flex: 1;
  word-break: break-word;
`;

const PaletteSection = styled.div`
  margin-top: 1.5rem;
  padding-top: 1rem;
  border-top: 1px dashed var(--border-color);
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: center;
  width: 100%;
  overflow-x: auto;
`;

const PaletteRow = styled.div`
  display: flex;
  gap: 4px;
`;

const PaletteSquare = styled.div`
  width: 28px;
  height: 14px;
  border-radius: 2px;
  cursor: pointer;
  transition: transform 0.15s ease;

  &:hover {
    transform: scale(1.15);
  }

  @media (max-width: 512px) {
    width: 20px;
    height: 12px;
  }
`;