import React from "react";
import {Container, Row} from "react-bootstrap";
import {LibraryDetails} from "./library-details/LibraryDetails.jsx";
import {CheckInForm} from "./shared/components/CheckInForm.jsx";
import {CheckInDisplay} from "./shared/components/CheckInDisplay.jsx";


export function CheckIn() {
    return(
        <>
        <Container>
            <Row>
                {/*<LibraryDetails/>*/}
                <CheckInForm/>
                {/*<CheckInDisplay/>*/}
            </Row>
        </Container>
        </>
    )
}