import React from "react";
import {Container, Row} from "react-bootstrap";
import {LibraryDetails} from "./LibraryDetails.jsx";
import {CheckInForm} from "./CheckInForm";

export function CheckIn() {
    return(
        <>
        <Container>
            <Row>
                <LibraryDetails/>
                <CheckInForm/>
            </Row>
        </Container>
        </>
    )
}