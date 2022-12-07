import {Container, Row} from "react-bootstrap";
import React from "react";

export const CheckInDetailBlock = (props) => {

    const {checkin, library} = props

    return(
        <>
            <Container className={"border border-dark rounded"}>
                {/*<Row xs={5}>Library: {library.libraryName}</Row>*/}
                {/*<Row xs={7}>Library Address: {library.libraryAddress}</Row>*/}
                <Row xs={5}>Comment: {checkin.checkInComment}</Row>
                <Row xs={5}>Photo: {checkin.checkInPhotoUrl}</Row>
            </Container>
        </>
    )
}
