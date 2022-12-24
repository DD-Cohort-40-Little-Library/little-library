import React from "react";
import {Formik, useField} from "formik";
import * as Yup from "yup";
import {httpConfig} from "../../utils/http-config.js";
import {Button, Card, Col, Figure, Form, FormControl, FormSelect, InputGroup, Row} from "react-bootstrap";
import {DisplayError} from "../display-error/DisplayError.jsx";
import {DisplayStatus} from "../display-status/DisplayStatus.jsx";

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
        libraryName: "",
        librarySpecialization: "",
        libraryType: "Little Library"
}
    const validator = Yup.object().shape({
        libraryAddress: Yup.string()
            .required('Address is required'),
        libraryDescription: Yup.string(),
        libraryEventOptIn: Yup.boolean(),
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
                                <option value={''}>Select an specialization type</option>
                                <option value={'Animals/Pets'}>Animals/Pets</option>
                                <option value={'Art'}>Art</option>
                                <option value={'Automotive'}>Automotive</option>
                                <option value={'Baby'}>Baby</option>
                                <option value={'Children'}>Children's</option>
                                <option value={'Cooking'}>Cooking</option>
                                <option value={'Fantasy'}>Fantasy</option>
                                <option value={'Finance'}>Finance</option>
                                <option value={'Fitness'}>Fitness</option>
                                <option value={'History'}>History</option>
                                <option value={'Home Improvement'}>Home Improvement</option>
                                <option value={'Horror'}>Horror</option>
                                <option value={'Nature'}>Nature</option>
                                <option value={'Religious'}>Religious</option>
                                <option value={'Romance'}>Romance</option>
                                <option value={'Satire'}>Satire</option>
                                <option value={'Science Fiction'}>Science Fiction</option>
                                <option value={'Self Improvement'}>Self Improvement</option>
                                <option value={'Space'}>Space</option>
                                <option value={'Sports'}>Sports</option>
                                <option value={'Textbooks/Technical'}>Textbooks/Technical</option>
                                <option value={'Young Adult'}>Young Adult</option>
                            </LibrarySpecializationSelectType>
                        </Form.Group>
                    </Col>

                    <Col md={5} className={"m-2 text-center"}>

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