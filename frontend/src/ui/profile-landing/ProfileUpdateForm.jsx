import * as Yup from "yup";
import {httpConfig} from "../shared/utils/http-config.js";
import {Formik} from "formik";
import {Button, Form, FormControl, Image, InputGroup} from "react-bootstrap";
import {DisplayError} from "../shared/components/display-error/DisplayError.jsx";
import React, {useState} from "react";
import {DisplayStatus} from "../shared/components/display-status/DisplayStatus";
import {useDropzone} from "react-dropzone";
import envelopeIcon from "../../../images/uiSharedImages/mail-bk-rd.png";
import {useDispatch, useSelector} from "react-redux";
import {fetchCurrentUser, getCurrentUserByProfileId} from "../../store/currentUser.js";
import {fetchAuth, getAuth} from "../../store/auth.js";


export const ProfileUpdateForm = (props) => {
    const profile = useSelector(state => state.currentUser ? state.currentUser : null)
    const validationObject = Yup.object().shape({
        profileEmail: Yup.string()
            .email('Email must be a valid email'),
        profileFirstName: Yup.string(),
        profileLastName: Yup.string(),
        profileName: Yup.string(),
        profileAvatarUrl: Yup.mixed()
    })
    const initialEffects = () => {
        dispatch(fetchAuth())
    }
    const dispatch = useDispatch()
    const auth = useSelector(state => state.auth ? state.auth : state.auth)

    const [selectedImage, setSelectedImage] = useState(null)

    React.useEffect(initialEffects, [dispatch])
    const secondaryEffect = () => {
        if (auth !== null) {
            dispatch(fetchCurrentUser(auth.profileId))
        }
    }
    React.useEffect(secondaryEffect, [auth, dispatch])

    function profileEditedSubmit (values, { resetForm, setStatus}) {
        const profileUpdatedSubmit = (updatedProfile) => {
            httpConfig.put(`/apis/profile/${profile.profileId}`, updatedProfile)
                .then(reply => {
                    let {message, type}=reply
                    if (reply.status ===200) {
                        resetForm()
                        dispatch(getCurrentUserByProfileId(updatedProfile))
                    }
                    setStatus({ message, type})
                    return (reply)
                })
        }

        if (selectedImage !== null) {
            httpConfig.post(`/apis/image-upload/`, values.profileAvatarUrl)
                .then(reply => {
                    let {message, type} = reply
                    if (reply.status === 200) {
                        profileUpdatedSubmit({...values, profileAvatarUrl: message})
                        dispatch(getAuth({...values, profileAvatarUrl: message}))
                    } else {
                        setStatus({message, type})
                    }
                }
            )
        }   else {
            profileUpdatedSubmit(values)
            dispatch(getAuth(values))
        }
    }
    return(
        <Formik
            initialValues={profile}
            onSubmit={profileEditedSubmit}
            validationSchema={validationObject}
            >
            {(props)=>{

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
                return (
                    <>
                        <Form onSubmit={handleSubmit} className={"bg-light border-dark text-center"}>
                            {/*controlId must match what is passed to the initialValues prop*/}
                            <Form.Group controlId={'profileEmail'}>
                                <Form.Label>Email</Form.Label>
                                <InputGroup>
                                    <InputGroup.Text>
                                        <img src={envelopeIcon} alt={"envelope icon"} />
                                    </InputGroup.Text>
                                    <FormControl
                                        className="text-center"
                                        name="profileEmail"
                                        type="text"
                                        value={values.profileEmail}
                                        placeholder="your@email.com"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                </InputGroup>
                                <DisplayError errors={errors} touched={touched} field={'profileEmail'}/>
                            </Form.Group>
                            <Form.Group controlId={'profileFirstName'}>
                                <Form.Label>Please submit your new first name</Form.Label>
                                <InputGroup>
                                    <FormControl
                                        className="text-center"
                                        name='profileFirstName'
                                        type='text'
                                        value={values.profileFirstName}
                                        placeholder='First Name'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                </InputGroup>
                                <DisplayError errors={errors} touched={touched} field={'profileFirstName'}/>
                            </Form.Group>

                            <Form.Group controlId={'profileLastName'}>
                                <Form.Label>Please submit your new last name</Form.Label>
                                <InputGroup>
                                    <FormControl
                                        className="text-center"
                                        name='profileLastName'
                                        type='text'
                                        value={values.profileLastName}
                                        placeholder='Last Name'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                </InputGroup>
                                <DisplayError errors={errors} touched={touched} field={'profileLastName'}/>
                            </Form.Group>

                            <Form.Group controlId={'profileName'}>
                                <Form.Label>Please submit your new username</Form.Label>
                                <InputGroup>
                                    <FormControl
                                        className="text-center"
                                        name='profileName'
                                        type='text'
                                        value={values.profileName}
                                        placeholder='UserName'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                </InputGroup>
                                <DisplayError errors={errors} touched={touched} field={'profileName'}/>
                            </Form.Group>

                            <ImageDropZone
                                formikProps={{
                                    values, handleChange, handleBlur, setFieldValue, fieldValue:'profileAvatarUrl', setSelectedImage: setSelectedImage
                                }}
                            />
                            <div>
                                {selectedImage !== null ? <img className={"w-50"} src={selectedImage}/> : ""}
                            </div>
                            <Form.Group>
                                <Button className={"btn btn-primary"} type={"submit"}>Submit</Button>
                                {''}
                                <Button className={"btn btn-secondary"} onClick={handleReset} disabled={!dirty || isSubmitting}>Reset Form</Button>
                            </Form.Group>
                        </Form>

                        <DisplayStatus status={status}/>

                    </>
                )
            }}
        </Formik>
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

        formikProps.setFieldValue(formikProps.fieldValue, formData)

    }, [formikProps])
    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

    return (
        <Form.Group {...getRootProps()}>
            <Form.Label>Change Avatar</Form.Label>
            <InputGroup size={"lg"} className={"border border-dark justify-content-center"}>
                {formikProps.values.profileAvatarUrl &&
                    <>
                        <div className={"bg-transparent"}>
                            {/*<Image fluid={true} height={200} thumbnail={true} width={200} alt={"profile avatar"} src={formikProps.values.profileAvatarUrl} />*/}
                        </div>
                    </>
                }
                <div className={"d-flex flex-fill bg-light justify-content-center align-content-center border-dark border"}>
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
