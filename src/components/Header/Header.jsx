import React, { useContext, useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import './Header.css'
import ActiveLink from '../ActiveLink/ActiveLink';
import { FaUserCircle, } from 'react-icons/fa';



const Header = () => {
    const [open, setOpen] = useState(false);
    const { user, logOUt } = useContext(AuthContext);
    const handelLouOut = () => {
        logOUt()
            .then(result => { })
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
                        <div className={`d-md-flex flex-column d-md-block  flex-md-row gap-3 ${open ? 'd--sm-block': 'd-sm-none'}`}>
                            <ActiveLink to="/">Home</ActiveLink>
                            <ActiveLink className='mx-2' to="/blogs">BLogs</ActiveLink>
                            <ActiveLink className='mx-2' to="/register">Register</ActiveLink>
                            {user ? <Link className='' onClick={handelLouOut} to="/">Logout</Link> :
                                <ActiveLink to="/login">Login</ActiveLink>}
                            {!!user && <Link className='d-sm-block' to="/user"><FaUserCircle ></FaUserCircle></Link>}


                        </div>
                        <div onClick={() => setOpen(!open)} className='d-sm-block d-md-none'>
                            {
                                open === true ? <i className="fa-solid fa-xmark text-white"></i> : <i className="fa-solid fa-bars text-white"></i>
                            }
                        </div>
                    </Nav>
                </Container>
            </Navbar>

        </div>
    );
};

export default Header;