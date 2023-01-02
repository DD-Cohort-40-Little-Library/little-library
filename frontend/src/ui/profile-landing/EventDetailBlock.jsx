import {Container, Row} from "react-bootstrap";
import React from "react";

export const EventDetailBlock = ({event, library}) => {

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
                <Row xs={5}>Title: {event.eventTitle}</Row>
                <Row xs={5}>Date: {(D.getMonth() + 1) + '-' + ((D.getDate() + 1) + '-' + (D.getFullYear()))}</Row>
                <Row xs={5}>Start time: {finalTime}</Row>
                <Row xs={6}>Library Name: {library.libraryName}</Row>
                <Row xs={6}>Library Address: {library.libraryAddress}</Row>
                <Row xs={7}>Description: {event.eventDescription}</Row>
            </Container>
        </>
    )
}
