import React from "react";
import {Container, Nav, Navbar, NavDropdown, Button} from "react-bootstrap";
import {Link} from "react-router-dom";
import styles from "./nav-footer.module.css";
//PUT IN OUR LLL LOGO ONCE COMPLETE
import LLLLogo from "../../";
import {SignInSignUpModal} from "../log-in-modals/SignInSignUp.jsx";

export function Navigation() {
    return (
        <Navbar className={styles.navFootBgColor} expand='xxl'>
            <Container className={"d-flex justify-content-between"}>
                <img src={LLLLogo} alt={'Little Library Locator Logo'}/>
                <Navbar.Brand className={'fs-1 justify-content-center ps-5'} href="/">Little Library Locator</Navbar.Brand>
                 <Nav>
                        <Container>
                            <SignInSignUpModal id="signInSignUpModal"/>
                        </Container>
                 </Nav>
            </Container>
        </Navbar>
    );
}