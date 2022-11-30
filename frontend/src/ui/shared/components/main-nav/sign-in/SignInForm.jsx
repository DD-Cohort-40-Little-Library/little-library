import React from "react";
import {Button, Form, Row} from "react-bootstrap";
import {configureStore} from "@reduxjs/toolkit";
import {httpConfig} from "../../../utils/http-config.js";
import {Formik} from "formik";


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

            <Form>
                <Row>
                    <input type={"username"} className={"form-control my-1"} placeholder={"Username"}/>
                </Row>
                <Row>
                    <input type={"password"} className={"form-control my-1"} placeholder={"Password"}/>
                </Row>
                <div className={""}>
                    <Button type={"submit"} className={"btn-primary btn rounded-2 "}>Submit</Button>
                </div>
            </Form>
        </>
    )
};


