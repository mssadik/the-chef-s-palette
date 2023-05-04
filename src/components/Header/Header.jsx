import React, { useContext } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import './Header.css'
import ActiveLink from '../ActiveLink/ActiveLink';

const Header = () => {
    const {user, logOUt} = useContext(AuthContext);
    const handelLouOut = () =>{
        logOUt()
        .then(result =>{})
        .catch(e => {
            console.log(e.message);
        })
    }
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">The Chef's Palette</Navbar.Brand>
                    <Nav className="">
                        <ActiveLink to="/">Home</ActiveLink>
                        <Link className='mx-2' to="/blogs">BLogs</Link>
                        <Link className='mx-2' to="/register">Register</Link>
                        {user?<Link className='mx-2' onClick={handelLouOut} to="/">Logout</Link>:
                        <ActiveLink to="/login">Login</ActiveLink>}
                        {!!user && <Link to="/user">{user.email}</Link>}
                    </Nav>
                </Container>
            </Navbar>

        </div>
    );
};

export default Header;