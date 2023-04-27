import React from 'react';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {
  return (
    <Container>
        <Menu>
            <NavLink className='logo' activeClassName='is-active' to='/'>Portfolio</NavLink>
            <NavLink className='link' activeClassName='is-active' to='/'>Home</NavLink>
            <NavLink className='link' activeClassName='is-active' to='/'>About</NavLink>
            <NavLink className='link' activeClassName='is-active' to='/'>Projects</NavLink>
            <NavLink className='link' activeClassName='is-active' to='/'>Contact</NavLink>
        </Menu>
    </Container>
  )
}

export default Header;

const Container = styled.div`
  background-color: rgb(20, 20, 20);
  min-height: 10vh;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: center;
  color: white;

  .link {
    color: white;
    text-decoration: none;
    font-size: 2em;
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    margin: 0 3vw;
    flex-wrap: nowrap;

    @media(max-width: 1200px){
      display:none;
    }
  }

  .logo {
    margin-right: 10vw;
    color: white;
    text-decoration: none;
    font-size: 2em;
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
  }
  
`;