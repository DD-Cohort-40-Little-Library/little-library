import * as Yup from "yup";
import {httpConfig} from "../shared/utils/http-config.js";
import {Formik} from "formik";
import {Button, Form, FormControl, InputGroup} from "react-bootstrap";
import {DisplayError} from "../shared/components/display-error/DisplayError.jsx";
import React from "react";
import {DisplayStatus} from "../shared/components/display-status/DisplayStatus";
import {useDropzone} from "react-dropzone";
import envelopeIcon from "../../../images/uiSharedImages/mail-bk-rd.png";


export const ProfileUpdateForm = (props) => {
    const { profile } = props

    const validationObject = Yup.object().shape({
        profileEmail: Yup.string()
            .email('Email must be a valid email'),
        profileFirstName: Yup.string(),
        profileLastName: Yup.string(),
        profileName: Yup.string(),
        profileAvatarUrl: Yup.mixed()
    })

    function profileEditedSubmit (values, { resetForm, setStatus}) {
        const profileUpdatedSubmit = (updatedProfile) => {
            httpConfig.put(`/apis/profile/${profile.profileId}`, updatedProfile)
                .then(reply => {
                    let {message, type}=reply
                    if (reply.status ===200) {
                        resetForm()
                    }
                    setStatus({ message, type})
                    return (reply)
                })
        }

        if (values.profileAvatarUrl !== undefined) {
            httpConfig.post(`/apis/image-upload/`, values.profileAvatarUrl)
                .then(reply => {
                    let {message, type} = reply
                    if (reply.status === 200) {
                        profileUpdatedSubmit({...values, profileAvatarUrl: message})
                    } else {
                        setStatus({message, type})
                    }
                }
            )
        }   else {
            profileUpdatedSubmit(values)
        }
    }
    return(
        <Formik
            initialValues={profile}
            onSubmit={profileEditedSubmit}
            validationSchema={validationObject}
            >
            {ProfileEditFormContent}
        </Formik>
    )

}

function ProfileEditFormContent (props) {
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
            <Form onSubmit={handleSubmit} className={"bg-light border-dark"}>
                {/*controlId must match what is passed to the initialValues prop*/}
                <Form.Group controlId={'profileEmail'}>
                    <Form.Label>Email</Form.Label>
                    <InputGroup>
                        {/*<InputGroup.Text>*/}
                        {/*    <img src={envelopeIcon} alt={"envelope icon"}/>*/}
                        {/*</InputGroup.Text>*/}
                        <FormControl
                            // className="form-control"
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
                        {/*<InputGroup.Text>*/}
                        {/*    UserName*/}
                        {/*</InputGroup.Text>*/}
                        <FormControl
                            // className="form-control"
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
                        {/*<InputGroup.Text>*/}
                        {/*    UserName*/}
                        {/*</InputGroup.Text>*/}
                        <FormControl
                            // className="form-control"
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
                        {/*<InputGroup.Text>*/}
                        {/*    UserName*/}
                        {/*</InputGroup.Text>*/}
                        <FormControl
                            // className="form-control"
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
                values, handleChange, handleBlur, setFieldValue, fieldValue:'profileAvatarURL'
                    }}
                />
                <Form.Group>
                    <Button className={"btn btn-primary"} type={"submit"}>Submit</Button>
                    {''}
                    <Button className={"btn btn-secondary"} onClick={handleReset} disabled={!dirty || isSubmitting}>Cancel</Button>
                </Form.Group>
            </Form>
            <DisplayStatus status={status}/>
        </>
    )
}

function ImageDropZone ({formikProps}) {
    const onDrop = React.useCallback(acceptedFiles => {
        const formData = new FormData()
        formData.append('image', acceptedFiles[0])
        formikProps.setFieldValue(formikProps.fieldValue, formData)

}, [formikProps])
const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

return (
    <Form.Group {...getRootProps()}>
        <Form.Label>Change</Form.Label>
        <InputGroup size={"lg"}>
            {formikProps.values.profileAvatarUrl &&
            <>
            <div className={"bg-transparent"}>
                <Image fluid={true} height={100} thumbnail={true} width={100} alt={"profile avatar"} src={formikProps.values.profileAvatarUrl} />
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
                    <span className={"align-content-center"}>Drag and drop image here, or click here to select an image</span> }
            </div>
        </InputGroup>
    </Form.Group>
    )
}

