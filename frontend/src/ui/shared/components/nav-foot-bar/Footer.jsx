import React from "react";
import {Container, Col, Row} from "react-bootstrap";

export function Footer() {
    return (
        <Container fluid id={"navFoot"} expand="lg">
            <Container className={'footer'}>
                <Row>
                    <p>2022 Little Library Locator</p>
                </Row>
            </Container>
        </Container>
    )
}