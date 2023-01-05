import {Anchor, Button, Col, Container, Image, Row} from "react-bootstrap";
import React from "react";
import {useSelector} from "react-redux";

export const LibraryDetailBlockProfile = (props) => {

    const {library, checkin, user} = props

    const libraryImage = useSelector(state => {
    const currentLibraryCheckIns = state.checkIns.filter(checkin => checkin.checkInLibraryId === library.libraryId)
        for (let checkIn of currentLibraryCheckIns) {
        if (checkIn.checkInPhotoUrl !== "") {
            return checkIn.checkInPhotoUrl
        }
    }})


    return(
        <>
            <Container id={"profileLibraryDetailBlock"} className={""}>
                <Row>
                    <Col sm={2} className={"pt-4 rounded-circle"} fluid="auto">
                        <Image src={user.profileAvatarUrl} fluid="auto" className={"rounded-circle"} alt={'Please select an avatar or upload a photo using the "Update Profile" button.'} ></Image>
                    </Col>
                    <Col className={"pt-4"}>
                        <Row sm={6} className={"text-start"}>Owner Name: {user.profileName}</Row>
                        <Row sm={6} className={"text-start"}>Name: {library.libraryName}</Row>
                        <Row sm={6} className={"text-start"}>Address: {library.libraryAddress}</Row>
                        <Row sm={6} className={"text-start"}> Specialization: {library.librarySpecialization}</Row>
                        <Row sm={6} className={"text-start"}>Description: {library.libraryDescription}</Row>
                        <Row sm={6} className={"text-start pb-4"}>Type of Library: {library.libraryType}</Row>
                        <Anchor href={`/library-landing/${library.libraryId}`}><Button>Go To This Library</Button></Anchor>
                    </Col>
                    <Col sm={3} className={"pt-4 rounded-circle"} fluid="auto">
                        {libraryImage && <Image src={libraryImage} alt={'Please upload a photo of your Little Library.'} ></Image>}
                    </Col>
                </Row>
            </Container>
        </>
    )
}
