import React from "react";
import {Button, Form, Col, Container, Image, Row} from "react-bootstrap";

export const ProfileRegistration = () => {

    return (
        <>
            <h1 id={"profileRegProfile"}>Profile Registration</h1>
            <Container>
                <Row className={"gx-md-3 p-3"}>
                    <Col id={"headLineONE"}  md={4} className={""} >
                        <h3 >User Registration</h3>
                        <Form id={"profileRegForm"} className={""}>
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
                                <Form.Text className="text-muted">
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
                    <Col id={"generalColBehavior"} md={3}>
                        <h3 id={"headLineONE"}>Selected Avatar</h3>
                        <Image src={'http://placekitten.com/400/400'} fluid="auto" className={"rounded-circle"} alt={'selected avatar'} ></Image>
                    </Col>
                    <Col id={"generalColBehavior"} md={5}>
                        <h3 id={"headLineONE"}>User Avatars</h3>
                        <Image id={"generalPhotoBehavior"} src={"https:placeimg.com/450/450/any"} alt={'avatar selection'}></Image>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Col id={"generalColBehavior"} md={{ span: "auto", offset: 11 }}>
                    <Button className={"m-4"} type={"submit"}>Submit</Button>
                </Col>
            </Container>
        </>
    )
}