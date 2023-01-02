import React from "react";
import {Col, Container, Row, Form, Image, Button, Tabs, Tab, FormText, Stack} from "react-bootstrap";
import {EventListing} from "../shared/components/EventListing.jsx";
import {CheckInDisplay} from "../shared/components/CheckInDisplay.jsx";
import {Link, useParams} from "react-router-dom";
import {LibraryDetailBlock} from "./LibraryDetailBlock.jsx"
import {useDispatch, useSelector} from "react-redux";
import {fetchAuth} from "../../store/auth.js";
import currentUser, {fetchCurrentUser} from "../../store/currentUser.js";
import {ProfileUpdateModal} from "./ProfileUpdateModal.jsx";
import {fetchAllLibraries, fetchLibrariesByProfileId} from "../../store/libraries.js";
import {EventShortListing} from "../home/EventShortListing.jsx";
import {EventDetailBlock} from "./EventDetailBlock";
import {fetchEventsByProfileId} from "../../store/events.js";
import {fetchAllCheckInsForProfileTab, fetchCheckInsByProfileId} from "../../store/checkIn.js";
import {CheckInDetailBlockProfile} from "./CheckInDetailBlockProfile.jsx";
import plsSignIn from "../../../images/uiSharedImages/plsSignIn.svg";

export function ProfileLanding() {
    const libraries = useSelector(state => state.libraries ? state.libraries : [])
    const events = useSelector(state => state.events ? state.events : [])
    const checkins = useSelector(state => state.checkIns ? state.checkIns : [])
    const auth = useSelector(state => state.auth ? state.auth : state.auth)
    const user = useSelector(state => state.currentUser)

    const dispatch = useDispatch()
    const initialEffects = () => {
        dispatch(fetchAuth())
        dispatch(fetchLibrariesByProfileId())
        dispatch(fetchEventsByProfileId())
        dispatch(fetchCheckInsByProfileId())
        dispatch(fetchCurrentUser())
        // dispatch(fetchAllCheckInsForProfileTab())
    }
    React.useEffect(initialEffects, [dispatch])
    // TODO: REMOVE 'const profile = null' to the end  from line below after pulling currentUser w/ useSelector=profile
    if (user === null) {
        return <div>
                    <Image src={plsSignIn} alt={"pleaseSignIn"} id={"pleaseSignIn"}/>
               </div>
    }
    const {profileFirstName, profileLastName, profileEmail, profileName, profileAvatarUrl} = user
    const currentProfileId = auth.profileId

    const {libraryName,libraryAddress, libraryDescription, librarySpecialization, libraryEventOptIn, libraryType} = libraries
    const {eventDate, eventDescription, eventName} = events
    const {checkInComment,checkInDate, checkInPhotoUrl} = checkins
    // const {checkInId, checkInLibraryId, checkInProfileId, checkInComment, checkInDate, checkInPhotoUrl, checkInReport, libraryId, libraryProfileId, libraryAddress, libraryDescription, libraryEventOptIn, libraryName, librarySpecialization, profileId, profileFirstName, profileLastName, profileEmail, profileAvatarUrl, profileName} = checkins

    return (
        <>

            <h1 id={"headLineONE"}>User Profile Information</h1>
            <Container>
                <Row className={"gx-md-3 px-3 justify-content-around"}>
                    <Col  md={4} className={"text-center"} >
                        <h3 id={"headLineONE"}>User Information</h3>
                        <div id={"userRegistration"} className={""}>
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

                        <ProfileUpdateModal className={""}/>
                        <Link to={"/library-create"} className={"btn-primary"}> <Button className={"m-2"}>Add a Library</Button></Link>

                    </Col>
                    <Col md={3} className={"text-center"} >
                        <h3 id={"headLineONE"}>User Image</h3>
                        <Image src={profileAvatarUrl} fluid={true} className={"rounded-circle"} alt={'Please select an avatar or upload a photo using the "Update Profile" button.'} ></Image>
                    </Col>
                </Row>
            </Container>
            <div className={"p-5"}>
                <Tabs
                    defaultActiveKey="profile"
                    id="library-details-tabs"
                    className="mb-3"
                >
                    <Tab eventKey="event" title="Events">
                        <Container>
                            <Row>
                                <Stack>
                                     {events.map(event => <EventDetailBlock event={event}/>)}
                                </Stack>
                            </Row>
                        </Container>
                    </Tab>
                    <Tab eventKey="check-ins" title="Check-Ins">
                        <Container>
                            <Row>
                                {checkins.map (checkin => <CheckInDetailBlockProfile checkin={checkin} user={user}/>)}
                            </Row>
                        </Container>
                    </Tab>
                    <Tab eventKey="libraries" title="Libraries">
                        <Container>
                            <Row>
                                <Stack>
                                    {libraries.map (library => <LibraryDetailBlock library={library}/>)}
                                </Stack>
                            </Row>
                        </Container>
                    </Tab>

                </Tabs>
            </div>
        </>
    )
}