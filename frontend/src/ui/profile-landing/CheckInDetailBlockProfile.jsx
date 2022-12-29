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
                    {/*I think this should actually be another join of the profileAvatarUrl via the checkInProfileId????*/}
                    <Col xs={3} ><Image src={user.profileAvatarUrl} fluid={true} className={"rounded-circle"} alt={'Please select an avatar or upload a photo using the "Update Profile" button.'} ></Image></Col>
                    <Col>
                        <Row xs={6}>Check-In Date/Time: {(D.getMonth() + 1) + '-' + ((D.getDate() + 1) + '-' + (D.getFullYear()) )} / {finalTime}</Row>
                        <Row xs={6}>Library Name: {checkin.checkInLibraryId} ***********NEED TO CHANGE THIS TO IT'S LIBRARY NAME**********</Row>
                        <Row xs={6}>Library Address: {checkin.checkInLibraryId} ***********NEED TO CHANGE THIS TO IT'S LIBRARY ADDRESS**********</Row>
                        <Row xs={6}>Comment: {checkin.checkInComment}</Row>
                    </Col>
                    <Col xs={3}><Image src={checkin.checkInPhotoUrl} fluid={true} className={"rounded-circle"} alt={'Please upload a photo of your Little Library visit using the "Update Check-in" option.'}></Image></Col>
                </Row>
            </Container>
        </>
    )
}
