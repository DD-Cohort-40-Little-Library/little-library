import {Col, Container, Image, Row} from "react-bootstrap";
import React from "react";

export const CheckInDetailBlockProfile = (props) => {

    const {checkin, library, user} = props
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
            <Container id={"checkInDetailBlock"} className={"border border-dark rounded text-center"}>
                <Row className={"text-center"}>
                    <Col xs={3} ><Image src={user.profileAvatarUrl} fluid={true} className={"rounded-circle"} alt={'Please select an avatar or upload a photo using the "Update Profile" button.'} ></Image></Col>
                    <Col>
                        <p xs={6}>Check-In Date:</p>
                        <p xs={6}>{(D.getMonth() + 1) + '/' + ((D.getDate() + 1) + '/' + (D.getFullYear()) )}</p>
                        <p xs={6}>Check-In Time:</p>
                        <p xs={6}>{finalTime}</p>
                        <p xs={6}>Library Name:</p>
                        <p xs={6}>{checkin.checkInLibraryId}</p>
                        <p xs={6}>Library Address:</p>
                        <p xs={6}>{checkin.checkInLibraryId}</p>
                        <p xs={6}>Comment:</p>
                        <p xs={6}>{checkin.checkInComment}</p>
                    </Col>
                    <Col xs={3}><Image src={checkin.checkInPhotoUrl} fluid={true} className={"rounded-circle"} alt={'Please upload a photo of your Little Library visit using the "Update Check-in" option.'}></Image></Col>
                </Row>
            </Container>
        </>
    )
}
