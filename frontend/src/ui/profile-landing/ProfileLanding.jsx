import React, {useEffect} from "react";
import {Col, Container, Row, Form, Image, Button, Tabs, Tab, FormText, Stack} from "react-bootstrap";
import {EventListing} from "../shared/components/EventListing.jsx";
import {CheckInDisplay} from "../shared/components/CheckInDisplay.jsx";
import {Link, useParams} from "react-router-dom";
import {LibraryDetailBlockProfile} from "./LibraryDetailBlockProfile.jsx"
import {useDispatch, useSelector} from "react-redux";
import {fetchAuth} from "../../store/auth.js";
import currentUser, {fetchCurrentUser} from "../../store/currentUser.js";
import {ProfileUpdateModal} from "./ProfileUpdateModal.jsx";
import {fetchAllLibraries, fetchLibrariesByProfileId} from "../../store/libraries.js";
import {EventShortListing} from "../home/EventShortListing.jsx";
import {EventDetailBlockProfile} from "./EventDetailBlockProfile.jsx";
import {fetchAllEventsForProfileTab, fetchEventsByProfileId} from "../../store/events.js";
import {fetchAllCheckInsForProfileTab, fetchCheckInsByProfileId} from "../../store/checkIn.js";
import {CheckInDetailBlockProfile} from "./CheckInDetailBlockProfile.jsx";
import plsSignIn from "../../../images/uiSharedImages/pleaseSignIn.svg";
import profileImageBlk1 from "../../../images/uiSharedImages/profileImgBlk1.jpg";
import profileImageBlk2 from "../../../images/uiSharedImages/profileImgBlk2.jpg";
import reader from "../../../images/uiSharedImages/profileImgBlk3.jpg";
import headshot from "../../../images/uiSharedImages/profileImgBlk4.jpg";
import profileImageBlk3 from "../../../images/uiSharedImages/profileImgBlk5.jpg";

export function ProfileLanding() {
    const libraries = useSelector(state => state.libraries ? state.libraries : [])
    const profileLibraries = useSelector(state => {
        const profileId = state.auth?.profileId
        if (profileId) {
            return state.libraries.filter(library => library.libraryProfileId === profileId)
        }
        return []
    })
    const events = useSelector(state => state.events ? state.events : [])
    const checkins = useSelector(state => state.checkIns ? state.checkIns : [])
    const auth = useSelector(state => state.auth ? state.auth : state.auth)
    const user = useSelector(state => state.currentUser)

    const dispatch = useDispatch()
    // const initialEffects = () => {
    const effects = () => {
        dispatch(fetchAuth())
        dispatch(fetchAllLibraries())
        dispatch(fetchEventsByProfileId())
        dispatch(fetchCheckInsByProfileId())
        dispatch(fetchCurrentUser())
        // dispatch(fetchAllCheckInsForProfileTab())
        // dispatch(fetchAllEventsForProfileTab())
    }
    // React.useEffect(initialEffects, [dispatch])
    useEffect(effects, [dispatch])
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
    // const {eventDate, eventDescription, eventName} = events


    return (
        <>
            <Container className={"m-0"} fluid="auto" id={"profileSectionBlk1"}>
                <Row className={"m-0"}>
                    <img src={profileImageBlk1} alt={"profileImage1"} id={"sectionImageBlk"} className={"img-fluid"}/>
                </Row>
            </Container>

            <h1 id={"headLineONE"}>User Profile Information</h1>
            <Container>
                <Row className={"gx-md-3 px-3 justify-content-around"}>
                    <Col  md={5} className={"text-center"} >
                        <div id={"userRegistration"} className={""}>
                            <div className="mb-3" >
                                <h3>First Name: </h3>
                                <div> {profileFirstName}</div>
                            </div>

                            <div className="mb-3" >
                                <h3>Last Name: </h3>
                                <div>{profileLastName}</div>
                            </div>

                            <div className="mb-3" >
                                <h3>Email address: </h3>
                                <div>{profileEmail}</div>
                            </div>

                            <div className="mb-3">
                                <h3>User Name: </h3>
                                <div>{profileName}</div>
                            </div>
                        </div>

                        <ProfileUpdateModal className={""}/>
                        <Link to={"/library-create"} className={"btn-primary"}><Button className={"m-2"}>Add a Library</Button></Link>

                    </Col>
                    <Col md={2} className={"text-center pb-4"} fluid="auto">
                        <h1 id={"headLineONE"}>User Image</h1>
                        <Image src={profileAvatarUrl} className={"rounded-circle"} alt={'Please select an avatar or upload a photo using the "Update Profile" button.'} ></Image>
                    </Col>
                </Row>
            </Container>
            <div className={"pt-3"} id={"profileDetailTabsSec"}>
                <Tabs
                    defaultActiveKey="profile"
                    className="mb-3"
                    style={{fontSize: "x-large"}}
                    fluid="auto"
                >
                    <Tab eventKey="events" title="Events">
                        <Container md={4} id={"profileEventsTab"}>
                            <Row>
                                <Stack gap={3} className={"align-items-center"}>
                                    {/*WE ARE FETCHING LIBRARIES BY PROFILEID, CANNOT FOR EVENTS HELD AT OTHER OWNER'S LIBRARY (OR DO WE ONLY ALLOW OWNERS TO HOST AT THEIR LOCATIONS?)*/}
                                     {events.slice(0).map(event => <EventDetailBlockProfile library={libraries.filter(library => library.libraryId)[0]} user={user} event={event} key={event.eventId}/>)}
                                </Stack>
                            </Row>
                        </Container >
                    </Tab>
                    <Tab eventKey="check-ins" title="Check-Ins" id={"profileLibraryTab"}>
                        <Container md={4} style={{paddingBottom: "20px"}} id={"profileCheckInTab"} >
                            <Row>
                                <Stack gap={3} className={"align-items-center"}>
                                    {checkins.map (checkin => <CheckInDetailBlockProfile checkin={checkin} user={user} key={checkin.checkInId}/>)}
                                </Stack>
                            </Row>
                        </Container>
                    </Tab>
                    <Tab eventKey="libraries" title="Libraries">
                        <Container md={4} style={{paddingBottom: "20px"}} id={"profileLibraryTab"}>
                            <Row>
                                <Stack gap={3} className={"align-items-center"}>
                                    {profileLibraries.map (library => <LibraryDetailBlockProfile library={library} user={user} key={library.libraryId}/>)}
                                </Stack>
                            </Row>
                        </Container>
                    </Tab>

                </Tabs>
            </div>


            <Container className={""} fluid="auto">
                <Row className={"m-0"} id={"profileSectionBlk4"}>
                    <Col md={4} style={{paddingBottom: "20px"}}>
                        <img src={headshot} alt={"llStock1"} id={"sectionImageBlk"} className={"img-fluid"}/>
                    </Col>
                    <Col className={"pt-3"}>
                        <h1>Want to Take a Better Headshot from Home?</h1>
                        <h3 className={"mb-31"}>Read more at Wired.com</h3>
                        <a target="blank" href={"https://www.wired.com/story/how-to-professional-headshot-smartphone-camera/"}><Button className={"mb-3"}>Go to Article</Button></a>
                    </Col>
                </Row>
            </Container>

            <Container className={"m-0"} fluid="auto" id={"profileSectionBlk5"}>
                <Row className={"m-0"}>
                    <img src={profileImageBlk3} alt={"profileImage5"} id={"sectionImageBlk"} className={"img-fluid"}/>
                </Row>
            </Container>


            <Container className={""} fluid="auto">
                <Row className={"m-0 "} id={"profileSectionBlk3"}>
                    <Col md={8} style={{paddingBottom: "20px"}} className={"flex order-last order-md-first"}>
                        <h1 className={""}>Learn to Speed Read</h1>
                        <p>Speed reading a great way to train your brain to absorb information fast. The base concept entails learning to scan the page and omitting small words, allowing the brain to fill in the information automatically. Many successful individuals credit speed reading as a tool to become stronger readers and better time management.</p>
                        <p>Check out these sites for tips on speed reading to learn more.</p>
                        <Stack gap={2}>
                            <a target="blank" href={"https://www.lifehack.org/articles/productivity/10-ways-increase-your-reading-speed.html"}>LifeHack.org: How to Read Faster: 11 Ways to Increase Your Reading Speed</a>
                            <a target="blank" href={"https://www.courselounge.com/speed-reading-techniques/"}>CourseLounge.com: 8 Speed Reading Techniques To Read Faster</a>
                            <a target="blank" href={"https://ideas.ted.com/a-speed-reader-shares-3-tricks-to-help-anyone-read-faster/"}>Ideas.Ted.com: A Speed Reader Shares 3 Tricks to Help Anyone Read Faster</a>
                            <a target="blank" href={"https://www.speedreadinglounge.com/how-to-speed-read"}>SpeedReadingLounge.com: How To Speed Read – 6 Easy Techniques</a>
                        </Stack>
                    </Col>
                    <Col md={4}  style={{paddingBottom: "20px"}} className={"flex order-first order-md-last"}>
                        <img src={reader} alt={"reader"} id={"sectionImageBlk"} className={"img-fluid"}/>
                    </Col>
                </Row>
            </Container>


            <Container className={"m-0"} fluid="auto" id={"profileSectionBlk2"}>
                <Row className={"m-0"}>
                    <img src={profileImageBlk2} alt={"profileImage2"} id={"sectionImageBlk"} className={"img-fluid"}/>
                </Row>
            </Container>

        </>
    )
}