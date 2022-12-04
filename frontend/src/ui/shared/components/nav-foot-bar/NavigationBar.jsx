import React from "react";
import {Container, Nav, Navbar, NavDropdown, Button} from "react-bootstrap";
import {SignInSignUpModal} from "../main-nav/sign-in/SignInSignUpModal.jsx";
import LLLLogo from "../../../../../images/logoAssetsSVG/logoBase-xxs.svg";
import LLLLabel from "../../../../../images/logoAssetsSVG/lLabel-xs.svg"

export function NavigationBar() {
    return (
        <Navbar id={'navFootBgColor'}>
            <Container className={"d-flex justify-content-between"}>
                <img src={LLLLogo} id={'lLLLogoBase'} alt={'Little Library Locator Logo'}/>
                <img src={LLLLabel} id={'LLLLabel'}/>
                 <Nav>
                    <Container>
                        <SignInSignUpModal id={"signInSignUpModal"}/>
                    </Container>
                 </Nav>
            </Container>
        </Navbar>
    );
}