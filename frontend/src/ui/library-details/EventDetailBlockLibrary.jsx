import {Button, Col, Container, Row} from "react-bootstrap";
import React from "react";
import {Link} from "react-router-dom";

export const EventDetailBlockLibrary = ({event, library}) => {
    // Event date
    const date = event.eventDate
    const D = new Date(date)
    // Event Start Time calculation
    const timeS = event.eventStart
    const startTime = new Date(timeS)
    let hourS = ((startTime.getHours() + 7) % 12) || 12
    let minutesS = startTime.getMinutes()
    if (startTime.getMinutes() < 10) {
        minutesS = '0' + minutesS
    }
    const amPmS = startTime.getHours() > 12 ? 'AM' : 'PM'
    const finalStartTime = (hourS + ":" + minutesS + amPmS)
    // Event End Time calculation
    const timeE = event.eventEnd
    const endTime = new Date(timeE)
    let hourE = ((endTime.getHours() + 7) % 12) || 12
    let minutesE = endTime.getMinutes()
    if (endTime.getMinutes() < 10) {
        minutesE = '0' + minutesE
    }
    const amPmE = endTime.getHours() > 12 ? 'AM' : 'PM'
    const finalEndTime = (hourE + ":" + minutesE + amPmE)

    return(
        <>
            <Container className={"border border-dark rounded"}>
                <Col>
                    <Row xs={6}>Library Name: {library.libraryName}</Row>
                    <Row xs={6}>Library Address: {library.libraryAddress}</Row>
                    <Row xs={5}>Event: {event.eventTitle}</Row>
                    <Row xs={5}>Date: {(D.getMonth() + 1) + '-' + ((D.getDate()) + '-' + (D.getFullYear()))}</Row>
                    <Row xs={5}>Start time: {finalStartTime}</Row>
                    <Row xs={5}>End time: {finalEndTime}</Row>
                    <Row xs={7}>Description: {event.eventDescription}</Row>
                </Col>
                <Col>
                    <Link to={`/library-landing/${library.libraryId}`}><Button>Go To This Library</Button></Link>
                </Col>
            </Container>
        </>
    )
}
