import {Col, Container, Image, Row} from "react-bootstrap";
import React from "react";
import checkIn from "../../store/checkIn.js";

export const CheckInDetailBlockProfile = (props) => {

    const {library, checkin, user} = props

    const date = checkin.checkInDate
    const D = new Date(date)
    const time = checkin.checkInDate
    const startTime = new Date(time)
    let hour = ((startTime.getHours() + 7) % 12) || 12
    let minutes = startTime.getMinutes()
    if (startTime.getMinutes() < 10) {
        minutes = '0' + minutes
    }
    const amPm = startTime.getHours() > 12 ? 'AM' : 'PM'
    const finalTime = (hour + ":" + minutes + amPm)

    console.log("profile checkin tab - test 1")

    return(
        <>
            <Container id={"checkInDetailBlock"} className={"border border-dark rounded text-center"}>
                <Row className={"text-center"}>
                    <Col xs={3} ><Image src={user.profileAvatarUrl} fluid={true} className={"rounded-circle"} alt={'Please select an avatar or upload a photo using the "Update Profile" button.'} ></Image></Col>
                    <Col>
                        <Row xs={6}>Check-In Date/Time: {(D.getMonth() + 1) + '-' + ((D.getDate() + 1) + '-' + (D.getFullYear()) )} / {finalTime}</Row>
                        {/*//TODO: Line 32/33 join working on backend, but issues bringing it in due to profileId pre initialization issue, work later. This will allow for all tabs once this is fixed.*/}
                        <Row xs={6}>Library Name: {library.libraryName}</Row>
                        <Row xs={6}>Library Address: {library.libraryAddress}</Row>
                        <Row xs={6}>Comment: {checkin.checkInComment}</Row>
                    </Col>
                    <Col xs={3}><Image src={checkin.checkInPhotoUrl} fluid={true} className={"rounded-circle"} alt={'Please upload a photo of your Little Library visit using the "Update Check-in" option.'}></Image></Col>
                </Row>
            </Container>
        </>
    )
}
