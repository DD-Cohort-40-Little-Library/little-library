import React from "react";
import {Container, Nav, Navbar, NavDropdown, Button} from "react-bootstrap";
import {SignInSignUpModal} from "../main-nav/sign-in/SignInSignUpModal.jsx";
import styles from "./nav-footer.module.css";
import LLLLogo from "../../../../../images/logoAssetsSVG/logoBase-xxs.svg";
import LLLLabel from "../../../../../images/logoAssetsSVG/lLabel-xs.svg"
import {SignOutComponent} from "../main-nav/SignOut.jsx";

export function NavigationBar() {
    return (
        <Navbar className={styles.navFootBgColor}>
            <Container className={"d-flex justify-content-between"}>
                <img src={LLLLogo} className={styles.lLLLogoBase} alt={'Little Library Locator Logo'}/>
                <img src={LLLLabel} className={styles.LLLLabel}/>
                 <Nav>
                    <Container>
                        <SignInSignUpModal id="signInSignUpModal"/>
                        <SignOutComponent/>
                    </Container>
                 </Nav>
            </Container>
        </Navbar>
    );
}