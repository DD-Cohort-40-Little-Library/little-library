import React from "react";
import Formik from "formik";
import * as Yup from "yup";
import {httpConfig} from "../../utils/http-config.js";
import {Button, Form, FormControl, InputGroup} from "react-bootstrap";
import {DisplayError} from "../display-error/DisplayError.jsx";
import {DisplayStatus} from "../display-status/DisplayStatus.jsx";

export const LibraryCreateForm = () => {
    const createLibrary ={
        libraryAddress: "",
        libraryDescription: "",
        libraryEventOptIn: "",
        libraryLat:"",
        libraryLng:"",
        libraryName: "",
        librarySpecialization: "",
        libraryType:"Little Library"
}
    const validator = Yup.object().shape({
        libraryAddress: Yup.string()
            .required('Address is required'),
        libraryDescription: Yup.string(),
        libraryEventOptIn: Yup.boolean(),
        libraryName: Yup.string()
            .required('Name is required')
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
            initialValues={library}
            onSubmit={submitLibraryCreate}
            validationSchema={validator}
        >
            {submitLibraryCreate}
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
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId={'libraryAddress'}>
                    <Form.Label>Library Address</Form.Label>
                    <InputGroup>
                        <InputGroup.Text>
                            Library Address
                        </InputGroup.Text>
                        <FormControl
                            // className="form-control"
                            name="libraryAddress"
                            type="text"
                            value={values.libraryAddress}
                            // TODO: fix address input
                            placeholder='Example: 1109 N Highland St, Arlington, VA'
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </InputGroup>
                    <DisplayError errors={errors} touched={touched} field={'libraryAddress'}/>
                </Form.Group>

                <Form.Group controlId={'libraryDescription'}>
                    <Form.Label>Library Description</Form.Label>
                    <InputGroup>
                        {/*<InputGroup.Text>*/}
                        {/*    UserName*/}
                        {/*</InputGroup.Text>*/}
                        <FormControl
                            // className="form-control"
                            name='libraryDescription'
                            type='text'
                            value={values.libraryDescription}
                            placeholder='Please described your library'
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </InputGroup>
                    <DisplayError errors={errors} touched={touched} field={'libraryDescription'}/>
                </Form.Group>

                <Form.Group controlId={'libraryEventOptIn'}>
                    <Form.Label>Library Event Opt In</Form.Label>
                    <InputGroup>
                        {/*<InputGroup.Text>*/}
                        {/*    UserName*/}
                        {/*</InputGroup.Text>*/}
                        <FormControl
                            // className="form-control"
                            name='libraryEventOptIn'
                            type='checkbox'
                            value={values.libraryEventOptIn}
                            // initialValue='False'
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </InputGroup>
                    <DisplayError errors={errors} touched={touched} field={'libraryEventOptIn'}/>
                </Form.Group>

                <Form.Group controlId={'libraryName'}>
                    <Form.Label>library Name</Form.Label>
                    <InputGroup>
                        {/*<InputGroup.Text>*/}
                        {/*    UserName*/}
                        {/*</InputGroup.Text>*/}
                        <FormControl
                            // className="form-control"
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

                <Form.Group controlId={'librarySpecialization'}>
                    <Form.Label>library Specialization</Form.Label>
                    <InputGroup>
                        <InputGroup.Text>
                            library Specialization
                        </InputGroup.Text>
                        <FormControl
                            // className="form-control"
                            name='librarySpecialization'
                            type='select'
                            value={values.librarySpecialization}
                            // placeholder='P@ssword!'
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </InputGroup>
                    <DisplayError errors={errors} touched={touched} field={'librarySpecialization'}/>
                </Form.Group>

                {/*<Form.Group controlId={'profilePasswordConfirm'}>*/}
                {/*    <Form.Label>Password Confirm</Form.Label>*/}
                {/*    <InputGroup>*/}
                {/*        <InputGroup.Text>*/}
                {/*            Please confirm password*/}
                {/*        </InputGroup.Text>*/}
                {/*        <FormControl*/}
                {/*            // className="form-control"*/}
                {/*            name='profilePasswordConfirm'*/}
                {/*            type='password'*/}
                {/*            value={values.profilePasswordConfirm}*/}
                {/*            placeholder='P@ssword!Confirm'*/}
                {/*            onChange={handleChange}*/}
                {/*            onBlur={handleBlur}*/}
                {/*        />*/}
                {/*    </InputGroup>*/}
                {/*    <DisplayError errors={errors} touched={touched} field={'profilePasswordConfirm'}/>*/}
                {/*</Form.Group>*/}

                <Form.Group className={"mt-3"}>
                    <Button className={"btn btn-primary"} type={"submit"}>Submit</Button>
                    {" "}
                    <Button
                        className={"btn btn-danger"}
                        onClick={handleReset}
                        disabled={!dirty || isSubmitting}
                    >Reset
                    </Button>
                </Form.Group>

            </Form>
            <DisplayStatus status={status} />
        </>
    )
}