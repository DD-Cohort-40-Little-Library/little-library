import React from "react";
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {Link} from "react-router-dom";
import styles from "./navFooter.module.css";
//PUT IN OUR LLL LOGO ONCE COMPLETE
import linkedIn from "../uiSharedImages/linkedin-icon-classic-footer.webp";

export function Navigation() {
    return (
        <Navbar className={styles.navFootBgColor} expand="xxl">
            <Container className={"d-flex justify-content-between"}>
                <img src={linkedIn} alt={'Little Library Locator Logo'}/>
                <Navbar.Brand className={'fs-1'} href="#home">Little Library Locator</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className={'flex-grow-0'} id="basic-navbar-nav">
                    <Nav>
                        {/*<Nav.Link href="#home">Home</Nav.Link>*/}
                        {/*<Nav.Link href="#link">Link</Nav.Link>*/}
                        <NavDropdown  title="" id="basic-nav-dropdown">
            {/* ************************** UPDATE ACTIONS BELOW ******************** */}
                            <NavDropdown.Item href="#action/3.1">Input User ID</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Input Password</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">My Account</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">Sign-In/Out</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.5">Forgot Password</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.6">Sign Up Here!</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}