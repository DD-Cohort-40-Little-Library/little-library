// ***DO NOT USE. FOR INFORMATIONAL GUIDE ONLY TO BE USED WITH FORMIK***


import {Form, FormControl, Image, InputGroup} from "react-bootstrap";
import React, {useState} from "react";
import {useDropzone} from "react-dropzone";
import {Formik} from "formik";

export const LibraryImageComponent = (props) => {
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

    return(
                    <>
                            <ImageDropZone
                                formikProps={{
                                    values, handleChange, handleBlur, setFieldValue, fieldValue:'libraryImageUrl', setSelectedImage: setSelectedImage
                                }}
                            />
                            <div>
                                {selectedImage !== null ? <img className={"w-50"} src={selectedImage}/> : ""}
                            </div>

                    </>

    )


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
                            <span className={"align-content-center"}>Drag and drop image here, or click here to select an image</span> }
                </div>
            </InputGroup>
        </Form.Group>
    )
}
}
