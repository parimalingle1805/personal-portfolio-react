import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
const Header = () => {

  const [burgerStatus, setBurgerStatus] = useState(false);

  return (
    <Container>
        <Menu>
            <NavLink className='logo' activeClassName='is-active' to='/personal-portfolio-react'>My Portfolio</NavLink>
            <NavLink className='link' activeClassName='is-active' to='/personal-portfolio-react'>Home</NavLink>
            <NavLink className='link' activeClassName='is-active' to='/about'>Summary</NavLink>
            <NavLink className='link' activeClassName='is-active' to='/projects'>Projects</NavLink>
            <NavLink className='link' activeClassName='is-active' to='/certifications'>Certificates</NavLink>
            <NavLink className='link' activeClassName='is-active' to='/workExp'>Work Experience</NavLink>
            <NavLink className='link' activeClassName='is-active' to='/contact'>Contact</NavLink>
        </Menu>
        <CustomMenu onClick={() => setBurgerStatus(true)} style={{"fontSize":"40px"}}/>
        <BurgerNav show={burgerStatus}>
            <CloseWrapper>
                <CustomClose onClick={() => setBurgerStatus(false)} style={{"fontSize":"40px"}}/>
            </CloseWrapper>
            <NavLink onClick={() => setBurgerStatus(false)} className='link' activeClassName='is-active' to='/personal-portfolio-react'>Home</NavLink>
            <NavLink onClick={() => setBurgerStatus(false)} className='link' activeClassName='is-active' to='/about'>Summary</NavLink>
            <NavLink onClick={() => setBurgerStatus(false)} className='link' activeClassName='is-active' to='/projects'>Projects</NavLink>
            <NavLink onClick={() => setBurgerStatus(false)} className='link' activeClassName='is-active' to='/certifications'>Certificates</NavLink>
            <NavLink onClick={() => setBurgerStatus(false)} className='link' activeClassName='is-active' to='/workExp'>Work Experience</NavLink>
            <NavLink onClick={() => setBurgerStatus(false)} className='link' activeClassName='is-active' to='/contact'>Contact</NavLink>
        </BurgerNav>
    </Container>
  )
}

export default Header;

const Container = styled.div`
    background-color: rgb(20, 20, 20);
    min-height: 8vh;
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
        font-size: 1.3em;
        font-weight: 500;
        text-transform: uppercase;
        padding: 0 10px;
        margin: 0 2vw;
        flex-wrap: nowrap;

        @media(max-width: 1550px){
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

const CustomMenu = styled(MenuIcon)`
    color: white;
    cursor: pointer;

    @media(min-width: 1550px){
        pointer-events: none;
        color: rgb(20, 20, 20);
    }
`;

const BurgerNav = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    color: white;
    background: rgb(20, 20, 20);
    width: 20%;
    z-index: 16;
    list-style: none;
    padding: 20px;
    display: flex;
    flex-direction: column;
    text-align: start;
    transform: ${props => props.show ? 'translateX(0%)': 'translateX(100%)'};
    transition: transform 0.3s ease-in;
    .link {
        color: white;
        text-decoration: none;
        text-transform: uppercase;
        padding: 15px 0;
        border-bottom: 2px solid rgb(255, 255, 255);
        a {
        font-weight: 600;
        }
    }

    @media(min-width: 1550px){
        display: none;
    }
    @media(max-width: 1080px){
        width: 30%;
    }
    @media(max-width: 720px){
        width: 40%;
    }
`;

const CustomClose = styled(CloseIcon)`
    cursor: pointer;
    color: white;

    @media(min-width: 1550px){
        color: black;
    }
`;

const CloseWrapper = styled.div`
    display:flex;
    justify-content: flex-end;
`;