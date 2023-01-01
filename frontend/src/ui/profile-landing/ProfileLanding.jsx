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
import {EventDetailBlock} from "./EventDetailBlock";
import {fetchEventsByProfileId} from "../../store/events.js";
import {fetchCheckInsByProfileId} from "../../store/checkIn.js";
import {CheckInDetailBlock} from "./CheckInDetailBlock";
import plsSignIn from "../../../images/uiSharedImages/plsSignIn.svg";
import profileImageBlk1 from "../../../images/uiSharedImages/profileImgBlk1.jpg";
import profileImageBlk2 from "../../../images/uiSharedImages/profileImgBlk2.jpg";
import reader from "../../../images/uiSharedImages/profileImgBlk3.jpg";
import headshot from "../../../images/uiSharedImages/profileImgBlk4.jpg";
import profileImageBlk3 from "../../../images/uiSharedImages/profileImgBlk5.jpg";


export function ProfileLanding() {

    const libraries = useSelector(state => state.libraries ? state.libraries : [])
    const events = useSelector(state => state.events ? state.events : [])
    const checkins = useSelector(state => state.checkIns ? state.checkIns : [])

    const dispatch = useDispatch()
    const auth = useSelector(state => state.auth ? state.auth : state.auth)
    const user = useSelector(state => state.currentUser)
    const initialEffects = () => {
        dispatch(fetchAuth())
        dispatch(fetchLibrariesByProfileId())
        dispatch(fetchEventsByProfileId())
        dispatch(fetchCheckInsByProfileId())
        dispatch(fetchCurrentUser())
    }
    React.useEffect(initialEffects, [dispatch])

    // //TODO: REMOVE 'const profile = null' to the end  from line below after pulling currentUser w/ useSelector=profile
    if (user === null) {
        return <div>
                    <Image src={plsSignIn} alt={"pleaseSignIn"} id={"pleaseSignIn"}/>
               </div>
    }
    const {profileFirstName, profileLastName, profileEmail, profileName, profileAvatarUrl, profileId} = user
    const libraryProfileId = auth.profileId

    const {libraryName,libraryAddress, libraryDescription, librarySpecialization, libraryEventOptIn, libraryType} = libraries
    const {eventDate, eventDescription, eventName} = events
    const {checkInComment, checkInPhotoUrl} = checkins

    return (
        <>
            <Container className={"m-0"} fluid="auto" id={"profileSectionBlk1"}>
                <Row className={"m-0"}>
                    <img src={profileImageBlk1} alt={"profileImage1"} id={"sectionImageBlk"} className={"img-fluid"}/>
                </Row>

            </Container>



            <h1 id={"headLineONE"}>User Profile Information</h1>
            <Container>
                <Row className={"gx-md-3 p-3 justify-content-around"}>
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
                        <Link to={"/library-create"} className={"btn-primary"}> <Button className={"m-2"}> Add a Library</Button></Link>

                    </Col>
                    <Col md={3} className={"text-center"} >
                        <h3 id={"headLineONE"}>User Image</h3>
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
                                {checkins.map (checkin => <CheckInDetailBlock checkin={checkin}/>)}                            </Row>
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

            <Container className={""} fluid="auto">
                <Row className={"m-0 "} id={"profileSectionBlk4"}>
                    <Col>
                        <img src={headshot} alt={"llStock1"} id={"sectionImageBlk"} className={""} style={{width: '30rem'}}/>
                    </Col>
                    <Col className={"pt-3"}>
                        <h1>Want to take a Better Headshot from Home?</h1>
                        <h3 className={"mb-31"}>Read more at Wired.com</h3>
                        <a target="_blank" href={"https://www.wired.com/story/how-to-professional-headshot-smartphone-camera/"}><Button className={"mb-3"}>Go to Article</Button></a>
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
                    <Col>
                        <h1 className={""}>Learn to Speed Read</h1>
                        <p>Speed reading a great way to train your brain to absorb information fast. The base concept entails learning to scan the page and omitting small words, allowing the brain to fill in the information automatically. Many successful individuals credit speed reading as a tool to become stronger readers and better time management. </p>
                        <p>Check out these sites for tips on speed reading to learn more.</p>
                        <Stack gap={2}>
                            <a target="_blank" href={"https://www.lifehack.org/articles/productivity/10-ways-increase-your-reading-speed.html"}>LifeHack.org: How to Read Faster: 11 Ways to Increase Your Reading Speed</a>
                            <a target="_blank" href={"https://www.courselounge.com/speed-reading-techniques/"}>CourseLounge.com: 8 Speed Reading Techniques To Read Faster</a>
                            <a target="_blank" href={"https://ideas.ted.com/a-speed-reader-shares-3-tricks-to-help-anyone-read-faster/"}>Ideas.Ted.com: A Speed Reader Shares 3 Tricks to Help Anyone Read Faster</a>
                            <a target="_blank" href={"https://www.speedreadinglounge.com/how-to-speed-read"}>SpeedReadingLounge.com: How To Speed Read – 6 Easy Techniques</a>
                        </Stack>
                    </Col>
                    <Col>
                        <img src={reader} alt={"reader"} id={"sectionImageBlk"} className={""} style={{width: '30rem'}}/>
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