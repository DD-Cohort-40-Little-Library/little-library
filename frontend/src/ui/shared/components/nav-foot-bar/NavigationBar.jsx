import React from "react";
import {Container, Nav, Navbar, NavDropdown, Button} from "react-bootstrap";
import {Link} from "react-router-dom";
import styles from "./nav-footer.module.css";
//PUT IN OUR LLL LOGO ONCE COMPLETE
import littleLibraryLocatorLogo from "../../../../../images/location-pins/full-scale/little-library-pin.png";
import {SignInSignUpModal} from "../main-nav/sign-in/SignInSignUpModal.jsx";

export function NavigationBar() {
    return (
        <Navbar className={styles.navFootBgColor} >
            <Container className={"d-flex justify-content-between"}>
                <img src={littleLibraryLocatorLogo} alt={'Little Library Locator Logo'}/>
                <Navbar.Brand className={'fs-1 justify-content-center ps-5'} href="/">Little Library Locator</Navbar.Brand>
               <Nav>
                    <Container>
                        <button type={"submit"}>RENDER MY ACCOUNT</button>
                        <SignInSignUpModal id="signInSignUpModal"/>
                    </Container>
               </Nav>
            </Container>
        </Navbar>
    );
}