import {Col, Container, Row} from "react-bootstrap";
import React from "react";

export const EventDetailBlockLibrary = ({event, library, }) => {

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
<<<<<<< HEAD
            <Container className={"border border-dark rounded"}>
                <Col xs={3}>
                    <Row> HOSTING Profile URL/img here: REMOVE ONCE IMAGE POPULATES </Row>
                    {/*<Image src={} className={"rounded-circle"} alt={'Please select an avatar or upload a photo using the "Update Profile" button.'}></Image>                */}
                </Col>
                <Col>
                    <Row xs={6}>Title: {event.eventTitle}</Row>
                    <Row xs={6}>Date: {(D.getMonth() + 1) + '-' + ((D.getDate() + 1) + '-' + (D.getFullYear()))}</Row>
                    <Row xs={6}>Start time: {finalTime}</Row>
                    <Row xs={6}>Library Type:{library.libraryType}</Row>
                    <Row xs={6}>Description: {event.eventDescription}</Row>
                </Col>
=======
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
>>>>>>> develop
            </Container>
        </>
    )
}
