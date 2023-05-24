import React from 'react'
import logo from '../../assets/img/logo.svg'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink , useNavigate } from 'react-router-dom';





function Header() {
    return (
        <>
            <header>

            
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home">
                            <img
                                alt=""
                                src={logo}
                                width="30"
                                height="30"
                                className="d-inline-block align-top"
                            />{' '}
                            React Bootstrap
                        </Navbar.Brand>
                        <NavLink style={{color:'white'}} className="nav-link" to="/about">About</NavLink>
                        <NavLink style={{color:'white'}} className="nav-link" to="/contact">Contact</NavLink>
                        <NavLink style={{color:'white'}} className="nav-link" to="/employee">Employee</NavLink>
                    </Container>
                    
                </Navbar>
               

            </header>

        </>
    )
}

export default Header