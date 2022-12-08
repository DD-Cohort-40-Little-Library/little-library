import React from "react";
import {Formik} from "formik";
import * as Yup from "yup";
import {httpConfig} from "../../../utils/http-config.js";
import {DisplayStatus} from "../../display-status/DisplayStatus";
import {Button, Form, FormControl, InputGroup} from "react-bootstrap";
import {DisplayError} from "../../display-error/DisplayError";

export const SignUpForm = () => {
    const signUp = {
		profileEmail: "",
        profileFirstName:"",
        profileLastName:"",
		profileName: "",
		profilePassword: "",
		profilePasswordConfirm: ""
	}

    const validator = Yup.object().shape({
        profileEmail: Yup.string()
            .email('Email must be a valid email')
            .required('Email is required'),
        profileFirstName: Yup.string()
            .required('First name is required'),
        profileLastName: Yup.string()
            .required('Last name is required'),
        profileName: Yup.string()
            .required('Username is required'),
        profilePassword: Yup.string()
            .required('Password is required')
            .min(8,'Password must be at least 8 characters'),
        profilePasswordConfirm: Yup.string()
            .required('Please confirm password')
            .min(8,'Password confirmation must be at least 8 characters')
    })

    const submitSignUp = (values, {resetForm, setStatus}) => {
        httpConfig.post('/apis/sign-up/', values)
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
            initialValues={signUp}
            onSubmit={submitSignUp}
            validationSchema={validator}
            >
            {SignUpFormContent}
        </Formik>
    )
}

function SignUpFormContent(props){
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
                <Form.Group controlId={'profileEmail'}>
                    <Form.Label>Email</Form.Label>
                    <InputGroup>
                        <InputGroup.Text>Your Email</InputGroup.Text>
                        <FormControl
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
                    <Form.Label>First Name</Form.Label>
                    <InputGroup>
                        <FormControl
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
                    <Form.Label>Last Name</Form.Label>
                    <InputGroup>
                        <FormControl
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
                    <Form.Label>UserName</Form.Label>
                    <InputGroup>
                        <FormControl
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

                <Form.Group controlId={'profilePassword'}>
                    <Form.Label>Password</Form.Label>
                    <InputGroup>
                        <InputGroup.Text>Please insert password</InputGroup.Text>
                        <FormControl
                            name='profilePassword'
                            type='password'
                            value={values.profilePassword}
                            placeholder='P@ssword!'
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </InputGroup>
                    <DisplayError errors={errors} touched={touched} field={'profilePassword'}/>
                </Form.Group>

                <Form.Group controlId={'profilePasswordConfirm'}>
                    <Form.Label>Password Confirm</Form.Label>
                    <InputGroup>
                        <InputGroup.Text>Please confirm password</InputGroup.Text>
                        <FormControl
                            name='profilePasswordConfirm'
                            type='password'
                            value={values.profilePasswordConfirm}
                            placeholder='P@ssword!Confirm'
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </InputGroup>
                    <DisplayError errors={errors} touched={touched} field={'profilePasswordConfirm'}/>
                </Form.Group>

                <Form.Group className={"mt-3"}>
                    <Button className={"btn btn-primary"} type={"submit"}>Submit</Button>
                    {" "}
                    <Button className={"btn btn-danger"} onClick={handleReset} disabled={!dirty || isSubmitting}>Reset</Button>
                </Form.Group>
            </Form>
            <DisplayStatus status={status} />
        </>
    )
}