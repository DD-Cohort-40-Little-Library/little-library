import React from "react";
import {Container, Nav, Navbar, NavDropdown, Button} from "react-bootstrap";
import {Link} from "react-router-dom";
import styles from "./nav-footer.module.css";
//PUT IN OUR LLL LOGO ONCE COMPLETE
import linkedIn from "../../uiSharedImages/linkedin-icon-classic-footer.webp";
import {SignInSignUpModal} from "../log-in-modals/SignInSignUp.jsx";

export function Navigation() {
    return (
        <Navbar className={styles.navFootBgColor} expand='xxl'>
            <Container className={"d-flex justify-content-between"}>
                <img src={linkedIn} alt={'Little Library Locator Logo'}/>
                <Navbar.Brand className={'fs-1 justify-content-center ps-5'} href="#home">Little Library Locator</Navbar.Brand>

            {/* *********************** option1, more like wireframe but dropped due to rec of George based on form in dropdown ***************** */}

                {/*<Navbar.Toggle aria-controls="basic-navbar-nav" />*/}
                {/*<Navbar.Collapse className={'flex-grow-0'} id="basic-navbar-nav">*/}
                {/*    <Nav>*/}
                {/*        /!*<Nav.Link href="#home">Home</Nav.Link>*!/*/}
                {/*        /!*<Nav.Link href="#link">Link</Nav.Link>*!/*/}
                {/*        <NavDropdown title="Sign-In" id="basic-nav-dropdown">*/}
                {/*/!* ************************** UPDATE ACTIONS BELOW ********************** *!/*/}
                {/*            /!*put on 'sign in model'*!/*/}
                {/*            /!*          <NavDropdown.Item href="#action/3.1">Input User ID</NavDropdown.Item>*!/*/}
                {/*            /!*          <NavDropdown.Item href="#action/3.2">Input Password</NavDropdown.Item>*!/*/}
                {/*            <NavDropdown.Item href="#action/3.3">My Account(Rendered)</NavDropdown.Item>*/}
                {/*            <NavDropdown.Item href="#action/3.4">Sign-In/Log Out(Rendered)</NavDropdown.Item>*/}
                {/*            /!*put on 'sign in model'*!/*/}
                {/*            <NavDropdown.Item href="#action/3.5">Forgot Password</NavDropdown.Item>*/}
                {/*            <NavDropdown.Divider />*/}
                {/*            <NavDropdown.Item href="#action/3.6">Sign Up Here! (Render out)</NavDropdown.Item>*/}
                {/*        </NavDropdown>*/}
                {/*</Navbar.Collapse>*/}



            {/* ***************************** option2, all encompassing modal *************** */}
                   <Nav>
                        <Container>
                            <SignInSignUpModal id="signInSignUpModal"/>
                        </Container>
                   </Nav>
            </Container>
        </Navbar>
    );
}