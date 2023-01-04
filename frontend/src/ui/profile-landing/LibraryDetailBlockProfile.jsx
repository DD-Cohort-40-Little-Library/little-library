import {Button, Col, Container, Image, Row} from "react-bootstrap";
import React from "react";
import {Link} from "react-router-dom";

export const LibraryDetailBlockProfile = (props) => {

    const {library, user} = props

    return(
        <>
            <Container id={"profileLibraryDetailBlock"} className={""}>
                <Row>
                    <Col sm={2} className={"pt-4 rounded-circle"} fluid="auto">
                        {/*CAN'T USE 'USER', NEEDS A JOIN FOR THE EVENTPROFILEID TO CONNECT USER PROFILEAVATARURL*/}
                        <Image src={user.profileAvatarUrl} fluid="auto" className={"rounded-circle"} alt={'Please select an avatar or upload a photo using the "Update Profile" button.'} ></Image>
                    </Col>
                    <Col>
                    <Row sm={6} className={"text-start"}>Owner Name: {user.profileName}</Row>
                    <Row sm={6} className={"text-start"}>Name: {library.libraryName}</Row>
                    <Row sm={6} className={"text-start"}>Address: {library.libraryAddress}</Row>
                    <Row sm={6} className={"text-start"}> Specialization: {library.librarySpecialization}</Row>
                    <Row sm={6} className={"text-start"}>Description: {library.libraryDescription}</Row>
                    <Row sm={6} className={"text-start pb-4"}>Type of Library: {library.libraryType}</Row>
                    <Link to={`/library-landing/${library.libraryId}`}><Button>Go To This Library</Button></Link>
                </Col>
                <Col sm={3} className={"pt-4 img-fluid rounded-circle"} fluid="auto" alt={'Please upload a photo of your Little Library using the "Update Library" option.'}>Library Image: REMOVE ONCE IMAGE POPULATES {library.LibraryImageUrl}</Col>
                </Row>
            </Container>
        </>
    )
}
