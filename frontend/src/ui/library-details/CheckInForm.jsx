import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Col, Container, InputGroup, Row} from "react-bootstrap";
import * as Yup from 'yup'
import {DisplayStatus} from "../shared/components/display-status/DisplayStatus.jsx";
import {FormDebugger} from "../shared/components/FormDebugger.jsx";
import {useDispatch, useSelector} from "react-redux";
import {httpConfig} from "../shared/utils/http-config.js";
import {Formik} from "formik";
import {DisplayError} from "../shared/components/display-error/DisplayError.jsx";
import {useParams} from "react-router-dom";
import {fetchAuth} from "../../store/auth.js";

export function CheckInForm() {

    const validator = Yup.object().shape({
        checkInLibraryId: Yup.string()
            .required('must select a library'),
        checkInComment: Yup.string(),
        checkInDate: Yup.string(),
        checkInFollowLibrary: Yup.boolean(),
        // checkInPhotoName: Yup.string(),
        // checkInPhotoUrl: Yup.string(),
        checkInReport: Yup.boolean()
    })

    const dispatch = useDispatch()
    const auth = useSelector(state => state.auth ? state.auth : state.auth)
    const initialEffects = () => {
        dispatch(fetchAuth())
    }
    React.useEffect(initialEffects, [dispatch])

    // //TODO: REMOVE 'const profile = null' to the end  from line below after pulling currentUser w/ useSelector=profile
    // const profile = null
    if (auth === null) {
        return <h1>Please sign in</h1>
    }

    let profileId = auth.profileId
    let libraryId = useParams().libraryId

    const checkIn = {
        // need to set initial value of form checkin library ID to current library from redux
        checkInProfileId: profileId,
        checkInLibraryId: libraryId,
        checkInComment: "",
        checkInDate: new Date(),
        checkInFollowLibrary: false,
        // checkInPhotoName: "",
        // checkInPhotoUrl: "",
        checkInReport: false
    }
// console.log({checkInLibraryId})

    const submitCheckIn = (values, {resetForm, setStatus}) => {
        console.log("made it here")
        // const checkInLibraryId = libraries.libraryID

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
                    {/*<Form.Group controlId="checkInLibraryId">*/}
                        {/*<InputGroup>*/}
                        {/*    <Form.Control*/}
                        {/*        className="form-control"*/}
                        {/*        as="textarea"*/}
                        {/*        aria-label="commentText"*/}
                        {/*        // rows={4}*/}
                        {/*        type="text"*/}
                        {/*        value={values.checkInLibraryId}*/}
                        {/*        name="checkInLibraryId"*/}
                        {/*        onChange={handleChange}*/}
                        {/*        onBlur={handleBlur}*/}
                        {/*        // placeholder="Your comments must be 8-255 characters long. Your comments will be displayed and monitored. Please refrain from using offensive language and hate speech. Thank you."*/}
                        {/*    />*/}
                        {/*</InputGroup>*/}

                        <Form.Group controlId="checkInComment">
                            <InputGroup>
                                <Form.Control
                                    className={"form-control"}
                                    as={"textarea"}
                                    aria-label={"commentText"}
                                    rows={4}
                                    type={"text"}
                                    value={values.checkInComment}
                                    name={"checkInComment"}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    placeholder={"Your comments must be 8-255 characters long. Your comments will be displayed and monitored. Please refrain from using offensive language and hate speech. Thank you."}
                                />
                            </InputGroup>
                            <DisplayError errors={errors} touched={touched} field={"checkinComment"} />
                        </Form.Group>
                    <Form.Group className={"mt-3"}>
                        <Button className={"btn btn-primary"} onClick={handleSubmit}>Submit</Button>
                        {" "}
                        <Button
                            className={"btn btn-danger"}
                            onClick={handleReset}
                            disabled={!dirty || isSubmitting}
                        >Reset
                        </Button>
                    </Form.Group>
                </Form>
            </Container>
            <DisplayStatus status={status}/>
            {/*<FormDebugger {...props}/>*/}
        </>
    )
}
