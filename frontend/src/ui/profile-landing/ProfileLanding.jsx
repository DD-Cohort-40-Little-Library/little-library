import React from "react";
import {Col, Container, Row, Form, Image, Button, Tabs, Tab, FormText, Stack} from "react-bootstrap";
import {EventListing} from "../shared/components/EventListing.jsx";
import {CheckInDisplay} from "../shared/components/CheckInDisplay.jsx";
import {Link} from "react-router-dom";
import {LibraryDetailBlock} from "./LibraryDetailBlock.jsx"
import {useDispatch, useSelector} from "react-redux";
import {fetchAuth} from "../../store/auth.js";
import currentUser, {fetchCurrentUser} from "../../store/currentUser.js";
import {ProfileUpdateModal} from "./ProfileUpdateModal.jsx";
import {fetchAllLibraries, fetchLibrariesByProfileId} from "../../store/libraries.js";
import {EventShortListing} from "../home/EventShortListing.jsx";

export function ProfileLanding() {

    const libraries = useSelector(state => state.libraries ? state.libraries : [])
    const dispatch = useDispatch()
    const auth = useSelector(state => state.auth ? state.auth : state.auth)
    const initialEffects = () => {
        dispatch(fetchAuth())
        dispatch(fetchLibrariesByProfileId())
    }
    React.useEffect(initialEffects, [dispatch])

    // //TODO: REMOVE 'const profile = null' to the end  from line below after pulling currentUser w/ useSelector=profile
    // const profile = null
    if (auth === null) {
        return <h1>
            Page is loading.
        </h1>
    }
    const {profileFirstName, profileLastName, profileEmail, profileName, profileAvatarUrl, profileId} = auth

    const libraryProfileId = auth.profileId

    const {libraryName,libraryAddress, libraryDescription, librarySpecialization, libraryEventOptIn, libraryType} = libraries

    return (
        <>
            <h1>User Landing Page</h1>
            <Container>
                <Row className={"gx-md-3 p-3 justify-content-around"}>
                    <Col id={"user registration"} md={4} className={"text-center"} >
                        <h3>User Information</h3>
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

                        <ProfileUpdateModal id="profileUpdateModal"/>
                        <Link to={"/library-create"} className={"btn-primary"}> <Button> Add a Library</Button></Link>

                    </Col>
                    <Col id={"selected avatar"} md={3} className={"text-center"} >
                        <h3>User Image</h3>
                        <Image src={profileAvatarUrl} fluid={true} className={"rounded-circle"} alt={'Please select an avatar or upload a photo using the "Update Profile" button.'} ></Image>
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
                                <Stack>
                                    {libraries.map (library => <LibraryDetailBlock library={library}/>)}

                                {/*    if (library === null) {*/}
                                {/*    return <h1>*/}
                                {/*    Why not help by building a Little Library in your community?*/}
                                {/*    </h1>*/}
                                {/*}*/}
                                </Stack>
                            </Row>
                        </Container>
                    </Tab>

                </Tabs>
            </div>
        </>
    )
}