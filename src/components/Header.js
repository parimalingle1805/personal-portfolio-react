import React, { useState } from 'react';
import styled from 'styled-components';

const navItems = [
  { id: 'home', label: '/home' },
  { id: 'summary', label: '/summary' },
  { id: 'experience', label: '/experience' },
  { id: 'projects', label: '/projects' },
  { id: 'certificates', label: '/certificates' },
  { id: 'contact', label: '/contact' },
];

const Header = ({ activeSection, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (id) => {
    if (onNavigate) {
      onNavigate(id);
    }
    setMobileMenuOpen(false);
  };

  return (
    <NavContainer>
      <NavInner>
        <Logo onClick={() => handleNavClick('home')}>
          <span className="prompt-tilde">~</span>
          <span className="prompt-name">parimal.ingle</span>
          <span className="prompt-cursor">_</span>
        </Logo>

        <DesktopNav>
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <NavButton
                key={item.id}
                $active={isActive}
                onClick={() => handleNavClick(item.id)}
              >
                {item.label}
              </NavButton>
            );
          })}
        </DesktopNav>

        <MobileToggle
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? '✕' : '☰'}
        </MobileToggle>
      </NavInner>

      {mobileMenuOpen && (
        <MobileMenu>
          {navItems.map((item) => (
            <MobileNavButton
              key={item.id}
              $active={activeSection === item.id}
              onClick={() => handleNavClick(item.id)}
            >
              <span className="arrow">❯</span> {item.label}
            </MobileNavButton>
          ))}
        </MobileMenu>
      )}
    </NavContainer>
  );
};

export default Header;

const NavContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  background-color: rgba(13, 15, 18, 0.94);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border-color);
  height: 60px;
`;

const NavInner = styled.div`
  max-width: 1200px;
  width: 100%;
  box-sizing: border-box;
  height: 100%;
  margin: 0 auto;
  padding: 0 1.2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 512px) {
    padding: 0 0.8rem;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.05rem;
  font-weight: 600;
  cursor: pointer;
  user-select: none;
  font-family: var(--font-mono);

  .prompt-tilde {
    color: var(--accent-terracotta);
    margin-right: 0.35rem;
    font-size: 1.2rem;
    font-weight: 700;
  }

  .prompt-name {
    color: var(--text-primary);
    transition: color 0.2s ease;
  }

  .prompt-cursor {
    color: var(--accent-green);
    animation: blink 1s step-start infinite;
    margin-left: 1px;
  }

  @keyframes blink {
    50% {
      opacity: 0;
    }
  }

  &:hover .prompt-name {
    color: var(--accent-cyan);
  }
`;

const DesktopNav = styled.nav`
  display: flex;
  align-items: center;
  gap: 0.4rem;

  @media (max-width: 820px) {
    display: none;
  }
`;

const NavButton = styled.button`
  background: ${(props) =>
    props.$active ? 'rgba(217, 119, 87, 0.15)' : 'transparent'};
  color: ${(props) =>
    props.$active ? 'var(--accent-terracotta)' : 'var(--text-secondary)'};
  border: 1px solid
    ${(props) =>
      props.$active ? 'var(--accent-terracotta)' : 'transparent'};
  padding: 0.35rem 0.75rem;
  border-radius: 6px;
  font-family: var(--font-mono);
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    color: var(--accent-terracotta);
    border-color: var(--border-hover);
    background: rgba(217, 119, 87, 0.08);
  }
`;

const MobileToggle = styled.button`
  display: none;
  background: transparent;
  border: 1px solid var(--border-color);
  color: var(--text-primary);
  font-size: 1.2rem;
  padding: 0.25rem 0.6rem;
  border-radius: 6px;
  cursor: pointer;
  font-family: var(--font-mono);

  @media (max-width: 820px) {
    display: block;
  }
`;

const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgba(16, 19, 24, 0.98);
  border-bottom: 1px solid var(--border-color);
  padding: 0.8rem 1.2rem;
  gap: 0.5rem;

  @media (min-width: 821px) {
    display: none;
  }
`;

const MobileNavButton = styled.button`
  background: ${(props) =>
    props.$active ? 'rgba(217, 119, 87, 0.15)' : 'transparent'};
  color: ${(props) =>
    props.$active ? 'var(--accent-terracotta)' : 'var(--text-secondary)'};
  border: none;
  text-align: left;
  padding: 0.6rem 0.8rem;
  border-radius: 6px;
  font-family: var(--font-mono);
  font-size: 0.9rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  .arrow {
    color: var(--accent-terracotta);
    font-size: 0.8rem;
  }

  &:hover {
    color: var(--accent-terracotta);
    background: rgba(217, 119, 87, 0.08);
  }
`;