//
//  GENERATE SKELETON PAKE RAFCE DARI PLUGIN ES7 REACT DSZNAHDER ─────
//


    
import React from 'react'
import {Container,Navbar,Nav} from 'react-bootstrap' 
import {LinkContainer} from 'react-bootstrap'

const Header = () => {
    return (
<header>
    <Navbar bg="light" variant="light" expand="lg"  collapseOnSelect >
       <Container>
       <LinkContainer to='/'>                <img 
                    alt=""
                    src="/favicon-32x32.png"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"/> Datu Sinar Jaya
            </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                          <LinkContainer href="/cart"><i class="fas fa-shopping-cart"></i> Keranjang</LinkContainer>
                        <LinkContainer href="login"><i class="fas fa-user"></i> Masuk</LinkContainer>
     
                    </Nav>
    
                </Navbar.Collapse>
        </Container>
    </Navbar>
</header>
    )
}

export default Header
