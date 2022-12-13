import {Col, Container, Row} from "react-bootstrap";
import React from "react";
import styles from "../App.css";

export const EventDetailBlock = (props) => {

    const {library, event} = props
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
                <Col  className={styles.profileDetailBlocks}>
                    <Row xs={5}>Title: {event.eventTitle}</Row>
                    <Row xs={5}>Date: {(D.getMonth() + 1) + '/' + ((D.getDate() + 1) + '/' + (D.getFullYear()))}</Row>
                    <Row xs={5}>Start time: {finalTime}</Row>
                    <Row xs={7}>Description: {event.eventDescription}</Row>
                </Col>
            </Container>
        </>
    )
}
