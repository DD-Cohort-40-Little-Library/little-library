import React from "react";
import Card from 'react-bootstrap/Card';
import {Col, Container, Image, Row, Stack, Tab, Tabs} from "react-bootstrap";
import {EventListing} from "../shared/components/EventListing.jsx";
import {CheckInDisplay} from "../shared/components/CheckInDisplay.jsx";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {CheckInModal} from "./CheckInModal";

export function LibraryDetails() {

    let {libraryId} = useParams()
    const dispatch = useDispatch()
    const library = useSelector(state => {return state.libraries ? state.libraries
        .filter(library => library.libraryId === libraryId)[0]
        : null})
    const specialization = () => {
        if(library.librarySpecialization === null){
            return ""
        } else {
            return library.librarySpecialization
        }
    }

    return (
        <>
        <div id={"librarySectionDisplay"}>
        <Card className={""} id={"libraryCardDisplay"}>
            <Card.Header>{library.libraryAddress}, {library.libraryType} </Card.Header>
            <Card.Body>
                <Image src={'https://placekitten.com/g/200/200'} roundedCircle={true}/>
                <Card.Title><h3>{library.libraryName}</h3></Card.Title>
                    <h5>{specialization}</h5>
                <Card.Text>{library.libraryDescription}</Card.Text>
                <Row>
                <Col md={7} style={{padding: '1rem'}}>
                    <CheckInModal libraryId />
                </Col>
                <Col md={3} style={{padding: '1rem'}}>
                </Col>
                </Row>
            </Card.Body>
        </Card>

        <Tabs
            defaultActiveKey="profile"
            id="library-details-tabs"
            className="mb-3"
        >
            <Tab eventKey="events" title="Events">
                <Container>
                    <Row>
                        <EventListing />
                    </Row>
                </Container>
            </Tab>
            <Tab eventKey="check-ins" title="Check-Ins">
                <Container>
                    <Row>
                        <CheckInDisplay />
                    </Row>
                </Container>
            </Tab>
        </Tabs>
        </div>
        </>
    )
    }


