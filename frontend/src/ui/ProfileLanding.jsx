import React from "react";
import {Col, Container, Row, Form, Image, Button, Tabs, Tab, FormText} from "react-bootstrap";

export const ProfileLanding = () => {
    return (
        <>
            <h1>User Landing Page</h1>
            <Container>
                <Row className={"gx-md-3 p-3"}>
                    <Col id={"user registration"} md={4} className={"text-center"} >
                        <h3>User Registration</h3>
                        <Form className={"border border-dark px-3"}>
                            <Form.Group className="mb-3" controlId="formFirstName">
                                <Form.Label>First Name: </Form.Label>
                                <Form.Text> First name from profile</Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formLastName">
                                <Form.Label>Last Name: </Form.Label>
                                <Form.Text> Last name from profile</Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address: </Form.Label>
                                <Form.Text> email from profile</Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formUserName">
                                <Form.Label>User Name: </Form.Label>
                                <Form.Text> User name from profile</Form.Text>
                            </Form.Group>
                        </Form>

                        <Button type={"submit"} variant={"success"} className={"m-5"}>Update Profile</Button>

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
                            </Row>
                        </Container>
                    </Tab>
                    <Tab eventKey="check-ins" title="Check-Ins">
                        <Container>
                            <Row>
                                <p>TEST 2</p>
                            </Row>
                        </Container>
                    </Tab>
                    <Tab eventKey="libraries" title="Libraries">
                        <Container>
                            <Row>
                                <p>TEST 3</p>
                            </Row>
                        </Container>
                    </Tab>

                </Tabs>
            </div>
        </>
    )
}