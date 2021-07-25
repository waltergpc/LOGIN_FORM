import { useState, useEffect } from 'react';

const useForm  = ( ValidationFunctions, callback) => {

     const [values, setValues] = useState({
                username: '',
                email: '',
                password: '',
                password2: ''
           });

    const [errors, setErrors]= useState({});

    const [submitting, setSubmitting]= useState(false);

    const handleChange = e => {
        setValues({
            ...values, 
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = e => {
        e.preventDefault();
        setErrors(ValidationFunctions(values));
        setSubmitting(true);
    }


    useEffect(
        () => {
          if (Object.keys(errors).length === 0 && submitting) {
            callback();
          }
        },
        [errors]
      );
    
       
return {values, handleChange, handleSubmit, errors}

}


export default useForm;