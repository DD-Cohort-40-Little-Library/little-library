import React, {useState} from "react";
import {Formik, useField} from "formik";
import * as Yup from "yup";
import {httpConfig} from "../../utils/http-config.js";
import {Button, Card, Col, Container, Figure, Form, FormControl, FormSelect, InputGroup, Row} from "react-bootstrap";
import {DisplayError} from "../display-error/DisplayError.jsx";
import {DisplayStatus} from "../display-status/DisplayStatus.jsx";
import {useDropzone} from "react-dropzone";
import libraryImageBlk1 from "../../../../../images/uiSharedImages/libraryImgBlk1.jpg";
import libraryImageBlk2 from "../../../../../images/uiSharedImages/libraryImgBlk2.jpg";
import libraryLLStock1 from "../../../../../images/uiSharedImages/libraryLLStock1.jpg";
import libraryImageCouple1 from "../../../../../images/uiSharedImages/libraryCouple1.jpg";
import libraryImageBlk3 from "../../../../../images/uiSharedImages/libraryImgBlk3.jpg";









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
            <Container className={"m-0"} fluid="auto" id={"librarySectionBlk1"}>
                <Row className={"m-0"}>
                    <img src={libraryImageBlk2} alt={"libraryImage2"} id={"sectionImageBlk"} className={"img-fluid"}/>
                </Row>
            </Container>

            <Container className={"m-0"} fluid="auto" >
            <div className={"text-center m-0"} id={"libraryCreateFormGlobal"}>
                <h1 id={"headLineONE"} className={"m-0"}>Register Your Library</h1>
            </div>
            <Card id={"libraryRegisterCard"} className={"m-0"}>
            <Form onSubmit={handleSubmit} className={"m-0"} style={{fontSize: "x-large"}}>

                <Row className={"m-0"}>
                    <Col md={3} className={"m-1 text-center"}>
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

                    <Col md={5} className={"m-0 text-center"}>

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
                <Form.Group className={"m-0"}>
                    <Button className={"btn btn-primary m-4"} type={"submit"}>Submit</Button>
                    {" "}
                    <Button
                        className={"btn btn-danger m-0"}
                        onClick={handleReset}
                        disabled={!dirty || isSubmitting}
                    >Reset
                    </Button>
                </Form.Group>
                </Row>
            </Form>
            </Card>
            <DisplayStatus status={status} />
            </Container>

            <Container className={""} fluid="auto">
                <Row className={"m-0"} id={"librarySectionBlk3"}>
                    <Col md={9} style={{paddingBottom: "20px"}} className={"flex order-last order-md-first"}>
                        <h1 className={""}>Learn Where It All Started</h1>
                        <p>The Little Free Library project was started out of St. Paul Minnesota. They have grown to be a worldwide presence and inspired over 150,000 Little Free Libraries to be created and countless many to read through this program.</p>
                        <p>The concept of the “Little Free” has also expanded beyond libraries to include pantries and share stores which have also been created from their model.</p>
                        <p>LittleLibraryLocator.com would not have been created without the amazing work of this program.</p>
                        <p className={"pb-3"} style={{fontSize: "large"}}>Click Here to Explore LittleFreeLibrary.org</p>
                        <a target="blank" href={"https://littlefreelibrary.org"}><Button>Go to Site</Button></a>
                    </Col>
                    <Col md={3}  style={{paddingBottom: "20px"}} className={"flex order-first order-md-last"}>
                        <img src={libraryLLStock1} alt={"libraryLLStock"} id={"sectionImageBlk"} className={"img-fluid"}/>
                    </Col>
                </Row>
            </Container>


            <Container className={"m-0"} fluid="auto" id={"librarySectionBlk4"}>
                <Row className={"m-0"}>
                    <img src={libraryImageBlk3} alt={"libraryImage3"} id={"sectionImageBlk"} className={"img-fluid"}/>
                </Row>
            </Container>


            <Container className={""} fluid="auto">
                <Row className={"m-0 "} id={"librarySectionBlk5"}>
                    <Col md={4} style={{paddingBottom: "20px"}}>
                        <img src={libraryImageCouple1} alt={"libraryImageCouple1"} id={"sectionImageBlk"} className={"img-fluid"}/>
                    </Col>
                    <Col>
                        <h1 className={""}>What to Consider Before Starting a Little Library</h1>
                        <p>Here are a few things to consider before setting up your Little Library:</p>
                        <ul className={"text-start"} style={{fontSize: "large"}}>
                            <li>Are there any restrictions in your neighborhood or community?</li>
                            <li>Will the Little Library be welcome?</li>
                            <li>How accessible will the library be?</li>
                            <li>How will the physical structure be built? What materials will be used?</li>
                            <li>How involved int the community do you want to be?</li>
                        </ul>
                    </Col>
                </Row>
            </Container>

            <Container className={"m-0"} fluid="auto" id={"librarySectionBlk2"}>
                <Row className={"m-0"}>
                    <img src={libraryImageBlk1} alt={"libraryImage1"} id={"sectionImageBlk"} className={"img-fluid"}/>
                </Row>
            </Container>

        </>
    )
}