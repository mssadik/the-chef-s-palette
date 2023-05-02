import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Login = () => {
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const { signUser, googleLogin, githubLogin } = useContext(AuthContext);

  const handelLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        setSuccess("User Login Successful");
        setError('');
      })
      .catch((e) => {
        setError(e.message);
        setSuccess('');
      });
  };

  const handelGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        console.log(result.user);
      })
      .catch((e) => {
        console.log(e.message);
      });
  };

  const handelGhihubLogin = () =>{
    githubLogin()
    .then(result =>{
        
    })
    .catch(e =>{
        console.log(e.message);
    })
  }

  return (
    <div className='h'>
      <h2 className='text-center fw-bolder'>Login</h2>
      <div className='form-container'>
        <form onSubmit={handelLogin}>
          <input type="email" name="email" id="" placeholder='Your Email' required /><br /><br />
          <input type="password" name="password" id="" placeholder='Your Password' required /><br /><br />
          <p className='text-success'>{success}</p>
          <p className='text-danger'>{error}</p>
          <input className='w-50 mx-auto btn btn-primary' type="submit" value="Login" /><br /><br />
          <button onClick={handelGoogleLogin} className='btn btn-primary me-3'>Login With Google</button>
          <button onClick={handelGhihubLogin} className='btn btn-primary'>Login With Github</button> <br /><br />
          <p>New Here <Link to="/register">Register</Link></p>
        </form>
      </div>
    </div>
  );
};

export default Login;
