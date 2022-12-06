import React from "react";
import {Container, Nav, Navbar, NavDropdown, Button, Col, Row} from "react-bootstrap";
import LLLLogo from "../../../../../images/logoAssetsSVG/logoBase-xxs.svg";
import LLLLabel from "../../../../../images/logoAssetsSVG/lLabel-white.svg"

export function NavigationBar() {
    return (
        <Navbar id={"navFootBgColor"} className={"nav"}>
                <Col sm={1} id={"llLogoCol"} className={"logoCol"}>
                <img src={LLLLogo} id={"lLLLogoBase"} alt={'Little Library Locator Logo'}/>
                </Col>
                <img src={LLLLabel} id={"LLLLabel"} className={"llLogo"}/>
        </Navbar>
    );
}