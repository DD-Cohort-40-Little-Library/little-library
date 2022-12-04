import React, {useState} from "react";
import {Button, Form, Col, Container, Image, Row} from "react-bootstrap";


export const ProfileRegistration = () => {
    return (
        <>
            <h1 id={"sectionHeadlineONE"} className={"text-center"}>Profile Registration</h1>
            <Container style={{alignContent: "space-evenly"}}>
                <Row className={"m-2"}>
                    <Col id={"userRegistration"} className={"text-center"} >
                        <h3 id={"sectionHeadlineTWO"}>User Registration</h3>
                        <Form>
                            <Form.Group className="mb-3" controlId="formFirstName">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter First Name" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formLastName">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter Last Name" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                                <Form.Text id={"profileRegText"}>
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formUserName">
                                <Form.Label>User Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter User Name" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formPasswordConfirm">
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control type="password" placeholder="Password Confirm" />
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col id={"selected avatar"} className={"text-center"} >
                        <h1 id={"sectionHeadlineTWO"}>Selected Avatar</h1>
                        <Image src={'http://placekitten.com/400/400'} fluid={true} className={"rounded-circle"} alt={'selected avatar'} ></Image>
                    </Col>
                    <Col id={"user avatars"} className={"text-center"}>
                        <h1 id={"sectionHeadlineTWO"}>User Avatars</h1>
                        <Image src={"https:placeimg.com/450/450/any"} alt={'avatar selection'}></Image>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Col md={{ span: "auto", offset: 11 }}>
                    <Button type={"submit"}>
                        Submit
                    </Button>
                </Col>
            </Container>
        </>
    )
}