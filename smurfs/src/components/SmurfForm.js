import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';

import './smurfForm.css'

function SmurfForm({ errors, touched, values, status }) {
    const [ users, setUsers ]= useState([]);
    useEffect(() => {
        if (status) {
            axios
            .get('http://localhost:3333/smurfs')
            .then(res => setUsers(res.data));
            setUsers([...users, status]);

        }
    }, [status]);
        return(
            <Form className='form-container'>
                <h1>Smurfville</h1>
                <div className= 'form-field'>  
                {touched.name && errors.name && <p>{errors.name}</p>}
                Name: <Field type="text" name="name" placeholder="name" />
                </div>
                <div className= 'form-field'>
                {touched.age && errors.age && <p>{errors.age}</p>}
                Age: <Field type="age" name="age" placeholder="age" />
                </div>
                <div className= 'form-field'>
                {touched.height && errors.height && <p>{errors.height}</p>}
                Height: <Field type="height" name="height" placeholder="height" />
                </div>
                <button className= 'button'>Add to Smurfville</button>

            </Form>
        )
    }

    const FormikSmurfForm = withFormik({
        mapPropsToValues({ name, age, height}) {
            return{
                name: name || '',
                age: age || '',
                height: height || '',
            };
        },
        validationSchema: Yup.object().shape({
            name: Yup.string().required('name is required'),
            age: Yup.string().required('age is required'),
            height: Yup.string().required('height is required'),

        }),
        handleSubmit(values, {resetForm, setSubmitting, setStatus}){
            console.log(values);
            axios
                .post('http://localhost:3333/smurfs', values)
                .then(res => {
                    setStatus(res.data)
                    resetForm();
                    setSubmitting(false);
                })
                .catch(err => {
                    console.log(err.response); 
                    setSubmitting(false);
                    });
                
        }

    })(SmurfForm);

export default FormikSmurfForm;