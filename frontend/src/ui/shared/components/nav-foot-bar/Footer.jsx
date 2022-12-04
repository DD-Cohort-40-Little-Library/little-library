import React from "react";
import {Container, Col, Row} from "react-bootstrap";
import styles from "./nav-footer.module.css";

export function Footer() {
    return (
        <Container fluid className={styles.navFootBgColor} expand="lg">
            <Container className={'footer'}>
                <Row className={'text-center pt-2'}>
                    <p>Created by the best team ever, ALL of who did a fantastic job!</p>
                </Row>
            </Container>
        </Container>
    )
}