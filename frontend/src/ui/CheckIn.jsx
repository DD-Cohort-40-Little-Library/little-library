import React from "react";
import {Container, Row} from "react-bootstrap";
import {CheckInForm} from "./library-details/CheckInForm.jsx";



export function CheckIn() {
    return(
        <>
        <Container>
            <Row>
                <CheckInForm/>
            </Row>
        </Container>
        </>
    )
}