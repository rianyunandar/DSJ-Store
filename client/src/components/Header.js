//
//  GENERATE SKELETON PAKE RAFCE DARI PLUGIN ES7 REACT DSZNAHDER ─────
//


    
import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
<header>
    <Navbar bg="light" variant="light" expand="lg"  collapseOnSelect >
       <Container>
       <LinkContainer to='/'> 
       <Navbar.Brand>          
        <img 
                    alt=""
                    src="/favicon-32x32.png"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"/> Datu Sinar Jaya
                    </Navbar.Brand>
            </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                          <LinkContainer  to="/cart">
                          <Nav.Link>
                              <i class="fas fa-shopping-cart"></i> Keranjang
                              </Nav.Link>
                              </LinkContainer>
                        <LinkContainer  to="login">
                        <Nav.Link>
                            <i class="fas fa-user"></i> Masuk
                            </Nav.Link>
                            </LinkContainer>
     
                    </Nav>
    
                </Navbar.Collapse>
        </Container>
    </Navbar>
</header>
    )
}

export default Header
