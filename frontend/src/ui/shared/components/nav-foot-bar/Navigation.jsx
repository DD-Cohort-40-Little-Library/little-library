import React from "react";
import {Container, Nav, Navbar, NavDropdown, Button} from "react-bootstrap";
import {Link} from "react-router-dom";
import styles from "./nav-footer.module.css";
import LLLLogo from "../../../../../images/logoAssetsSVG/logoBase-xxs.svg";
import LLLLabel from "../../../../../images/logoAssetsSVG/lLabel-xs.svg"
import {SignInSignUpModal} from "../log-in-modals/SignInSignUp.jsx";

export function Navigation() {
    return (
        <Navbar className={styles.navFootBgColor}>
            <Container className={"d-flex justify-content-between"}>
                <img src={LLLLogo} className={styles.lLLLogoBase} alt={'Little Library Locator Logo'}/>
                <img src={LLLLabel} className={styles.LLLLabel} />
                 <Nav>
                    <Container>
                        <SignInSignUpModal id="signInSignUpModal"/>
                    </Container>
                 </Nav>
            </Container>
        </Navbar>
    );
}