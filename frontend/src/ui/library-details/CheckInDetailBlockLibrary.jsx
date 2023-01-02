import {Container, Row} from "react-bootstrap";
import React from "react";

export const CheckInDetailBlockLibrary = (props) => {

    console.log("Test - check in block 2")

    const {checkin} = props

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
                {/*I think this should actually be another join of the profileAvatarUrl via the checkInProfileId????*/}
                {/*<Row xs={5}>{profile.profileAvatarUrl}</Row>*/}
                <p xs={6}>Check-In Date/Time: {(D.getMonth() + 1) + '-' + ((D.getDate() + 1) + '-' + (D.getFullYear()) )} / {finalTime}</p>
                <Row xs={5}>Comment: {checkin.checkInComment}</Row>
                <Row xs={5}>Photo: {checkin.checkInPhotoUrl}</Row>
            </Container>
        </>
    )
}
