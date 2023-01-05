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
            <Container id={"profileEventsDetailBlock"} className={""}>
                <Row>
                    <Col sm={2} className={"pt-4 rounded-circle"} fluid="auto">
                        {/*CAN'T USE 'USER', NEEDS A JOIN FOR THE EVENTPROFILEID TO CONNECT USER PROFILEAVATARURL*/}
                        <Image src={user.profileAvatarUrl} className={"rounded-circle"} alt={'Host User has either not uploaded an image or the link is broken.'} ></Image>
                    </Col>
                    <Col>
                        <Row sm={6} className={"text-start"}>Host User Name: {user.profileName}</Row>
                        <Row sm={6} className={"text-start"}>Date: {(D.getMonth() + 1) + '-' + ((D.getDate()) + '-' + (D.getFullYear()))}</Row>
                        <Row sm={6} className={"text-start"}>Start time: {finalStartTime}</Row>
                        <Row sm={6} className={"text-start"}>End time: {finalEndTime}</Row>
                        <Row sm={6} className={"text-start"}>Event Title: {event.eventTitle}</Row>
                        <Row sm={6} className={"text-start"}>Library Name: {library.libraryName}</Row>
                        <Row sm={6} className={"text-start"}>Library Address: {library.libraryAddress}</Row>
                        <Row sm={6} className={"text-start pb-4"}>Description: {event.eventDescription}</Row>
                        <Anchor to={`/library-landing/${library.libraryId}`}><Button>Go To This Library</Button></Anchor>
                    </Col>
                    <Col sm={3} className={"pt-4 rounded-circle"} fluid="auto" alt={'Please upload a photo of your Little Library using the "Update Library" option.'}>Library Image: REMOVE ONCE IMAGE POPULATES {library.LibraryImageUrl}</Col>
                </Row>
            </Container>
        </>
    )
}
