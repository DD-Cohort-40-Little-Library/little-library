import {Button, Col, Container, Image, Row} from "react-bootstrap";
import React from "react";
import {Link} from "react-router-dom";

export const LibraryDetailBlockProfile = (props) => {

    const {library, user} = props
    console.log(library)
    return(
        <>
            <Container className={"border border-dark rounded"}>
                <Row>
                    <Col xs={3} >
                        {/*CAN'T USE 'USER', NEEDS A JOIN FOR THE EVENTPROFILEID TO CONNECT USER PROFILEAVATARURL*/}
                        {/*<Image src={user.profileAvatarUrl} fluid={true} className={"rounded-circle"} alt={'Please select an avatar or upload a photo using the "Update Profile" button.'} ></Image>*/}
                    </Col>
                    <Col>
                    <Row xs={6}>Owner Name: {user.profileName}</Row>
                    <Row xs={6}>Name: {library.libraryName}</Row>
                    <Row xs={6}>Address: {library.libraryAddress}</Row>
                    <Row xs={6}> Specialization: {library.librarySpecialization}</Row>
                    <Row xs={6}>Description: {library.libraryDescription}</Row>
                    <Row xs={6}>Type of Library: {library.libraryType}</Row>
                    <Link to={`/library-landing/${library.libraryId}`}><Button>Go To This Library</Button></Link>
                </Col>
                <Col xs={3} fluid={true} className={"rounded-circle"} alt={'Please upload a photo of your Little Library using the "Update Library" option.'}>Library Image: REMOVE ONCE IMAGE POPULATES {library.LibraryImageUrl}</Col>
                </Row>
            </Container>
        </>
    )
}
