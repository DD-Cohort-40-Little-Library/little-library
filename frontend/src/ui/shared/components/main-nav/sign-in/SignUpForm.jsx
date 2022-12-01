import React from "react";
import {Formik} from "formik";
import jwtDecode from "jwt-decode";
import * as Yup from "yup";
import {httpConfig} from "../../../utils/http-config.js";
import {values} from "mapbox-gl/src/util/util.js";


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


}