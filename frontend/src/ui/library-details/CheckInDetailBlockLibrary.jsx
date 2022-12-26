import {Container, Row} from "react-bootstrap";
import React from "react";

export const CheckInDetailBlockLibrary = (props) => {

    const {checkin, profile, library} = props

    return(
        <>
            <Container id={"checkInDetailBlock"} className={"border border-dark rounded"}>
                {/*<Row xs={5}>{profile.profileAvatarUrl}</Row>*/}
                <Row xs={5}>Comment: {checkin.checkInComment}</Row>
                <Row xs={5}>Photo: {checkin.checkInPhotoUrl}</Row>
            </Container>
        </>
    )
}
