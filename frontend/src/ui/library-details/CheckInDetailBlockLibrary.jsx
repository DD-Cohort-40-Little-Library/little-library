import {Col, Container, Image, Row} from "react-bootstrap";
import React from "react";

export const CheckInDetailBlockLibrary = ({checkin, user}) => {

    // const {checkin} = props

    const date = checkin.checkInDate
    const D = new Date(date)
    const time = checkin.checkInDate
    const startTime = new Date(time)
    let hour = ((startTime.getHours() + 7) % 12) || 12
    let minutes = startTime.getMinutes()
    if (startTime.getMinutes() === 0) {
        minutes = minutes + '0'
    }
    const amPm = startTime.getHours() > 12 ? 'AM' : 'PM'
    const finalTime = (hour + ":" + minutes + amPm)

    return(
        <>
            <Container id={"checkInDetailBlock"} className={"border border-dark rounded"}>
                <Col xs={3}>
                    <Row> Posting Profile URL/img here: REMOVE ONCE IMAGE POPULATES </Row>
                    {/*<Image src={} className={"rounded-circle"} alt={'Please select an avatar or upload a photo using the "Update Profile" button.'}></Image>                */}
                </Col>
                <Col>
                    <p xs={6}>Check-In Date/Time: {(D.getMonth() + 1) + '-' + ((D.getDate() + 1) + '-' + (D.getFullYear()) )} / {finalTime}</p>
                    <Row xs={5}>Comment: {checkin.checkInComment}</Row>
                </Col>
                <Col xs={3}>
                    <Image src={checkin.checkInPhotoUrl} className={"rounded-circle"} alt={'Please upload a picture of the Little Library during your next visit.'}></Image>
                </Col>
            </Container>
        </>
    )
}
