import React, { useState } from 'react';
import SignInForm from './Sign-In-Form.js'
import FormSuccess from './FormSuccess.js'

const Form = () => {

    const [submitted, setSubmitted]= useState(false);


    function submitForm()  {
        setSubmitted(true);

    }

    return (
    <div>
    {!submitted ? (<SignInForm submitForm={submitForm} />) : (<FormSuccess />)}
    </div> )
}

export default Form;
