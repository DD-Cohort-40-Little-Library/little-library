import {Col, Container, Image, Row} from "react-bootstrap";
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
            <Container id={"libDisCheckInBlock"} >
                <Col className={"pt-4"}>
                <Col sm={2} className={"pt-4"} fluid="auto">
                    <Image src={profile && profile.profileAvatarUrl} className={"img-fluid rounded-circle"}/></Col>
                </Col>
                <Col className={"pt-4"}>
                <Row sm={6} className={"text-start"}>Check-In User Name: {profile && profile.profileName}</Row>
                <Row sm={6} className={"text-start"}>Check-In Date/Time: {(D.getMonth() + 1) + '-' + ((D.getDay() + 1) + '-' + (D.getFullYear()) )} / {finalTime}</Row>
                <Row sm={6} className={"text-start"}>Comment: {checkin.checkInComment}</Row>
                </Col>

                <Col className={"pt-4"}>
                    <Image sm={2} className={"pt-4 rounded-circle"} fluid="auto" alt={'Please upload a photo of your Little Library using the "Update Library" option.'}  src={checkin.checkInPhotoUrl}/>
                </Col>
            </Container>
        </>
    )
}
