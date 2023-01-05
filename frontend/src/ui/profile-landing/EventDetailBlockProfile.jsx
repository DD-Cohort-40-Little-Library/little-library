import {Anchor, Button, Col, Container, Image, Row} from "react-bootstrap";
import React from "react";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

export const EventDetailBlockProfile = ({event, user}) => {

    const library = useSelector(state => {
        if (state.libraries.length === 0) {
            return null
        }
        return state.libraries.find(library => library.libraryId === event.eventLibraryId)
    })
        if (library === null) {
            return (<></>)
        }
    // Event date
    const date = event.eventDate.split("T")[0]
    const [year, month, day] = date.split('-')
    const fixedDate = `${month}/${day}/${year}`

    // Event Start Time calculation
    const timeS = event.eventStart.split("T")[1]
    const startTime = timeS.substring(0, 5).split(":")
    let hourS = Number(startTime[0])
    let minutesS = Number(startTime[1])
    let timeValueS
    if (hourS > 0 && hourS <= 12) {
        timeValueS = "" + hourS
    } else if (hourS > 12) {
        timeValueS = "" + (hourS - 12)
    } else if (hourS == 0) {
        timeValueS = "12"
    }
    timeValueS += (minutesS < 10) ? ":0" + minutesS : ":" + minutesS
    timeValueS += (hourS >= 12) ? "PM" : "AM"
    const finalStartTime = (timeValueS)
    // Event End Time calculation
    const timeE = event.eventEnd.split("T")[1]
    const endTime = timeE.substring(0, 5).split(":")
    let hourE = Number(endTime[0])
    let minutesE = Number(endTime[1])
    let timeValueE
    if (hourE > 0 && hourE <= 12) {
        timeValueE = "" + hourE
    } else if (hourE > 12) {
        timeValueE = "" + (hourE - 12)
    } else if (hourE == 0) {
        timeValueE = "12"
    }
    timeValueE += (minutesE < 10) ? ":0" + minutesE : ":" + minutesE
    timeValueE += (hourE >= 12) ? "PM" : "AM"
    const finalEndTime = (timeValueE)

    return(
        <>
            <Container id={"profileEventsDetailBlock"} className={""}>
                <Row>
                    <Col sm={2} className={"pt-4"} fluid="auto">
                        <Image src={user.profileAvatarUrl} className={"img-fluid rounded-circle"} alt={'Host User has either not uploaded an image or the link is broken.'} ></Image>
                    </Col>
                    <Col>
                        <Row sm={6} className={"text-start"}>Host User Name: {user.profileName}</Row>
                        <Row sm={6} className={"text-start"}>Date: {fixedDate}</Row>
                        <Row sm={6} className={"text-start"}>Start time: {finalStartTime}</Row>
                        <Row sm={6} className={"text-start"}>End time: {finalEndTime}</Row>
                        <Row sm={6} className={"text-start"}>Event Title: {event.eventTitle}</Row>
                        <Row sm={6} className={"text-start"}>Library Name: {library.libraryName}</Row>
                        <Row sm={6} className={"text-start"}>Library Address: {library.libraryAddress}</Row>
                        <Row sm={6} className={"text-start pb-4"}>Description: {event.eventDescription}</Row>
                        <Anchor href={`/library-landing/${library.libraryId}`}><Button>Go To This Library</Button></Anchor>
                    </Col>
                    <Col sm={3} className={"pt-4 rounded-circle"} fluid="auto" alt={'Please upload a photo of your Little Library using the "Update Library" option.'}>Library Image: REMOVE ONCE IMAGE POPULATES {library.LibraryImageUrl}</Col>
                </Row>
            </Container>
        </>
    )
}
