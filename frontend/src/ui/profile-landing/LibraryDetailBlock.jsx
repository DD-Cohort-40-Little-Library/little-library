import {Container, Row} from "react-bootstrap";
import React from "react";

export const LibraryDetailBlock = (props) => {

    const {library} = props

    return(
        <>
            <Container className={"border border-dark rounded"}>
                    <Row xs={5}>Name: {library.libraryName}</Row>
                    <Row xs={7}>Address: {library.libraryAddress}</Row>
                    <Row xs={5}> Specialization: {library.librarySpecialization}</Row>
                    <Row xs={5}>Description: {library.libraryDescription}</Row>
                    <Row xs={5}>Type of Library: {library.libraryType}</Row>
            </Container>
        </>
    )
}
