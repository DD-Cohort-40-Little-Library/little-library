import {Button, Col, Container, Row} from "react-bootstrap";
import React from "react";

export const EventDetailBlock = ({event, library}) => {

    const date = event.eventDate
    const D = new Date(date)
    const timeS = event.eventStart
    const startTime = new Date(timeS)
    let hourS = ((startTime.getHours() + 7) % 12) || 12
    let minutesS = startTime.getMinutes()
    if (startTime.getMinutes() === 0) {
        minutesS = minutesS + '0'
    }
    const amPmS = startTime.getHours() > 12 ? 'AM' : 'PM'
    const finalStartTime = (hourS + ":" + minutesS + amPmS)

    const timeE = event.eventEnd
    const endTime = new Date(timeE)
    let hourE = ((endTime.getHours() + 7) % 12) || 12
    let minutesE = endTime.getMinutes()
    if (endTime.getMinutes() === 0) {
        minutesE = minutesE + '0'
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
                    <Row xs={5}>Date: {(D.getMonth() + 1) + '-' + ((D.getDate() + 1) + '-' + (D.getFullYear()))}</Row>
                    <Row xs={5}>Start time: {finalStartTime}</Row>
                    <Row xs={5}>End time: {finalEndTime}</Row>
                    <Row xs={7}>Description: {event.eventDescription}</Row>
                </Col>
                <Col>
                    <Button>Go To This Library</Button>
                </Col>
            </Container>
        </>
    )
}
