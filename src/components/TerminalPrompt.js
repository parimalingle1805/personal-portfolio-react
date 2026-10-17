import React, { useState, useRef, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const TerminalPrompt = ({ onCommand }) => {
  const [inputVal, setInputVal] = useState('');
  const [feedback, setFeedback] = useState(null);
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = inputVal.trim();
    if (!trimmed) return;

    if (trimmed.toLowerCase() === 'help') {
      setFeedback({
        type: 'info',
        msg: 'Available commands: /home, /summary, /experience, /projects, /certificates, /contact, /resume, fastfetch, clear'
      });
      setInputVal('');
      return;
    }

    if (trimmed.toLowerCase() === 'clear') {
      setFeedback(null);
      setInputVal('');
      return;
    }

    const handled = onCommand(trimmed);
    if (handled) {
      setFeedback({
        type: 'success',
        msg: `Executed: ${trimmed}`
      });
      setInputVal('');
      setTimeout(() => {
        setFeedback((prev) => (prev?.msg.startsWith('Executed:') ? null : prev));
      }, 2500);
    } else {
      setFeedback({
        type: 'error',
        msg: `zsh: command not found: ${trimmed}. Type "help" or /experience, /projects, /contact, fastfetch...`
      });
      setInputVal('');
      setTimeout(() => {
        setFeedback((prev) => (prev?.type === 'error' ? null : prev));
      }, 4000);
    }
  };

  // Keyboard shortcut: pressing '/' focuses the terminal input if not already typing
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === '/' && document.activeElement !== inputRef.current && !['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName)) {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <PromptContainer>
      {feedback && (
        <FeedbackBanner $type={feedback.type}>
          <span className="prefix">{feedback.type === 'error' ? '✖' : 'ℹ'}</span>
          <span>{feedback.msg}</span>
          <button className="close-btn" onClick={() => setFeedback(null)}>✕</button>
        </FeedbackBanner>
      )}

      <PromptInner onSubmit={handleSubmit}>
        <PromptLabel>
          <span className="user">parimal</span>
          <span className="at">@</span>
          <span className="host">cli</span>
          <span className="path">:~$</span>
        </PromptLabel>
        <PromptSymbol>❯</PromptSymbol>
        <InputWrapper>
          <CommandInput
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder="Type /experience, /projects, /certificates, /contact, /resume, or fastfetch... (press '/' to focus)"
            autoComplete="off"
            spellCheck="false"
          />
        </InputWrapper>
        <SubmitHint type="submit">↵ Enter</SubmitHint>
      </PromptInner>
    </PromptContainer>
  );
};

export default TerminalPrompt;

const slideUp = keyframes`
  from {
    transform: translateY(10px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const PromptContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  background-color: rgba(13, 15, 18, 0.95);
  backdrop-filter: blur(12px);
  border-top: 1px solid var(--border-color);
  box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.5);
  padding: 0.6rem 1rem;

  @media (max-width: 512px) {
    padding: 0.45rem 0.5rem;
  }
`;

const FeedbackBanner = styled.div`
  max-width: 1200px;
  width: 100%;
  box-sizing: border-box;
  word-break: break-word;
  margin: 0 auto 0.5rem auto;
  padding: 0.4rem 0.8rem;
  border-radius: 6px;
  font-size: 0.82rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  animation: ${slideUp} 0.2s ease-out;
  background: ${(props) =>
    props.$type === 'error'
      ? 'rgba(224, 108, 117, 0.15)'
      : 'rgba(86, 182, 194, 0.15)'};
  border: 1px solid
    ${(props) =>
      props.$type === 'error' ? 'var(--accent-red)' : 'var(--accent-cyan)'};
  color: ${(props) =>
    props.$type === 'error' ? 'var(--accent-red)' : 'var(--accent-cyan)'};

  .prefix {
    font-weight: bold;
    flex-shrink: 0;
  }

  .close-btn {
    margin-left: auto;
    background: transparent;
    border: none;
    color: inherit;
    cursor: pointer;
    font-size: 0.9rem;
    padding: 0 0.3rem;
    opacity: 0.7;
    flex-shrink: 0;
    &:hover {
      opacity: 1;
    }
  }
`;

const PromptInner = styled.form`
  max-width: 1200px;
  width: 100%;
  box-sizing: border-box;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: 0.45rem 0.8rem;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;

  @media (max-width: 512px) {
    padding: 0.35rem 0.5rem;
    gap: 0.35rem;
  }

  &:focus-within {
    border-color: var(--accent-terracotta);
    box-shadow: 0 0 0 2px var(--accent-terracotta-glow);
  }
`;

const PromptLabel = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.85rem;
  white-space: nowrap;

  .user {
    color: var(--accent-green);
    font-weight: 600;
  }
  .at {
    color: var(--text-muted);
  }
  .host {
    color: var(--accent-cyan);
  }
  .path {
    color: var(--accent-yellow);
    margin-left: 2px;
  }

  @media (max-width: 640px) {
    display: none;
  }
`;

const PromptSymbol = styled.span`
  color: var(--accent-terracotta);
  font-size: 1rem;
  font-weight: 700;
`;

const InputWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const CommandInput = styled.input`
  width: 100%;
  background: transparent;
  border: none;
  outline: none;
  color: var(--text-primary);
  font-family: var(--font-mono);
  font-size: 0.88rem;

  &::placeholder {
    color: var(--text-muted);
    font-size: 0.82rem;
  }

  @media (max-width: 512px) {
    font-size: 0.8rem;
    &::placeholder {
      font-size: 0.74rem;
    }
  }
`;

const SubmitHint = styled.button`
  background: rgba(217, 119, 87, 0.15);
  border: 1px solid var(--accent-terracotta);
  color: var(--accent-terracotta);
  font-family: var(--font-mono);
  font-size: 0.75rem;
  padding: 0.2rem 0.55rem;
  border-radius: 4px;
  cursor: pointer;
  white-space: nowrap;
  transition: background 0.2s ease;

  &:hover {
    background: rgba(217, 119, 87, 0.3);
  }

  @media (max-width: 500px) {
    display: none;
  }
`;
