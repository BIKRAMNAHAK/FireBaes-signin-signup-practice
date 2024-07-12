import React from 'react'
import { Container, Row } from 'react-bootstrap'
import logo from '../../assets/images/file.png'
import './header.css'
import Navsec from './Navsec'
import { useNavigate } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { userLogoutAsynic } from '../../Services/Actions/loginAction'

function Header() {
    const { isSuc } = useSelector(state => state.loginreducer)
    const dispatch =  useDispatch();
    const navigate = useNavigate()

    const handleLogin = () => {
        navigate('/Login')
    }

    const handleLogout = () =>{
        dispatch(userLogoutAsynic())
    }

    return (
        <>

            <div className="header">
                <Container >
                    <Row className='align-items-center'>
                        <div className="col-3">
                            <div className='d-flex align-items-center'>
                                <img src={logo} alt={logo} className='img-fluid img pe-2' />
                                <span className='name-logo fw-bold fs-4 text-decoration-underline'>BiK</span><span className='name-logo1 fw-bold fs-4 text-decoration-underline'>RAM</span>
                                <img src={logo} alt={logo} className='img-fluid img ps-2' />
                            </div>
                        </div>
                        <div className="col-7 ">
                            <Navsec />
                        </div>
                        <div className="col-2 d-flex justify-content-end">
                            {
                                isSuc ?
                                 <button className='btn btn-primary' onClick={handleLogout}>Logout</button>
                                    :
                                    <div className=' buttn px-4' onClick={handleLogin}>Login</div>
                            }
                        </div>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Header
