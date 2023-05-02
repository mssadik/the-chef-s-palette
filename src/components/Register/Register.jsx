import React, { useContext, useState } from 'react';
import '../Register/Register.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
const Register = () => {
    const {createUser} = useContext(AuthContext);
    const [succes, setSucces] = useState('');
    const [error, setError] = useState('');

    const handelRegister = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const url = form.photoUrl;
        const email = form.email.value;
        const password = form.password.value;
        console.log(url);
        createUser(email, password)
        
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser);
            form.reset();
            setSucces("Your Account Succesfull Created")
            setError('')
        })
        .catch(e  =>{
            console.log(e.message)
            setError(e.message);
            setSucces('')
        })
    }
    return (
        <div className='h'>
            <h2 className='text-center fw-bolder'>Register Now</h2>
            <div className='form-container'>
                <form onSubmit={handelRegister}>
                    <input type="text" name="name" id="" placeholder='Your Name' required /><br /><br />
                    <input type="url" name="photoUrl" id="" placeholder='Your Photo URL' required /><br /><br />
                    <input type="email" name="email" id="" placeholder='Your Email' /><br /><br />
                    <input type="password" name="password" id="" placeholder='Your Password' required/><br /><br />
                    <p className='text-danger'>{error}</p>
                    <p className='text-success'>{succes}</p>
                    <input className='w-50 mx-auto btn btn-primary' type="submit" value="Register" />
                    <p>Already have an account<Link to="/login">Login</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Register;