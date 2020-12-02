//
//  GENERATE SKELETON PAKE RAFCE DARI PLUGIN ES7 REACT DSZNAHDER ─────
//


    
import React from 'react'
import {Container,Navbar,Nav} from 'react-bootstrap' 
const Header = () => {
    return (
<header>
    <Navbar bg="light" variant="light" expand="lg"  collapseOnSelect >
       <Container>
        <Navbar.Brand href="/">
                {/* <img 
                    alt=""
                    src="%PUBLIC_URL%/favicon-32x32.png"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"/> */}
                    Datu Sinar Jaya
            </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                          <Nav.Link href="/cart"><i class="fas fa-shopping-cart"></i>Keranjang</Nav.Link>
                        <Nav.Link href="login"><i class="fas fa-user"></i>Masuk</Nav.Link>
     
                    </Nav>
    
                </Navbar.Collapse>
        </Container>
    </Navbar>
</header>
    )
}

export default Header
