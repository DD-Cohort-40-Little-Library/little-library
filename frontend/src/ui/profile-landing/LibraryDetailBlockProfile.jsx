import {Col, Container, Row} from "react-bootstrap";
import React from "react";

export const LibraryDetailBlockProfile = (props) => {

    const {library} = props

    return(
        <>
            <Container className={"border border-dark rounded"}>
                <Col>
                </Col>
                <Col>
                    <Row xs={8}>Name: {library.libraryName}</Row>
                    <Row xs={8}>Address: {library.libraryAddress}</Row>
                    <Row xs={8}> Specialization: {library.librarySpecialization}</Row>
                    <Row xs={8}>Description: {library.libraryDescription}</Row>
                    <Row xs={8}>Type of Library: {library.libraryType}</Row>

                    <Row xs={8}>Type of Library: {library.libraryName}</Row>

                </Col>
                <Col>
                </Col>
            </Container>
        </>
    )
}
