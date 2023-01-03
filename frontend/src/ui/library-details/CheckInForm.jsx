import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Col, Container, FormControl, Image, InputGroup, Row} from "react-bootstrap";
import * as Yup from 'yup'
import {DisplayStatus} from "../shared/components/display-status/DisplayStatus.jsx";
import {useDispatch, useSelector} from "react-redux";
import {httpConfig} from "../shared/utils/http-config.js";
import {Formik} from "formik";
import {DisplayError} from "../shared/components/display-error/DisplayError.jsx";
import {useParams} from "react-router-dom";
import {fetchAuth, getAuth} from "../../store/auth.js";
import {FormDebugger} from "../shared/components/FormDebugger.jsx";
import {useDropzone} from "react-dropzone";


export function CheckInForm() {

    const validator = Yup.object().shape({
        checkInLibraryId: Yup.string()
            .required('must select a library'),
        checkInComment: Yup.string(),
        checkInDate: Yup.string(),
        checkInFollowLibrary: Yup.boolean(),
        // checkInPhotoName: Yup.string(),
        checkInPhotoUrl: Yup.mixed(),
        checkInReport: Yup.boolean()
    })

    const dispatch = useDispatch()
    const auth = useSelector(state => state.auth ? state.auth : state.auth)
    const initialEffects = () => {
        dispatch(fetchAuth())
    }

    React.useEffect(initialEffects, [dispatch])

    if (auth === null) {
        return <h1>Please sign in</h1>
    }

    let profileId = auth.profileId
    let libraryId = useParams().libraryId

    const checkIn = {
        checkInProfileId: profileId,
        checkInLibraryId: libraryId,
        checkInComment: "",
        checkInDate: new Date(),
        checkInFollowLibrary: false,
        // checkInPhotoName: "",
        checkInPhotoUrl: "",
        checkInReport: false,
        // libraryName: "",
        // libraryAddress: ""
    }

    const submitCheckIn = (values, {resetForm, setStatus}) => {

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

    if (selectedImage !== null) {
        httpConfig.post(`/apis/image-upload/`, values.checkInPhotoUrl)
            .then(reply => {
                    let {message, type} = reply
                    if (reply.status === 200) {
                        checkInPro({...values, checkInPhotoUrl: message})
                        dispatch(getAuth({...values, checkInPhotoUrl: message}))
                    } else {
                        setStatus({message, type})
                    }
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

function CheckInFormContent(props) {
    const {
        setFieldValue,
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

    const [selectedImage, setSelectedImage] = useState(null)

    return (

        <>
            <Container style={{paddingBlock: '1rem', backgroundColor: 'lightgrey'}}>
                <Form onSubmit={handleSubmit} className={"text-center"}>
                    <label>Please let us know how your visit was.</label>

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

                    <ImageDropZone
                        formikProps={{
                            values, handleChange, handleBlur, setFieldValue, fieldValue:'checkInPhotoUrl', setSelectedImage: setSelectedImage
                        }}
                    />
                    <div>
                        {selectedImage !== null ? <img className={"w-50"} src={selectedImage}/> : ""}
                    </div>
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
        </>
    )
}


function ImageDropZone ({formikProps}) {
    const onDrop = React.useCallback(acceptedFiles => {
        const formData = new FormData()
        formData.append('image', acceptedFiles[0])

        const fileReader = new FileReader()
        fileReader.readAsDataURL(acceptedFiles[0])
        fileReader.addEventListener("load", () => {
            formikProps.setSelectedImage(fileReader.result)
        })

        // console.log(formikProps.values.checkInPhotoUrl)
        formikProps.setFieldValue(formikProps.fieldValue, formData)

    }, [formikProps])
    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

    return (
        <Form.Group {...getRootProps()} className={"text-center fs-5"}>
            <Form.Label>Why not add a photo of your latest trip?</Form.Label>
            <InputGroup size={"lg"} className={"border border-dark justify-content-center"}>
                {formikProps.values.checkInPhotoUrl &&
                    <>
                        <div className={"bg-transparent"}>
                            <Image fluid={true} height={200} thumbnail={true} width={200} alt={"checkin photo"} src={formikProps.values.checkInPhotoUrl} />
                        </div>
                    </>
                }
                <div className={"d-flex flex-fill justify-content-center align-content-center bg-light border-dark border"}>
                    <FormControl
                        aria-label={"Profile avatar file drag and drop zone"}
                        aria-describedby={"image drag and drop area"}
                        className={"form-control-file"}
                        accept={"image/*"}
                        onChange={formikProps.handleChange}
                        onBlur={formikProps.handleBlur}
                        {...getInputProps()}
                    />
                    {
                        isDragActive ?
                            <span className={"align-content-center"}>Drop image here</span> :
                            <span className={"align-content-center"}>Drag and drop image here, or click here to select an image. File size limit is 10MB.</span> }
                </div>
            </InputGroup>
        </Form.Group>
    )
}
