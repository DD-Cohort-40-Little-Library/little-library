import {Button, Col, Container, Row} from "react-bootstrap";
import React from "react";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

export const EventDetailBlockLibrary = ({event, library}) => {
    if (event === null) {
        return (<></>)
    }
    const profile = useSelector(state => state.profiles[event.eventProfileId])

    const date = event.eventDate
    const D = new Date(date)
    const time = event.eventStart
    const startTime = new Date(time)
    let hour = ((startTime.getHours() + 7) % 12) || 12
    let minutes = startTime.getMinutes()
    if (startTime.getMinutes() === 0) {
        minutes = minutes + '0'
    }
    const amPm = startTime.getHours() < 12 ? 'AM' : 'PM'
    const finalTime = (hour + ":" + minutes + amPm)

    return(
        <>
            <Container className={"border border-dark rounded"}>
                <Col>
                    <Row xs={8}>Event Planner: {profile && profile.profileName}</Row>
                    <Row xs={8}>Title: {event.eventTitle}</Row>
                    <Row xs={8}>Library Name:{library.libraryName}</Row>
                    <Row xs={8}>Library Address:{library.libraryAddress}</Row>
                    <Row xs={8}>Date: {(D.getMonth() + 1) + '-' + ((D.getDate() + 1) + '-' + (D.getFullYear()))}</Row>
                    <Row xs={8}>Start time: {finalTime}</Row>
                    <Row xs={8}>Library Type:{library.libraryType}</Row>
                    <Row xs={8}>Description: {event.eventDescription}</Row>
                </Col>
                <Col>
                {/*    <Link to={`/library-landing/${library.libraryId}`}><Button>Go To This Library</Button></Link>*/}
                </Col>
            </Container>
        </>
    )
}
