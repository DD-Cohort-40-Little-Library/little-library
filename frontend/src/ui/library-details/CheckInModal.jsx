import React, {useState} from 'react'
import {Button, Col, FloatingLabel, Form, InputGroup, Modal, Row} from "react-bootstrap";
import {CheckInForm} from "./CheckInForm.jsx";
import {useParams} from "react-router-dom";
import {useDispatch} from "react-redux";



export function CheckInModal(){
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    let libraryId = useParams()
    const dispatch = useDispatch()

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
                                    <CheckInForm libraryId />
                                </InputGroup>
                            </fieldset>
                        </Form>
                    </Row>
                </Form>
                <Modal.Footer>
                    <Button variant="light" onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}