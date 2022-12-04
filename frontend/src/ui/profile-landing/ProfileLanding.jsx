import React from "react";
import {Col, Container, Row, Form, Image, Button, Tabs, Tab, FormText} from "react-bootstrap";
import {EventListing} from "../shared/components/EventListing.jsx";
import {CheckInDisplay} from "../shared/components/CheckInDisplay.jsx";
import {Link} from "react-router-dom";
import {LibraryDetailBlock} from "./LibraryDetailBlock.jsx"
import {EventCreateModal} from "../shared/components/EventCreateModal.jsx";
import {useDispatch, useSelector} from "react-redux";
import {fetchAuth} from "../../store/auth.js";
import currentUser, {fetchCurrentUser} from "../../store/currentUser.js";

export function ProfileLanding() {
    console.log('is this on')
    const dispatch = useDispatch()
    const profile = useSelector(state => {return state.currentUser ? state.currentUser : null})
    const auth = useSelector(state => state.auth ? state.auth : state.auth)
    const initialEffects = () => {
        dispatch(fetchAuth())
    }
    React.useEffect(initialEffects, [dispatch])
    const secondaryEffect = () => {
        if (auth !== null) {
            dispatch(fetchCurrentUser(auth.profileId))
        }
    }
    React.useEffect(secondaryEffect, [auth, dispatch])

    // //TODO: REMOVE 'const profile = null' to the end  from line below after pulling currentUser w/ useSelector=profile
    // const profile = null
    if (profile === null) {
        return <h1>
            Page is loading.
        </h1>
    }
    const {profileFirstName, profileLastName, profileEmail, profileName} = profile
    console.log('is this on 2')
    return (
        <>
            <h1>User Landing Page</h1>
            <Container>
                <Row className={"gx-md-3 p-3"}>
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