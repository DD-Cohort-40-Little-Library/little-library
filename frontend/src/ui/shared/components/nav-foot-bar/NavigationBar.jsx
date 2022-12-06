import React from "react";
import {Container, Nav, Navbar, NavDropdown, Button, Col, Row} from "react-bootstrap";
import LLLLogo from "../../../../../images/logoAssetsSVG/logoBase-xxs.svg";
import LLLLabel from "../../../../../images/logoAssetsSVG/lLabel-white.svg"

export function NavigationBar() {
    return (
        <Navbar id={"navFootBgColor"}>
            <Container>
                <Col sm={1} id={"llLogoCol"}>
                <img src={LLLLogo} id={"lLLLogoBase"} alt={'Little Library Locator Logo'}/>
                </Col>
                <Col md={8} id={"llLogoLabelCol"}>
                <img src={LLLLabel} id={"LLLLabel"}/>
                </Col>
            </Container>
        </Navbar>
    );
}