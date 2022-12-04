import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Col, InputGroup, Row} from "react-bootstrap";
import {useDispatch} from "react-redux";
import {boolean, date} from "yup";
import {httpConfig} from "../utils/http-config.js";
import {Formik, useField} from "formik";
import {DisplayStatus} from "./display-status/DisplayStatus";


export function CheckInForm() {
    const dispatch = useDispatch()

    const validator = useDispatch().shape({
        checkInComment: Yup.string()
            .required('Please enter a comment')
    })

    const checkIn = {
        checkInComment: '',
        checkInPhotoUrl: uploadToCloudinary(),
        checkInReport: boolean,
    }

    const submitCheckIn = (values, {resetForm, setStatus}) => {
        httpConfig.post('/apis/check-in', values)
            .then(reply => {
                    let {message, type} = reply

                    if (reply.status === 200) {
                        resetForm()
                    }
                    setStatus({message, type})
                }
            )
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
    // const libraries= {library.libraryId} > {library.libraryName}

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
        handleReset,
    } = props


    const CheckInCheckbox = ({ children, ...props }) => {
        const [field, meta] = useField({ ...props, type: "checkbox" });
        return (
            <>
                <label className="checkbox">
                    <input {...field} {...props} type="checkbox" />
                    {children}
                </label>
                {meta.touched && meta.error ? (
                    <div className="error">{meta.error}</div>
                ) : null}
            </>
        );
};


    return (
        <>
        <div style={{paddingBlock: '1rem', backgroundColor: 'lightgrey'}}>
        <Form onSubmit={handleSubmit}>
            <fieldset>
                <InputGroup>
                    <InputGroup.Text>Enter Comments Here</InputGroup.Text>
                    <Form.Control as="textarea" aria-label="commentText" rows={4}/>
                </InputGroup>
                <Form.Group className="mb-3">
                    <CheckInCheckbox/>
                    <Form.Text id="CommentRules" muted>
                        Your comments must be 8-255 characters long. Your comments will be displayed and monitored. Please refrain from using offensive language and hate speech. Thank you.
                    </Form.Text>
                </Form.Group>
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
        <DisplayStatus status={status}/>
        </div>
        </>
    );
}

