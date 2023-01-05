import {Button, Col, Container, Row} from "react-bootstrap";
import React from "react";
import {Link} from "react-router-dom";

export const EventDetailBlockLibrary = ({event, library}) => {

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
            <Container className={""} id={"libDisEventsBlk"}>
                <Col>
                    <Row sm={6} className={"text-start"}>Title: {event.eventTitle}</Row>
                    <Row sm={6} className={"text-start"}>Library Name:{library.libraryName}</Row>
                    <Row sm={6} className={"text-start"}>Library Address:{library.libraryAddress}</Row>
                    <Row sm={6} className={"text-start"}>Date: {(D.getMonth() + 1) + '-' + ((D.getDate() + 1) + '-' + (D.getFullYear()))}</Row>
                    <Row sm={6} className={"text-start"}>Start time: {finalTime}</Row>
                    <Row sm={6} className={"text-start"}>Library Type:{library.libraryType}</Row>
                    <Row sm={6} className={"text-start pb-2"}>Description: {event.eventDescription}</Row>
                </Col>
                {/*<Col sm={3} className={"pt-4 rounded-circle"} fluid="auto">*/}
                {/*    <Link to={`/library-landing/${library.libraryId}`}><Button>Go To This Library</Button></Link>*/}
                {/*</Col>*/}
            </Container>
        </>
    )
}
