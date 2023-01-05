import {Button, Col, Container, Image, Row} from "react-bootstrap";
import React from "react";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

export const CheckInDetailBlockProfile = (props) => {

    const {checkin, user} = props

    const library = useSelector(state => {
        if (state.libraries.length === 0) {
            return null
        }
        return state.libraries.find(library => library.libraryId === checkin.checkInLibraryId)
    })
    if (library === null) {
        return (<></>)
    }

    const date = checkin.checkInDate
    const D = new Date(date)
    const time = checkin.checkInDate
    const startTime = new Date(time)
    let hour = ((startTime.getHours()) )
    let minutes = startTime.getMinutes()
    if (startTime.getMinutes() < 10) {
        minutes = '0' + minutes
    }
    const amPm = startTime.getHours() < 12 ? 'AM' : 'PM'
    const finalTime = (hour + ":" + minutes + amPm)

    return(
        <>
            <Container id={"profileCheckInDetailBlock"} className={""}>
                <Row>
                    <Col sm={2} className={"pt-4"} fluid="auto">
                        <Image src={user.profileAvatarUrl} className={"img-fluid rounded-circle"} alt={'Please select an avatar or upload a photo using the "Update Profile" button.'} ></Image>
                    </Col>
                    <Col>
                        <Row sm={6} className={"text-start"}>User Name: {user.profileName}</Row>
                        <Row sm={6} className={"text-start"}>Check-In Date/Time: {(D.getMonth() + 1) + '-' + ((D.getDate()) + '-' + (D.getFullYear()) )} / {finalTime}</Row>
                        <Row sm={6} className={"text-start"}>Library Name: {library.libraryName}</Row>
                        <Row sm={6} className={"text-start"}>Library Address: {library.libraryAddress}</Row>
                        <Row sm={6} className={"text-start pb-4"}>Comment: {checkin.checkInComment}</Row>
                        <Link to={`/library-landing/${library.libraryId}`}><Button>Go To This Library</Button></Link>
                    </Col>
                    <Col sm={3} className={"pt-4 rounded-circle"} fluid="auto">
                        //TODO: image below too big
                        <Image src={checkin.checkInPhotoUrl} className={"rounded-circle"} alt={'Please upload a photo of your Little Library visit using the "Update Check-in" option.'}></Image>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
