import React from 'react';
import useForm from './User-Manager.js'
import ValidationFunctions from './Validation.js'




const SignInForm = ( {submitForm} ) => {

const {values, handleChange, handleSubmit, errors} = useForm( ValidationFunctions, submitForm );

    return (
        <div>
            <h1>Create an account!</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor='username'>Username</label>
                <input 
                className='inputs' 
                type='text' 
                name='username' 
                id='username'
                placeholder='Your new username'
                value={values.username}
                onChange={handleChange} />
                {errors.username && <p>{errors.username}</p>}

                <label htmlFor='email'>E-mail</label>
                <input 
                className='inputs' 
                type='email' 
                name='email' 
                id='email'
                placeholder='Enter your email'
                value={values.email}
                onChange={handleChange} />
                {errors.email && <p>{errors.email}</p>}
                
                <label htmlFor='password'>Password</label>
                <input 
                className='inputs' 
                type='password' 
                name='password' 
                id='password'
                placeholder='Type your password'
                value={values.password}
                onChange={handleChange} />
                {errors.password && <p>{errors.password}</p>}
                
                <label htmlFor='password2'>Confirm Password</label>
                <input 
                className='inputs' 
                type='password' 
                name='password2' 
                id='password2'
                placeholder='Type again your password'
                value={values.password2}
                onChange={handleChange} />
                {errors.password2 && <p>{errors.password2}</p>}
                <button type='submit'>Sign-in</button>
            </form>
            
        </div>
    ) 

}


export default SignInForm;