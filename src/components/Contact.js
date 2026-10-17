import React, { useState } from 'react';
import styled from 'styled-components';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [copied, setCopied] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleCopy = (textToCopy, field) => {
    navigator.clipboard.writeText(textToCopy);
    setCopied(field);
    setTimeout(() => setCopied(''), 2000);
  };

  const contactInfo = [
    {
      iconText: '✉',
      label: 'EMAIL',
      text: 'parimal.ingle18@gmail.com',
      copyable: true,
    },
    {
      iconText: '☎',
      label: 'PHONE',
      text: '+1 (562) 846-0322',
      copyable: true,
    },
    {
      iconText: '⚲',
      label: 'LOCATION',
      text: 'Pune, IN',
      copyable: false,
    },
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      label: 'gh/parimalingle1805',
      url: 'https://github.com/parimalingle1805',
      color: '#ffffff',
      iconText: 'gh',
    },
    {
      name: 'LinkedIn',
      label: 'in/parimalingle',
      url: 'https://www.linkedin.com/in/parimalingle/',
      color: '#0077B5',
      iconText: 'in',
    },
    {
      name: 'Reddit',
      label: 'u/parimalingle1805',
      url: 'https://www.reddit.com/user/parimalingle1805/',
      color: '#FF4500',
      iconText: 'r/',
    },
    {
      name: 'X',
      label: '@IngleParimal',
      url: 'https://x.com/IngleParimal',
      color: '#1da1f2',
      iconText: '𝕏',
    },
  ];

  return (
    <SectionContainer id="contact">
      <SectionCommandHeader>
        <span className="cmd-prefix">&gt;</span>
        <span className="cmd-name"> executing tool:</span>
        <span className="cmd-call"> dispatch_message.compose(channel="FORMSPREE_REST_ENDPOINT")</span>
      </SectionCommandHeader>

      <ContactGrid>
        {/* Left Side: Interactive CLI Payload Sender (Preserves Formspree POST) */}
        <TuiFormCard>
          <CardTopBar>
            <span className="bar-title">POST https://formspree.io/f/xvgrrvla</span>
            <span className="bar-tag">ENCRYPTED {'//'} TLS 1.3</span>
          </CardTopBar>

          <CardFormBody>
            <FormHeaderDesc>
              Send an inquiry directly to my inbox. All payloads are securely forwarded via Formspree webhook integration.
            </FormHeaderDesc>

            <StyledForm
              action="https://formspree.io/f/xvgrrvla"
              method="POST"
            >
              <FormGroup>
                <FieldLabel>
                  <span className="arg-prefix">--</span>name <span className="req">*</span>
                </FieldLabel>
                <TerminalInput
                  type="text"
                  name="name"
                  placeholder="e.g. Linus Torvalds"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </FormGroup>

              <FormGroup>
                <FieldLabel>
                  <span className="arg-prefix">--</span>email <span className="req">*</span>
                </FieldLabel>
                <TerminalInput
                  type="email"
                  name="email"
                  placeholder="e.g. recruiter@company.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </FormGroup>

              <FormGroup>
                <FieldLabel>
                  <span className="arg-prefix">--</span>message <span className="req">*</span>
                </FieldLabel>
                <TerminalTextarea
                  name="message"
                  placeholder="Type your message, opportunity details, or questions..."
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </FormGroup>

              <SubmitTerminalButton type="submit">
                <span className="btn-bracket">[</span> EXECUTE DISPATCH {'//'} SEND MESSAGE <span className="btn-bracket">]</span>
              </SubmitTerminalButton>
            </StyledForm>
          </CardFormBody>
        </TuiFormCard>

        {/* Right Side: Direct Diagnostics & Contact Endpoints */}
        <DirectInfoColumn>
          <InfoCard>
            <CardTopBar>
              <span className="bar-title">DIRECT_SOCKET_INFO</span>
              <span className="bar-tag">CLICK_TO_COPY</span>
            </CardTopBar>

            <InfoList>
              {contactInfo.map((info, index) => (
                <InfoItem
                  key={index}
                  onClick={() => info.copyable && handleCopy(info.text, info.label)}
                  $isClickable={info.copyable}
                >
                  <div className="icon-wrapper">{info.iconText}</div>
                  <div className="info-content">
                    <span className="info-label">{info.label} {'//'}</span>
                    <span className="info-text">{info.text}</span>
                  </div>
                  {info.copyable && (
                    <CopyStatus>
                      {copied === info.label ? (
                        <span className="copied-tag">✓ COPIED</span>
                      ) : (
                        <span className="copy-hint">[COPY]</span>
                      )}
                    </CopyStatus>
                  )}
                </InfoItem>
              ))}
            </InfoList>
          </InfoCard>

          <SocialEndpointsCard>
            <CardTopBar>
              <span className="bar-title">EXTERNAL_LINKS {'//'} NETWORK_ENDPOINTS</span>
            </CardTopBar>

            <SocialList>
              {socialLinks.map((social, index) => (
                <SocialEndpoint
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                >
                  <span className="endpoint-icon" style={{ color: social.color }}>
                    {social.iconText}
                  </span>
                  <span className="endpoint-name">{social.name}</span>
                  <span className="endpoint-url">{social.label}</span>
                  <span className="endpoint-arrow">↗</span>
                </SocialEndpoint>
              ))}
            </SocialList>
          </SocialEndpointsCard>
        </DirectInfoColumn>
      </ContactGrid>
    </SectionContainer>
  );
};

export default Contact;

// --- STYLED COMPONENTS ---

const SectionContainer = styled.section`
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  margin-bottom: 4rem;
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
  border-left: 3px solid var(--accent-green);
  border-radius: 6px;
  word-break: break-word;
  overflow-wrap: anywhere;

  .cmd-prefix {
    color: var(--accent-green);
    font-weight: 700;
  }
  .cmd-name {
    color: var(--text-secondary);
  }
  .cmd-call {
    color: var(--accent-terracotta);
    font-weight: 500;
    word-break: break-all;
  }

  @media (max-width: 640px) {
    font-size: 0.85rem;
    flex-wrap: wrap;
  }
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 1.5rem;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;

  @media (max-width: 900px) {
    grid-template-columns: minmax(0, 1fr);
  }
`;

const TuiFormCard = styled.div`
  width: 100%;
  max-width: 100%;
  min-width: 0;
  box-sizing: border-box;
  background-color: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
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
    color: var(--accent-terracotta);
    font-weight: 600;
    word-break: break-all;
  }
  .bar-tag {
    color: var(--text-muted);
    font-size: 0.7rem;
    white-space: nowrap;
  }
`;

const CardFormBody = styled.div`
  padding: 1.5rem;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 512px) {
    padding: 0.85rem;
  }
`;

const FormHeaderDesc = styled.p`
  font-size: 0.84rem;
  color: var(--text-secondary);
  line-height: 1.5;
  margin-bottom: 1.2rem;
  word-break: break-word;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  box-sizing: border-box;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  width: 100%;
  box-sizing: border-box;
`;

const FieldLabel = styled.label`
  font-size: 0.78rem;
  color: var(--text-muted);
  display: flex;
  align-items: center;
  gap: 2px;

  .arg-prefix {
    color: var(--accent-terracotta);
  }
  .req {
    color: var(--accent-red);
  }
`;

const inputShared = `
  width: 100%;
  box-sizing: border-box;
  background-color: var(--bg-code);
  border: 1px solid var(--border-color);
  border-radius: 6px;
  padding: 0.65rem 0.85rem;
  color: var(--text-primary);
  font-family: var(--font-mono);
  font-size: 0.88rem;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;

  &::placeholder {
    color: var(--text-muted);
    font-size: 0.82rem;
  }

  &:focus {
    outline: none;
    border-color: var(--accent-terracotta);
    box-shadow: 0 0 0 2px var(--accent-terracotta-glow);
  }
`;

const TerminalInput = styled.input`
  ${inputShared}
`;

const TerminalTextarea = styled.textarea`
  ${inputShared}
  resize: vertical;
`;

const SubmitTerminalButton = styled.button`
  margin-top: 0.5rem;
  width: 100%;
  box-sizing: border-box;
  background: rgba(217, 119, 87, 0.15);
  color: #ffffff;
  border: 1px solid var(--accent-terracotta);
  padding: 0.8rem 1rem;
  border-radius: 8px;
  font-family: var(--font-mono);
  font-size: 0.88rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  word-break: break-word;

  .btn-bracket {
    color: var(--accent-terracotta);
    margin: 0 0.35rem;
  }

  &:hover {
    background: rgba(217, 119, 87, 0.3);
    box-shadow: 0 0 16px rgba(217, 119, 87, 0.35);
    transform: translateY(-1px);
  }

  @media (max-width: 512px) {
    font-size: 0.78rem;
    padding: 0.65rem 0.5rem;
  }
`;

const DirectInfoColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
  max-width: 100%;
  min-width: 0;
  box-sizing: border-box;
`;

const InfoCard = styled.div`
  background-color: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
`;

const InfoList = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  width: 100%;
  box-sizing: border-box;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  background: var(--bg-code);
  border: 1px solid var(--border-color);
  padding: 0.7rem 0.85rem;
  border-radius: 6px;
  cursor: ${(props) => (props.$isClickable ? 'pointer' : 'default')};
  transition: all 0.2s ease;
  width: 100%;
  box-sizing: border-box;

  .icon-wrapper {
    font-size: 1.1rem;
    color: var(--accent-cyan);
    min-width: 24px;
    text-align: center;
    flex-shrink: 0;
  }

  .info-content {
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 0;
    overflow: hidden;

    .info-label {
      font-size: 0.68rem;
      color: var(--text-muted);
    }
    .info-text {
      font-size: 0.85rem;
      color: var(--text-primary);
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
  }

  ${(props) =>
    props.$isClickable &&
    `
    &:hover {
      border-color: var(--accent-cyan);
      background: rgba(86, 182, 194, 0.05);
      transform: translateX(3px);
    }
  `}
`;

const CopyStatus = styled.div`
  flex-shrink: 0;
  .copied-tag {
    color: var(--accent-green);
    font-size: 0.72rem;
    font-weight: 600;
  }
  .copy-hint {
    color: var(--text-muted);
    font-size: 0.72rem;
  }
`;

const SocialEndpointsCard = styled(InfoCard)``;

const SocialList = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
  box-sizing: border-box;
`;

const SocialEndpoint = styled.a`
  display: flex;
  align-items: center;
  gap: 0.65rem;
  background: var(--bg-code);
  border: 1px solid var(--border-color);
  padding: 0.6rem 0.85rem;
  border-radius: 6px;
  text-decoration: none;
  transition: all 0.2s ease;
  width: 100%;
  box-sizing: border-box;

  .endpoint-icon {
    font-weight: 700;
    font-size: 0.9rem;
    min-width: 20px;
    text-align: center;
    flex-shrink: 0;
  }

  .endpoint-name {
    color: var(--text-primary);
    font-size: 0.85rem;
    font-weight: 500;
    flex-shrink: 0;
  }

  .endpoint-url {
    color: var(--text-muted);
    font-size: 0.78rem;
    margin-left: auto;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 120px;
  }

  .endpoint-arrow {
    color: var(--text-muted);
    font-size: 0.85rem;
    transition: transform 0.2s ease;
    flex-shrink: 0;
  }

  &:hover {
    border-color: var(--accent-terracotta);
    background: rgba(217, 119, 87, 0.06);

    .endpoint-arrow {
      color: var(--accent-terracotta);
      transform: translate(2px, -2px);
    }
  }
`;