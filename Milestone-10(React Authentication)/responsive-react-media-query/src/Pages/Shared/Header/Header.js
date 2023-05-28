import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar sticky="top" bg="dark" variant="dark" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Genius Car Mechanics</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav >
                            <Nav.Link href="/home#home">Home</Nav.Link>
                            <Nav.Link href="/home#services">Services</Nav.Link>
                            <Nav.Link href="/home#experts">Experts</Nav.Link>
                            {
                                user?.email ?
                                    <Button onClick={logOut} variant='light'>LogOut</Button> :
                                    <Nav.Link href="/login">Login</Nav.Link>
                            }
                        </Nav>
                        <Navbar.Text>
                            Signed in as: <a href="#login">{user?.displayName}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    );
};

export default Header;