import React, {useState} from "react";
import {Formik, useField} from "formik";
import * as Yup from "yup";
import {httpConfig} from "../../utils/http-config.js";
import {Button, Card, Col, Figure, Form, FormControl, FormSelect, InputGroup, Row} from "react-bootstrap";
import {DisplayError} from "../display-error/DisplayError.jsx";
import {DisplayStatus} from "../display-status/DisplayStatus.jsx";
import {useDropzone} from "react-dropzone";

const LibraryEventCheckbox = ({ children, ...props }) => {
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

const LibrarySpecializationSelectType = ({ label, ...props }) => {
    const [field, meta] = useField(props)
    return (
        <>
            <label htmlFor={props.id || props.name}>{label}</label>
            <FormSelect {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className={'error'}>{meta.error}</div>
            ) : null}
        </>
    )
}

export const LibraryCreateForm = () => {
    const createLibrary ={
        libraryAddress: "",
        libraryDescription: "",
        libraryEventOptIn: false,
        libraryImageURL: "",
        libraryName: "",
        librarySpecialization: "",
        libraryType: "Little Library"
}


    const validator = Yup.object().shape({
        libraryAddress: Yup.string()
            .required('Address is required'),
        libraryDescription: Yup.string(),
        libraryEventOptIn: Yup.boolean(),
        libraryImageURL: Yup.mixed(),
        libraryName: Yup.string()
            .required('Name is required'),
        librarySpecialization: Yup.string(),
        libraryType: Yup.string()
    })
    const submitLibraryCreate = (values, {resetForm, setStatus}) => {
        httpConfig.post('/apis/library/', values)
            .then(reply => {
                    let {message, type}=reply
                    if (reply.status === 200) {
                        resetForm()
                    }
                    setStatus ({message, type})
                }
            )
    }
    return (
        <Formik
            initialValues={createLibrary}
            onSubmit={submitLibraryCreate}
            validationSchema={validator}
        >
            {LibraryCreateFormContent}
        </Formik>
    )
}

function LibraryCreateFormContent (props){
    const [selectedImage, setSelectedImage] = useState(null)
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
            <div className={"text-center"} id={"libraryCreateFormGlobal"}>
                <h1 id={"headLineONE"}>Register Your Library</h1>
            </div>
            <Card id={"libraryRegisterCard"}>
            <Form onSubmit={handleSubmit}>

                <Row>

                    <Col md={6} className={"m-2 text-center"}>
                            <Form.Group controlId={'libraryAddress'}>
                            <Form.Label>Library Address</Form.Label>
                            <InputGroup>
                                <FormControl
                                    name="libraryAddress"
                                    type="text"
                                    value={values.libraryAddress}
                                    placeholder='Example: 1109 N Highland St, Arlington, VA'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                            </InputGroup>
                            <DisplayError errors={errors} touched={touched} field={'libraryAddress'}/>
                        </Form.Group>

                        <Form.Group controlId={'libraryEventOptIn'}>
                            <LibraryEventCheckbox name={'libraryEventOptIn'}>Are events available at your library?</LibraryEventCheckbox>
                            <DisplayError errors={errors} touched={touched} field={'libraryEventOptIn'}/>
                        </Form.Group>

                        <Form.Group controlId={'libraryName'}>
                            <Form.Label>Library Name</Form.Label>
                            <InputGroup>
                                <FormControl
                                    name='libraryName'
                                    type='text'
                                    value={values.libraryName}
                                    placeholder='Library Name'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                            </InputGroup>
                            <DisplayError errors={errors} touched={touched} field={'libraryName'}/>
                        </Form.Group>

                        <Form.Group className="mb=3" controlId="Library Specialization">
                            <LibrarySpecializationSelectType label={'(Optional) Choose a Specialization'} name="librarySpecialization" className={"mt-2"}>
                                <option value={''}>Little Library</option>
                                <option value={'Animals or Pets'}>Animals/Pets</option>
                                <option value={'Art'}>Art</option>
                                <option value={'Automotive'}>Automotive</option>
                                <option value={'Baby'}>Baby</option>
                                <option value={'Children'}>Children's</option>
                                <option value={'Cooking'}>Cooking</option>
                                <option value={'Fantasy'}>Fantasy</option>
                                <option value={'Fiction'}>Fitness</option>
                                <option value={'Finance'}>Finance</option>
                                <option value={'Fitness'}>Fitness</option>
                                <option value={'History'}>History</option>
                                <option value={'Home Improvement'}>Home Improvement</option>
                                <option value={'Horror'}>Horror</option>
                                <option value={'Nature'}>Nature</option>
                                <option value={'Religious'}>Religious</option>
                                <option value={'Romance'}>Romance</option>
                                <option value={'Satire'}>Satire</option>
                                <option value={'Self Improvement'}>Self Improvement</option>
                                <option value={'Space'}>Space</option>
                                <option value={'Sports'}>Sports</option>
                                <option value={'Technical or Textbooks'}>Textbooks/Technical</option>
                                <option value={'Young Adult'}>Young Adult</option>
                            </LibrarySpecializationSelectType>
                        </Form.Group>
                    </Col>

                    <Col md={5} className={"m-2 text-center"}>

                        <ImageDropZone
                            formikProps={{
                                values, handleChange, handleBlur, setFieldValue, fieldValue:'libraryImageUrl', setSelectedImage: setSelectedImage
                            }}
                        />
                        <div>
                            {selectedImage !== null ? <img className={"w-50"} src={selectedImage}/> : ""}
                        </div>

                        <Form.Group controlId={'libraryDescription'}>
                            <Form.Label>Library Description</Form.Label>
                            <InputGroup>
                                <FormControl
                                    as="textarea"
                                    style={{ height: '200px' }}
                                    name='libraryDescription'
                                    type='text-area'
                                    value={values.libraryDescription}
                                    placeholder='Please describe your library'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                            </InputGroup>
                            <DisplayError errors={errors} touched={touched} field={'libraryDescription'}/>
                        </Form.Group>
                    </Col>
                <Form.Group className={"m-4"}>
                    <Button className={"btn btn-primary m-4"} type={"submit"}>Submit</Button>
                    {" "}
                    <Button
                        className={"btn btn-danger m-4"}
                        onClick={handleReset}
                        disabled={!dirty || isSubmitting}
                    >Reset
                    </Button>
                </Form.Group>
                </Row>
            </Form>
            </Card>
            <DisplayStatus status={status} />
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

        console.log(formikProps.values.libraryImageURL)
        formikProps.setFieldValue(formikProps.fieldValue, formData)

    }, [formikProps])
    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

    return (
        <Form.Group {...getRootProps()}>
            <Form.Label>Change Avatar</Form.Label>
            <InputGroup size={"lg"} className={"border border-dark justify-content-center"}>
                {formikProps.values.libraryImageURL &&
                    <>
                        <div className={"bg-transparent"}>
                            {/*<Image fluid={true} height={200} thumbnail={true} width={200} alt={"profile avatar"} src={formikProps.values.profileAvatarUrl} />*/}
                        </div>
                    </>
                }
                <div className={"d-flex flex-fill bg-light justify-content-center align-content-center border-dark border"}>
                    <FormControl
                        aria-label={"Library Image file drag and drop zone"}
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
