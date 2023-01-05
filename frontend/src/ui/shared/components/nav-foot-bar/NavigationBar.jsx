import React from "react";
// import {Navbar, Col} from "react-bootstrap";
import LLLLogo from "../../../../../images/logoAssetsSVG/logoBase-xxs.svg";
import LLLLabel from "../../../../../images/logoAssetsSVG/lLabel-white.svg"
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import button from "bootstrap/js/src/button.js";
import {SignInSignUpModal} from "../main-nav/sign-in/SignInSignUpModal.jsx";
import {Link} from "react-router-dom";




// export function NavigationBar() {
//     return (
//         <Navbar id={"navFootBgColor"} className={"nav"}>
//                 <Col sm={1} id={"llLogoCol"} className={"logoCol"}>
//                     <a href={"/"}><img src={LLLLogo} id={"lLLLogoBase"} alt={'Little Library Locator Logo'}/></a>
//                 </Col>
//             <img src={LLLLabel} id={"LLLLabel"} className={"llLogo"}/>
//         </Navbar>
//     );
// }



export function NavigationBar() {


    return (
        <>
            {[false].map((expand) => (
                <Navbar key={expand} id={"navFootBgColor"} expand={expand} className="mb-0">
                    <Container fluid>
                        <Navbar.Brand href="/"><img src={LLLLogo} id={"lLLLogoBase"} alt={'Little Library Locator Logo'}/></Navbar.Brand>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                        >
                            <Offcanvas.Header closeButton id={"navFootBgColor"}>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`} >
                                    <img src={LLLLabel} id={"LLLLabel"} className={"llLogo"}/>
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body id={"navFootBgColor"}>
                                <Nav id={"navText"} className="justify-content-end flex-grow-1 pe-3">
                                    <Nav.Link href="/">Home</Nav.Link>
                                    <Nav.Link href="/profile-landing">Profile</Nav.Link>
                                    <Nav.Link href="/event-create-page">Plan an Event</Nav.Link>
                                    <Nav.Link href="/library-create">Add a Library</Nav.Link>
                                    <Nav.Link href="/about-us">About Us</Nav.Link>
                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
        </>
    );
}

