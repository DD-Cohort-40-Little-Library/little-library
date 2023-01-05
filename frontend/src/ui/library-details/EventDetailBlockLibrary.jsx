import {Button, Col, Container, Image, Row} from "react-bootstrap";
import React from "react";
import {Link} from "react-router-dom";

export const EventDetailBlockLibrary = ({event, library, }) => {

    // const {event} = props
    const date = event.eventDate
    const D = new Date(date)
    const time = event.eventStart
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
            <Container className={"border border-dark rounded"}>
                <Col xs={3}>
                    <Row> HOSTING Profile URL/img here: REMOVE ONCE IMAGE POPULATES </Row>
                    {/*<Image src={} className={"rounded-circle"} alt={'Please select an avatar or upload a photo using the "Update Profile" button.'}></Image>                */}
                </Col>
                <Col>
                    <Row xs={6}>Title: {event.eventTitle}</Row>
                    {/*<Row xs={6}>Library Name:{library.libraryName}</Row>*/}
                    {/*<Row xs={6}>Library Address:{library.libraryAddress}</Row>*/}
                    <Row xs={6}>Date: {(D.getMonth() + 1) + '-' + ((D.getDate() + 1) + '-' + (D.getFullYear()))}</Row>
                    <Row xs={6}>Start time: {finalTime}</Row>
                    <Row xs={6}>Library Type:{library.libraryType}</Row>
                    <Row xs={6}>Description: {event.eventDescription}</Row>
                </Col>
                <Col xs={3}>
                    <Row>Check-In Image: REMOVE ONCE IMAGE POPULATES</Row>
                </Col>
            </Container>
        </>
    )
}
