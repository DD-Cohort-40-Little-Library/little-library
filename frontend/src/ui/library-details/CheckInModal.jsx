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
            <Button onClick={handleShow} className={"btn-primary"}>
                Check In
            </Button>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <div>
                    <Row>
                        <h3 className={"text-center"}>Check In</h3>
                        <div>
                            <fieldset>
                                <InputGroup>
                                    <CheckInForm libraryId />
                                </InputGroup>
                            </fieldset>
                        </div>
                    </Row>
                </div>
                <Modal.Footer>
                    <Button variant="light" onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}