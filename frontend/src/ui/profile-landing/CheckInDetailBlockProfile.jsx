import {Col, Container, Image, Row} from "react-bootstrap";
import React from "react";

export const CheckInDetailBlockProfile = (props) => {

    const {checkin, library} = props

    return(
        <>
            <Container id={"checkInDetailBlock"} className={"border border-dark rounded"}>
                <Row>
                    <Col xs={2} ><Image src={checkin.checkInPhotoUrl} fluid={true} className={"rounded-circle"} alt={'Please select an avatar or upload a photo using the "Update Profile" button.'} ></Image></Col>
                    <Col>
                        {/*<Row xs={5}>Library: {library.libraryName}</Row>*/}
                        {/*<Row xs={7}>Library Address: {library.libraryAddress}</Row>*/}
                        <Col xs={5}>Comment: {checkin.checkInComment}</Col>
                    </Col>
                    <Col xs={2}><Image src={checkin.checkInPhotoUrl} fluid={true} className={"rounded-circle"} alt={'Please select an avatar or upload a photo using the "Update Profile" button.'}></Image></Col>
                </Row>
            </Container>
        </>
    )
}
