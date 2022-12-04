import React from "react";
import {Container, Col, Row} from "react-bootstrap";


export function Footer() {
    return (
        <Container fluid id={'navFootBgColor'} expand="lg">
            <Container id={'footer'}>
                <Row className={'text-center pt-2'}>
                    <p>Created by the best team ever, ALL of who did a fantastic job!</p>
                </Row>
            </Container>
        </Container>

    )
}

