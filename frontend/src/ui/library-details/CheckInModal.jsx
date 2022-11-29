import React, {useState} from 'react'
import {Button, Col, FloatingLabel, Form, InputGroup, Modal, Row} from "react-bootstrap";


export function CheckInModal(){
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    return(
        <>
            <Button variant={'light'} onClick={handleShow} className={"border border-dark"}>
                Check In
            </Button>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Form>
                    <Row>
                        <h3 className={"text-center"}>Check In</h3>
                        <Form>
                            <fieldset>
                                <InputGroup>
                                    <InputGroup.Text>Enter Comments Here</InputGroup.Text>
                                    <Form.Control as="textarea" aria-label="commentText" rows={4}/>
                                </InputGroup>
                                <Form.Group className="mb-3">
                                    <Form.Check
                                        type="checkbox"
                                        id="FieldsetCheck"
                                        label="Report Damage to Library Owner"
                                    />
                                    <Form.Text id="CommentRules" muted>
                                        Your comments must be 8-255 characters long. Your comments will be displayed and monitored. Please refrain from using offensive language and hate speech. Thank you.
                                    </Form.Text>
                                </Form.Group>
                                <Row>
                                    <Col>
                                    </Col>
                                </Row>
                            </fieldset>
                        </Form>
                    </Row>
                </Form>
                <Modal.Footer>
                    <Button type={"button"}>Upload Photo</Button>
                    <Button variant="light" onClick={handleClose}>Close</Button>
                    <Button type={'submit'} variant="secondary">Submit</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}