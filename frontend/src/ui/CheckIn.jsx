import React from "react";
import {Container, Row} from "react-bootstrap";
import {LibraryDetails} from "./LibraryDetails.jsx";
import {CheckInForm} from "./CheckInForm";
import {CheckInDisplay} from "./CheckInDisplay";


export function CheckIn() {
    return(
        <>
        <Container>
            <Row>
                <LibraryDetails/>
                <CheckInForm/>
                <CheckInDisplay/>
            </Row>
        </Container>
        </>
    )
}