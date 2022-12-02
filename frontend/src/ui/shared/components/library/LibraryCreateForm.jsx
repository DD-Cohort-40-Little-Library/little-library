import React from "react";
import {Formik} from "formik";
import * as Yup from "yup";
import {httpConfig} from "../../utils/http-config.js";
import {Button, Card, Col, Figure, FloatingLabel, Form, FormControl, InputGroup, Row} from "react-bootstrap";
import {DisplayError} from "../display-error/DisplayError.jsx";
import {DisplayStatus} from "../display-status/DisplayStatus.jsx";


export const LibraryCreateForm = () => {
    const createLibrary ={
        libraryAddress: "",
        libraryDescription: "",
        libraryEventOptIn: "",
        libraryName: "",
        librarySpecialization: "",
}
    const validator = Yup.object().shape({
        libraryAddress: Yup.string()
            .required('Address is required'),
        libraryDescription: Yup.string(),
        libraryEventOptIn: Yup.boolean(),
        libraryName: Yup.string()
            .required('Name is required'),
        librarySpecialization: Yup.string()
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
            <Form onSubmit={handleSubmit}>
                <Row>
                    {/*<Col>*/}
                        <Col md={6} className={"m-2 text-center"}>
                            <Figure fluid="true">
                                <Figure.Image
                                    alt={"placeholder kitten"}
                                    src={"http://placekitten.com/210/210"}
                                    roundedCircle={true}
                                />
                                <Figure.Caption className={"text-center"}>userName</Figure.Caption>
                            </Figure>

                            <Form.Group controlId={'libraryAddress'}>
                            <Form.Label>Library Address</Form.Label>
                            <InputGroup>
                                <InputGroup.Text>
                                    Library Address
                                </InputGroup.Text>
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
                            <Form.Label>Library Event Opt In</Form.Label>
                            <InputGroup>
                                <Form.Check className="mt-1" inline label="Available for events?"type="checkbox"/>
                                {/*<FormControl*/}
                                {/*    // className="form-control"*/}
                                {/*    name='libraryEventOptIn'*/}
                                {/*    type='checkbox'*/}
                                {/*    value={values.libraryEventOptIn}*/}
                                {/*    // initialValue='False'*/}
                                {/*    onChange={handleChange}*/}
                                {/*    onBlur={handleBlur}*/}
                                {/*/>*/}
                            </InputGroup>
                            <DisplayError errors={errors} touched={touched} field={'libraryEventOptIn'}/>
                        </Form.Group>

                        <Form.Group controlId={'libraryName'}>
                            <Form.Label>Library Name</Form.Label>
                            <InputGroup>
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
                            <Form.Label>Library Specialization</Form.Label>
                            <InputGroup>
                                <FormControl
                                    name='Library Specialization'
                                    type='select'
                                    value={values.librarySpecialization}
                                    placeholder='Library Specialization'
                                    onChange={handleChange}
                                    onBlur={handleBlur}/>
                                    {/*<Form.Select className="mt-1" aria-label="Library specialization selection">*/}
                                    {/*    <option>(Optional) Choose a specialization</option>*/}
                                    {/*    <option value="children">Children's</option>*/}
                                    {/*    <option value="self-improvement">Self Improvement</option>*/}
                                    {/*    <option value="young-adult">Young Adult</option>*/}
                                    {/*    <option value="fantasy">Fantasy</option>*/}
                                    {/*    <option value="home-improvement">Home Improvement</option>*/}
                                    {/*    <option value="science-fiction">Science Fiction</option>*/}
                                    {/*    <option value="romance">Romance</option>*/}
                                    {/*    <option value="textbooks-technical">Textbooks/Technical</option>*/}
                                    {/*    <option value="religious">Religious</option>*/}
                                    {/*    <option value="non-fiction">Non-Fiction</option>*/}
                                    {/*    <option value="history">History</option>*/}
                                    {/*    <option value="art">Art</option>*/}
                                    {/*    <option value="cooking">Cooking</option>*/}
                                    {/*    <option value="satire">Satire</option>*/}
                                    {/*    <option value="pets-animals">Pets/Animals</option>*/}
                                    {/*    <option value="automotive">Automotive</option>*/}
                                    {/*</Form.Select>*/}
                                    {/*</FormControl>*/}
                            </InputGroup>
                            <DisplayError errors={errors} touched={touched} field={'librarySpecialization'}/>
                        </Form.Group>
                    </Col>

                    <Col md={5} className={"m-2 text-center"}>
                        <Figure fluid="true">
                            <Figure.Image
                                alt={"placeholder kitten"}
                                src={"http://placekitten.com/300/300"}
                            />
                            <Figure.Caption className={"text-center"}><Button size="sm" variant={"outline-secondary"} >Upload</Button></Figure.Caption>
                        </Figure>
                        {/*<Card>*/}
                        {/*    <FloatingLabel controlId="library-description" label="Description of your library (256 characters max)">*/}
                        {/*        <Form.Control*/}
                        {/*            as="textarea"*/}
                        {/*            placeholder="Description of your library (256 characters max)"*/}
                        {/*            style={{ height: '135px' }}*/}
                        {/*        />*/}
                        {/*    </FloatingLabel>*/}
                        {/*</Card>*/}
                        <Form.Group controlId={'libraryDescription'}>
                            <Form.Label>Library Description</Form.Label>
                            <InputGroup>
                                <FormControl
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
                    </Col>
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
                </Row>
            </Form>
            <DisplayStatus status={status} />
        </>
    )
}