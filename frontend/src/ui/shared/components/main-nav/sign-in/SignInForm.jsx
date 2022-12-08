import React from "react";
import {Button, Form, FormControl, InputGroup, Row} from "react-bootstrap";
import {httpConfig} from "../../../utils/http-config.js";
import {Formik} from "formik";
import {DisplayError} from "../../display-error/DisplayError";
import {DisplayStatus} from "../../display-status/DisplayStatus";
import jwtDecode from "jwt-decode";
import {useDispatch} from "react-redux";
import * as Yup from "yup";
import { getAuth } from '../../../../../store/auth.js';


export const SignInForm = () => {

    const dispatch = useDispatch()

    const validator = Yup.object().shape({
        profileEmail: Yup.string()
            .email("Please provide a valid email")
            .required("Email is required"),
        profilePassword: Yup.string()
            .required("Password is required")
            .min(8, "Password must be at least eight character")
    });

    const signIn = {
        profileEmail: "",
        profilePassword: ""
    };

    const submitSignIn = (values, {resetForm, setStatus}) => {
        httpConfig.post("/apis/sign-in/", values)
            .then(reply => {
                let {message, type} = reply;
                setStatus({message, type});
                if (reply.status === 200 && reply.headers["authorization"]) {
                    window.localStorage.removeItem("authorization")
                    window.localStorage.setItem("authorization", reply.headers["authorization"])
                    resetForm()
                    let jwtToken = jwtDecode(reply.headers["authorization"])
                    dispatch(getAuth(jwtToken))
                }
                setStatus({message, type})
            })
    };

    return (
        <>
            <Formik
                initialValues={signIn}
                onSubmit={submitSignIn}
                validationSchema={validator}
            >
                {SignInFormContent}
            </Formik>
        </>
    )
};

function SignInFormContent(props) {
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
    } = props;
    return (
        <>
            <Form onSubmit={handleSubmit}>
                <Form.Group className={"mb-1"} controlId={"profileEmail"}>
                    <Form.Label>Email</Form.Label>
                        <InputGroup>
                            <InputGroup.Text>
                                {/*<FontAwesomeIcon icon={"envelope"}/>*/}
                            </InputGroup.Text>
                            <FormControl
                                className={"form-control"}
                                name={"profileEmail"}
                                type={"text"}
                                value={values.profileEmail}
                                placeholder={"your@email.you"}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                        </InputGroup>
                    <DisplayError errors={errors} touched={touched} field={"profileEmail"}/>
                </Form.Group>

                <Form.Group className={"mb-1"} controlId={"profileName"}>
                    <Form.Label>Password</Form.Label>
                        <InputGroup>
                            <InputGroup.Text>
                            </InputGroup.Text>
                            <FormControl
                                className={"form-control"}
                                name={"profilePassword"}
                                type={"password"}
                                value={values.profilePassword}
                                placeholder={"password"}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                />
                        </InputGroup>
                    <DisplayError errors={errors} touched={touched} field={"profilePassword"} />
                </Form.Group>

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
            <div className={"pt-3"}>
                <DisplayStatus status={status}/>
            </div>
        </>
    )
}