
export default function ValidationFunctions(values) {
    
    let errors = {}
        
    if(!values.username.trim()) {
        errors.username= 'Set a Username'
    }

    if(!values.email) {
        errors.email = 'Please type your e-mail'
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'E-mail is invalid'
    }
    
    if(!values.password) {
        errors.password = 'Please type a password'
    } else if(values.password.length < 8) {
        errors.password = 'Password should be at least 8 characters'
    }

    if(!values.password2) {
        errors.password2 = 'Please confirm your password'
    } else if(values.password2 !== values.password) {
        errors.password = 'Passwords are not the same'
    }

return errors;

}

