import {Container, Row} from "react-bootstrap";
import React from "react";
import {useSelector} from "react-redux";

export const CheckInDetailBlockLibrary = ({checkin, library}) => {
    if (checkin === null) {
        return (<></>)
    }
    const profile = useSelector(state => state.profiles[checkin.checkInProfileId])

    const date = checkin.checkInDate
    const D = new Date(date)
    const time = checkin.checkInDate
    const startTime = new Date(time)
    let hour = ((startTime.getHours() - 7) % 12) || 12
    let minutes = startTime.getMinutes()
    if (startTime.getMinutes() === 0) {
        minutes = minutes + '0'
    }
    const amPm = startTime.getHours() < 12 ? 'AM' : 'PM'
    const finalTime = (hour + ":" + minutes + amPm)

    return(
        <>
            <Container id={"checkInDetailBlock"} className={"border border-dark rounded"}>
                {/*<Row xs={5}>{profile.profileAvatarUrl}</Row>*/}
                <Row xs={6}>Check-In User Name: </Row>
                <Row xs={6}>Check-In Date/Time: {(D.getMonth() + 1) + '-' + ((D.getDay() + 1) + '-' + (D.getFullYear()) )} / {finalTime}</Row>
                <Row xs={5}>Comment: {checkin.checkInComment}</Row>
                <Row xs={5}>Photo: {checkin.checkInPhotoUrl}</Row>
            </Container>
        </>
    )
}
