import React from "react";
import {Container, Nav, Navbar, NavDropdown, Button} from "react-bootstrap";
import styles from "./nav-footer.module.css";
import littleLibraryLocatorLogo from "../../../../../images/uiSharedImages/linkedin-icon-classic-footer.webp";
import {SignInSignUpModal} from "../main-nav/sign-in/SignInSignUpModal.jsx";
import {SignOutComponent} from "../main-nav/SignOut";

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
                        <SignOutComponent id="signOut"/>
                    </Container>
               </Nav>
            </Container>
        </Navbar>
    );
}