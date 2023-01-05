import {Button, Col, Container, Image, Row} from "react-bootstrap";
import React from "react";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

export const EventDetailBlockLibrary = ({event, library}) => {
    if (event === null) {
        return (<></>)
    }
    const profile = useSelector(state => state.profiles[event.eventProfileId])

    const date = event.eventDate.split("T")[0]
    const [year, month, day] = date.split('-')
    const fixedDate = `${month}/${day}/${year}`

    const time = event.eventStart.split("T")[1]
    const startTime = time.substring(0, 5).split(":")
    let hour = Number(startTime[0])
    let minutes = Number(startTime[1])
    let timeValue
    if (hour > 0 && hour <= 12) {
        timeValue = "" + hour
    } else if (hour > 12) {
        timeValue = "" + (hour - 12)
    } else if (hour == 0) {
        timeValue = "12"
    }
    timeValue += (minutes < 10) ? ":0" + minutes : ":" + minutes
    timeValue += (hour >= 12) ? "PM" : "AM"
    const finalTime = (timeValue)

    return(
        <>
            <Container className={"border border-dark rounded"}>
                <Col>
                    //TODO: image needs styling
                    <Row xs={8}><Image src={profile && profile.profileAvatarUrl}/></Row>
                    <Row xs={8}>Event Planner: {profile && profile.profileName}</Row>
                    <Row xs={8}>Title: {event.eventTitle}</Row>
                    <Row xs={8}>Library Name:{library.libraryName}</Row>
                    <Row xs={8}>Library Address:{library.libraryAddress}</Row>
                    <Row xs={8}>Date: {fixedDate}</Row>
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
