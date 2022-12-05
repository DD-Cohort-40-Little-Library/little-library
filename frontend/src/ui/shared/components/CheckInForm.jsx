import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Col, Container, InputGroup, Row} from "react-bootstrap";
import * as Yup from 'yup'
import {DisplayStatus} from "./display-status/DisplayStatus";
import {FormDebugger} from "./FormDebugger";
import {useDispatch, useSelector} from "react-redux";
import {httpConfig} from "../utils/http-config.js";
import {Formik} from "formik";

export function CheckInForm() {
    const libraries = useSelector(state => state.libraries ?? [])
    // const dispatch = useDispatch()
    const validator = Yup.object().shape({
        checkInLibraryId: Yup.string()
            .required('must select a library'),
        checkInComment: Yup.string(),
        checkInDate: Yup.string(),
        checkInFollowLibrary: Yup.boolean(),
        checkInPhotoName: Yup.string(),
        checkInPhotoUrl: Yup.string(),
        checkInReport: Yup.boolean()
    })

    const checkIn = {
        // need to set inital value of form checkin library ID to current library from redux
        checkInLibraryId: "",
        checkInComment: "",
        checkInDate: +new Date,
        checkInFollowLibrary: false,
        checkInPhotoName: "",
        checkInPhotoUrl: "",
        checkInReport: false
    }

    const submitCheckIn = (values, {resetForm, setStatus}) => {
        console.log("made it here")

        httpConfig.post('/apis/check-in/', values)
            .then(reply => {
                let {message, type} = reply
                if (reply.status === 200) {
                    resetForm()
                    //force reload page
                }
                setStatus({message, type})
            })
    }
    return (
        <Formik
            initialValues={checkIn}
            onSubmit={submitCheckIn}
            validationSchema={validator}
        >
            {CheckInFormContent}
        </Formik>
    )
}

function CheckInFormContent(props) {
    const {
        status,
        values,
        errors,
        touched,
        dirty,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit,
        handleReset
    } = props


    return (

        <>
            <Container style={{paddingBlock: '1rem', backgroundColor: 'lightgrey'}}>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="checkInLibraryId">
                        <InputGroup>
                            <Form.Control
                                className="form-control"
                                as="textarea"
                                aria-label="commentText"
                                // rows={4}
                                type="text"
                                value={values.checkInLibraryId}
                                name="checkInLibraryId"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                // placeholder="Your comments must be 8-255 characters long. Your comments will be displayed and monitored. Please refrain from using offensive language and hate speech. Thank you."
                            />
                        </InputGroup>
                    </Form.Group>
                    f1c44122-b4f1-4a8a-99f2-1a096f9cd6dd

                    <Form.Group controlId="checkInReport" className="mb-3">
                        <Form.Check
                            type="checkbox"
                            value={values.checkInReport}
                            name="checkInReport"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            label="Report Damage to Library Owner"
                        />
                    </Form.Group>
                    <Form.Group controlId="checkInComment">
                        <InputGroup>
                            <Form.Control
                                className="form-control"
                                as="textarea"
                                aria-label="commentText"
                                rows={4}
                                type="text"
                                value={values.checkInComment}
                                name="checkInComment"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder="Your comments must be 8-255 characters long. Your comments will be displayed and monitored. Please refrain from using offensive language and hate speech. Thank you."
                            />
                        </InputGroup>
                    </Form.Group>
                    <Form.Group>

                            <Button type="submit">Submit</Button>

                    </Form.Group>
                </Form>
            </Container>
            <DisplayStatus status={status}/>
            <FormDebugger {...props}/>
        </>
    )
}
