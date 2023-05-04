import React, { useContext } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import './Header.css'
import ActiveLink from '../ActiveLink/ActiveLink';
import { FaUserCircle} from 'react-icons/fa';


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
                        <div className='d-flex gap-3'>
                        <ActiveLink to="/">Home</ActiveLink>
                        <ActiveLink className='mx-2' to="/blogs">BLogs</ActiveLink>
                        <ActiveLink className='mx-2' to="/register">Register</ActiveLink>
                        {user?<Link className='mx-2' onClick={handelLouOut} to="/">Logout</Link>:
                        <ActiveLink to="/login">Login</ActiveLink>}
                        {!!user && <Link to="/user"><FaUserCircle></FaUserCircle></Link>}
                        </div>
                    </Nav>
                </Container>
            </Navbar>

        </div>
    );
};

export default Header;