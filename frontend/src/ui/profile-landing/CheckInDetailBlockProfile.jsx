import {Container, Image, Row} from "react-bootstrap";
import React from "react";

export const CheckInDetailBlockProfile = (props) => {

    const {checkin, library} = props

    return(
        <>
            <Container id={"checkInDetailBlock"} className={"border border-dark rounded"}>
                {/*<Row xs={5}>Library: {library.libraryName}</Row>*/}
                {/*<Row xs={7}>Library Address: {library.libraryAddress}</Row>*/}
                <Row xs={5}>Comment: {checkin.checkInComment}</Row>
                <Row xs={5}>Photo: {checkin.checkInPhotoUrl}</Row>
                {/*<Image src={profileAvatarUrl} fluid={true} className={"rounded-circle"} alt={'Please select an avatar or upload a photo using the "Update Profile" button.'} ></Image>*/}
            </Container>
        </>
    )
}
