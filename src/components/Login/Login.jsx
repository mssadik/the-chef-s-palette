import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Login = () => {
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate()
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';
  console.log('login page location',location);
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
        navigate(from, {replace: true})
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
          <input className=' mx-auto btn btn-primary' type="submit" value="Login" /><br /><br />
          <div className='mx-auto'>
            <button style={{}} onClick={handelGoogleLogin} className='btn btn-primary me-3 '>Login With Google</button>
            <button style={{}} onClick={handelGhihubLogin} className='btn btn-primary '>Login With Github</button> <br /><br />
          </div>
          <p>New Here <Link to="/register">Register</Link></p>
        </form>
      </div>
    </div>
  );
};

export default Login;
