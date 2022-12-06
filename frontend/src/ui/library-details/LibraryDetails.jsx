import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from "react";
import {Col, Container, Image, Row, Stack, Tab, Tabs} from "react-bootstrap";
import {EventListing} from "../shared/components/EventListing.jsx";
import {CheckInDisplay} from "../shared/components/CheckInDisplay.jsx";



export function LibraryDetails() {


    return (
        <>
        <div style={{paddingBlock: '2rem'}}>
        <Card className="text-center">
            <Card.Header>Library Location Details and Type</Card.Header>
            <Card.Body>
                <Image src={'https://placekitten.com/g/200/200'} roundedCircle={true}/>
                <Card.Title>Special Library Text</Card.Title>
                <Card.Text>
                    <p>Spicy jalapeno bacon ipsum dolor amet brisket venison swine drumstick kevin leberkas porchetta doner. Andouille burgdoggen porchetta buffalo. Turducken beef porchetta, kevin tri-tip bacon pig t-bone strip steak turkey meatball venison corned beef bresaola pork loin. Ball tip corned beef doner t-bone beef, pork belly frankfurter boudin short loin turducken spare ribs fatback rump buffalo.</p>
                    <p>Tri-tip beef shankle swine, picanha fatback alcatra shoulder ground round jerky short loin. Drumstick bresaola porchetta pastrami buffalo. Meatball capicola ground round brisket. Chicken landjaeger capicola frankfurter sirloin.</p>
                </Card.Text>
                <Row>
                <Col md={7} style={{padding: '1rem'}}>
                <Button variant="primary">Check In</Button>
                </Col>
                <Col md={3} style={{padding: '1rem'}}>
                <Button variant="primary">Sign Guest Book</Button>
                </Col>
                </Row>
            </Card.Body>
            <Card.Footer className="text-muted">Next Event in 3 Days</Card.Footer>
        </Card>

        <Tabs
            defaultActiveKey="profile"
            id="library-details-tabs"
            className="mb-3"
        >
            <Tab eventKey="events" title="Events">
                <Container>
                    <Row>
                        <p>TEST 1, DELETE LATER</p>
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
        </Tabs>
        </div>
        </>
    );
    }


