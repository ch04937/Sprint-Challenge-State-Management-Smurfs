import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';

function SmurfForm({ errors, touched, values, status }) {
    const [ users, setUsers ]= useState([]);
    const [ login, setLogin ]= useState([false]);
    useEffect(() => {
        if (status) {
            axios
            .get('http://localhost:3333/smurfs')
            .then(res => setUsers(res.data));
            setUsers([...users, status]);
            setLogin(true)
        }
    }, [status]);
        return(
            <Form >
                <div>
                {touched.name && errors.name && <p>{errors.name}</p>}
                <Field type="text" name="name" placeholder="name" />
                </div>
                <div>
                {touched.age && errors.age && <p>{errors.age}</p>}
                <Field type="text" name="age" placeholder="age" />
                </div>
                <div>
                {touched.height && errors.height && <p>{errors.height}</p>}
                <Field type="text" name="height" placeholder="height" />
                </div>
                <button>Add to Smurfville</button>

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