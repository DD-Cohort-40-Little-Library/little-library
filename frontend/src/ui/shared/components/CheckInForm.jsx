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
    const dispatch = useDispatch()
    const validator = Yup.object().shape({
        checkInLibraryId: Yup.string()
            .required('must select a library'),
        checkInComment: Yup.string(),
        checkInDate: Yup.date(),
        checkInFollowLibrary: Yup.boolean(),
        checkInPhotoName: Yup.string(),
        checkInPhotoUrl: Yup.string(),
        checkInReport: Yup.boolean()
    })

    const checkIn = {
        checkInLibraryId: "",
        checkInComment: "",
        checkInDate: +new Date,
        checkInFollowLibrary: false,
        checkInPhotoName: "",
        checkInPhotoUrl: "",
        checkInReport: false
    }

    const submitCheckIn = (values, {resetForm, setStatus}) => {
        httpConfig.post('/apis/check-in/', values)
            .then(reply => {
                let {message, type} = reply
                if (reply.status === 200) {
                    resetForm()
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

function CheckInFormContent (props) {
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
    const libraries = useSelector(state => state.libraries ?? [])

    return (

        <>
            <Container style={{paddingBlock: '1rem', backgroundColor: 'lightgrey'}}>
                <Form>
                    <fieldset>
                        <InputGroup>
                            <InputGroup.Text>Enter Comments Here</InputGroup.Text>
                            <Form.Control as="textarea" aria-label="commentText" rows={4}/>
                        </InputGroup>
                        {/*<Form.Group className="mb-3">*/}
                        {/*    <Form.Check*/}
                        {/*        type="checkbox"*/}
                        {/*        id="FieldsetCheck"*/}
                        {/*        label="Report Damage to Library Owner"*/}
                        {/*    />*/}
                        {/*    <Form.Text id="CommentRules" muted>*/}
                        {/*        Your comments must be 8-255 characters long. Your comments will be displayed and monitored. Please refrain from using offensive language and hate speech. Thank you.*/}
                        {/*    </Form.Text>*/}
                        {/*</Form.Group>*/}
                        <Row>
                            <Col md={10} style={{padding: '1rem'}}>
                                <Button type="submit">Submit</Button>
                            </Col>
                            <Col md={2} style={{padding: '1rem'}}>
                                <Button type="button">Upload Photo</Button>
                            </Col>
                        </Row>
                    </fieldset>
                </Form>
            </Container>
            <DisplayStatus status={status}/>
            <FormDebugger {...props}/>
        </>
    )
}
