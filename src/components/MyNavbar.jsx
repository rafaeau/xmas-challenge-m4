import logo from "../assets/logo.png";
import { Navbar, Nav, Container, Badge } from "react-bootstrap";
import { Component } from 'react';
import { BiGlobe } from 'react-icons/bi';
import { BiMenu } from 'react-icons/bi';
import { FaUserCircle } from 'react-icons/fa';

class MyNavbar extends Component {
    render() {
        return (
            <Navbar className="navbar" variant="dark">
                <Container>
                    <Navbar.Brand>
                        <img src={logo} alt="logo" style={{ width: "100px" }} />
                    </Navbar.Brand>
                    <Nav className="text-center">
                        <Nav.Link href="#home" className="text-nav">Places to stay</Nav.Link>
                        <Nav.Link href="#features" className="text-nav">Experiences</Nav.Link>
                        <Nav.Link href="#pricing" className="text-nav">Online experiences</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#home" className="text-nav">Become a host</Nav.Link>
                        <Nav.Link href="#home"><BiGlobe style={{ fontSize: "20px" }} className="mt-n1 text-nav" /></Nav.Link>
                        <Badge pill className="pill-nav ml-2">
                            <div className="items-pill">
                            <BiMenu style={{ fontSize: "25px" }} className="mx-2"/>
                            <FaUserCircle style={{ fontSize: "30px" }} className="mr-2"/>
                            </div>
                        </Badge>
                    </Nav>
                </Container>
            </Navbar>
        )
    }
}

export default MyNavbar