import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import './PersonalData.css';

const phoneRegExp = /^\d{3}-\d{3}-\d{4}$/;

const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('Required'),
    lastName: Yup.string().required('Required'),
    option: Yup.string().required('Required'),
    day: Yup.number().required('Required').min(1, 'Invalid day').max(31, 'Invalid day'),
    month: Yup.number().required('Required').min(1, 'Invalid month').max(12, 'Invalid month'),
    year: Yup.number().required('Required').min(1900, 'Invalid year').max(new Date().getFullYear(), 'Invalid year'),
    phoneCode: Yup.string().required('Required'),
    phoneNumber: Yup.string().matches(phoneRegExp, 'Invalid phone number').required('Required'),
});

const initialValues = {
    firstName: '',
    lastName: '',
    option: '',
    day: '',
    month: '',
    year: '',
    phoneCode: '',
    phoneNumber: '',
};


const FormikForm = () => {
    return (
        <div className="container">
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values, { resetForm }) => {
                    console.log(values);
                    resetForm();
                }}
            >
                {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
                    <Form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="firstName">Input label*</label>
                            <Field className="form-control" name="firstName" type="text" placeholder="Please complete" />
                            {errors.firstName && touched.firstName ? <div>{errors.firstName}</div> : null}
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastName">Input label*</label>
                            <Field className="form-control" name="lastName" type="text" placeholder="Please complete" />
                            {errors.lastName && touched.lastName ? <div>{errors.lastName}</div> : null}
                        </div>
                        <div className="form-group">
                            <label htmlFor="option">Dropdown label*</label>
                            <Field className="form-control" name="option" as="select" placeholder="Please complete">
                                <option value="">Please complete</option>
                                <option value="option1">Option 1</option>
                                <option value="option2">Option 2</option>
                                <option value="option3">Option 3</option>
                                <option value="option4">Option 4</option>
                            </Field>
                            {errors.option && touched.option ? <div>{errors.option}</div> : null}
                        </div>
                        <div className="form-group date-group">
                            <label>Datepicker label*</label>
                            <div className="date-inputs">
                                <Field className="form-control" name="day" as="select">
                                    <option value="">Day</option>
                                    {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
                                        <option key={day} value={day}>{day}</option>
                                    ))}
                                </Field>
                                <Field className="form-control" name="month" as="select">
                                    <option value="">Month</option>
                                    <option value="January">January</option>
                                    <option value="February">February</option>
                                    <option value="March">March</option>
                                    <option value="April">April</option>
                                    <option value="May">May</option>
                                    <option value="June">June</option>
                                    <option value="July">July</option>
                                    <option value="August">August</option>
                                    <option value="September">September</option>
                                    <option value="October">October</option>
                                    <option value="November">November</option>
                                    <option value="December">December</option>
                                </Field>
                                <Field className="form-control" name="year" as="select" id="year">
                                    <option value="">Year</option>
                                    {Array.from({length: new Date().getFullYear() - 1899}, (_, i) => i + 1900).map((year) => (
                                        <option key={year} value={year}>{year}</option>
                                    ))}
                                </Field>
                            </div>
                            {errors.day && touched.day ? <div>{errors.day}</div> : null}
                            {/*{errors.month && touched.month ? <div>{errors.month}</div> : null}*/}
                            {/*{errors.year && touched.year ? <div>{errors.year}</div> : null}*/}
                        </div>

                        <div className="form-group date-group">
                            <label htmlFor="phoneCode">Phone Number</label>
                            <div className="date-inputs">
                                <Field className="form-control" name="phoneCode" type="text" placeholder="+33" />
                                <Field className="form-control" name="phoneNumber" type="text" placeholder="Please complete" />
                            </div>
                            {errors.phoneCode && touched.phoneCode ? <div>{errors.phoneCode}</div> : null}
                            {errors.phoneNumber && touched.phoneNumber ? <div>{errors.phoneNumber}</div> : null}
                        </div>
                        {/*<button type="submit">Submit</button>*/}
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default FormikForm;