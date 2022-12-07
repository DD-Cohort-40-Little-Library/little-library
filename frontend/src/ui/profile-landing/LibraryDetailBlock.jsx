import {Col, Container, Image, Row} from "react-bootstrap";
import React from "react";
import {LibraryDetails} from "../library-details/LibraryDetails.jsx";

export const LibraryDetailBlock = (props) => {

    const {library} = props

    return(
        <>
            <Container className={"border border-dark rounded"}>
                    <Row xs={5}>{library.library}</Row>
                    <Row xs={5}>{library.libraryName}</Row>
                    <Row xs={7}>{library.libraryAddress}</Row>
                    <Row xs={5}>{library.librarySpecialization}</Row>
                    <Row xs={5}>{library.libraryDescription}</Row>
                    <Row xs={5}>{library.libraryType}</Row>
            </Container>
        </>
    )
}
