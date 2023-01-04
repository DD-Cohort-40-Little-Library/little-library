import React from "react";
import {Container, Row} from "react-bootstrap";
import {CheckInFormLibrary} from "./library-details/CheckInFormLibrary.jsx";



export function CheckIn() {
    return(
        <>
        <Container>
            <Row>
                <CheckInFormLibrary/>
            </Row>
        </Container>
        </>
    )
}