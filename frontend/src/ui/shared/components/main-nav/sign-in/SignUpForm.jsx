import React from "react";
import {Form, Formik} from "formik";
import jwtDecode from "jwt-decode";
import * as Yup from "yup";
import {httpConfig} from "../../../utils/http-config.js";
import {values} from "mapbox-gl/src/util/util.js";
import {DisplayStatus} from "../../display-status/DisplayStatus";
import {FormControl, InputGroup} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
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
                        <InputGroup.Text>
                            Your Email
                        </InputGroup.Text>
                          <FormControl
                              // className="form-control"
                              name="profileEmail"
                              type="text"
                              value={values.profileEmail}
                              placeholder="your@email.you"
                              onChange={handleChange}
                              onBlur={handleBlur}
                          />
                      </InputGroup>
                      <DisplayError errors={errors} touched={touched} field={'profileEmail'}/>
                  </Form.Group>

                <Form.Group controlId={'profileFirstName'}>
                    <Form.Label>First Name</Form.Label>
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
                    <Form.Label>Last Name</Form.Label>
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
                    <Form.Label>UserName</Form.Label>
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

                <Form.Group controlId={'profilePassword'}>
                    <Form.Label>Password</Form.Label>
                    <InputGroup>
                        <InputGroup.Text>
                            Please insert password
                        </InputGroup.Text>
                        <FormControl
                            // className="form-control"
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
                        <InputGroup.Text>
                            Please confirm password
                        </InputGroup.Text>
                        <FormControl
                            // className="form-control"
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

            </Form>
            <DisplayStatus status={status} />
        </>
    )
}