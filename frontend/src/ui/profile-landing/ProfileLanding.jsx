import React from "react";
import {Col, Container, Row, Form, Image, Button, Tabs, Tab, FormText} from "react-bootstrap";
import {ProfileUpdate} from "./ProfileUpdate.jsx";
import {EventListing} from "../shared/components/EventListing.jsx";
import {CheckInDisplay} from "../shared/components/CheckInDisplay.jsx";
import {LibraryDetails} from "../library-details/LibraryDetails.jsx";
import {BioBlock} from "../BioBlock.jsx";
import {Link} from "react-router-dom";
import {LibraryDetailBlock} from "./LibraryDetailBlock.jsx"
import {EventCreateModal} from "../shared/components/EventCreateModal.jsx";

export function ProfileLanding({profile}) {
    console.log(profile)
    const {profileFirstName, profileLastName, profileEmail, profileName} = profile
    return (
        <>
            <h1>User Landing Page</h1>
            <Container>
                <Row className={"gx-md-3 p-3"}>
                    <Col id={"user registration"} md={4} className={"text-center"} >
                        <h3>User Information</h3>
                        {/*change from form to div*/}
                        <div className={"border border-dark px-3"}>
                            <div className="mb-3" >
                                <div>First Name: </div>
                                <div> {profileFirstName}</div>
                            </div>

                            <div className="mb-3" >
                                <div>Last Name: </div>
                                <div>{profileLastName}</div>
                            </div>

                            <div className="mb-3" >
                                <div>Email address: </div>
                                <div>{profileEmail}</div>
                            </div>

                            <div className="mb-3">
                                <div>User Name: </div>
                                <div>{profileName}</div>
                            </div>
                        </div>

                        <Link to={"/profile-update"} className={"btn-primary"}> <Button> Update Profile</Button></Link>
                        <Link to={"/library-create"} className={"btn-primary"}> <Button> Add a Library</Button></Link>
                        <EventCreateModal />

                    </Col>
                    <Col id={"selected avatar"} md={3} className={"text-center"} >
                        <h3>Selected Avatar</h3>
                        <Image src={'http://placekitten.com/400/400'} fluid={true} className={"rounded-circle"} alt={'selected avatar'} ></Image>
                    </Col>
                    <Col id={"user avatars"} md={5} className={"text-center"}>
                        <h3>User Avatars</h3>
                        <Image src={"https:placeimg.com/450/450/any"} alt={'avatar selection'}></Image>
                    </Col>
                </Row>
            </Container>
            <div>
                <Tabs
                    defaultActiveKey="profile"
                    id="library-details-tabs"
                    className="mb-3"
                >
                    <Tab eventKey="events" title="Events">
                        <Container>
                            <Row>
                                <p>TEST 1</p>
                                <EventListing />
                            </Row>
                        </Container>
                    </Tab>
                    <Tab eventKey="check-ins" title="Check-Ins">
                        <Container>
                            <Row>
                                <p>TEST 2</p>
                                <CheckInDisplay />
                            </Row>
                        </Container>
                    </Tab>
                    <Tab eventKey="libraries" title="Libraries">
                        <Container>
                            <Row>
                                <p>TEST 3</p>
                                <LibraryDetailBlock />
                            </Row>
                        </Container>
                    </Tab>

                </Tabs>
            </div>
        </>
    )
}