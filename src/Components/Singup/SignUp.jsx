import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaPhoneAlt } from 'react-icons/fa'
import { IoPersonCircle } from 'react-icons/io5'
import './Signup.css'
import { useDispatch, useSelector } from 'react-redux'
import generateUniqueId from 'generate-unique-id'
import { SigninAsync } from '../../Services/Actions/loginAction'
import { useNavigate } from 'react-router'

function SignUp() {
  const { isReg, error } = useSelector(state => state.loginreducer)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [input, setInput] = useState({
    fname: '',
    lname: '',
    phone: '',
    email: '',
    password: '',
  })
  const [errMsg, setErrMsg] = useState('')

  const handleInput = (e) => {
    const name = e.target.name
    const value = e.target.value
    setInput({ ...input, [name]: value })
  }

  const handleSignup = (e) => {
    e.preventDefault()
    if (error) {
      setErrMsg("This Email ID already exists")
    } else {
      const userid = {
        ...input,
        id: generateUniqueId({
          length: 4,
          useLetters: false,
        }),
      }

      dispatch(SigninAsync(userid))

      setInput({
        fname: '',
        lname: '',
        phone: '',
        email: '',
        password: '',
      })
      // setErrMsg('')
    }
  }

  useEffect(() => {
    if (isReg) {
      navigate('/Login')
    }
  }, [isReg, navigate])

  return (
    <Container>
      <Row className='justify-content-center mt-4'>
        <Col sm={4}>
          <div className="card">
            <div className="card2">
              <form className="form" onSubmit={handleSignup}>
                <p id="heading">SIGNUP</p>
                <p className='text-white'>Fill the form to login on this page</p>
                <div className='text-danger'>
                  <p>{errMsg}</p>
                </div>
                <div className="field">
                  <div className='d-flex col'>
                    <div className="col-1">
                      <IoPersonCircle className="input-icon" />
                    </div>
                    <div className="col-10">
                      <input
                        type="text"
                        className="input-field"
                        placeholder="first name"
                        autoComplete="off"
                        name='fname'
                        value={input.fname}
                        onChange={handleInput}
                      />
                    </div>
                  </div>
                </div>
                <div className="field">
                  <div className='d-flex col'>
                    <div className="col-1">
                      <IoPersonCircle className="input-icon" />
                    </div>
                    <div className="col-10">
                      <input
                        type="text"
                        className="input-field"
                        placeholder="last name"
                        autoComplete="off"
                        name='lname'
                        value={input.lname}
                        onChange={handleInput}
                      />
                    </div>
                  </div>
                </div>
                <div className="field">
                  <div className='d-flex col'>
                    <div className="col-1">
                      <FaPhoneAlt className="input-icon" />
                    </div>
                    <div className="col-10">
                      <input
                        type="text"
                        className="input-field"
                        placeholder="mobile number"
                        autoComplete="off"
                        name='phone'
                        value={input.phone}
                        onChange={handleInput}
                      />
                    </div>
                  </div>
                </div>
                <div className="field">
                  <svg viewBox="0 0 16 16" fill="currentColor" height="16" width="16" xmlns="http://www.w3.org/2000/svg" className="input-icon">
                    <path d="M13.106 7.222c0-2.967-2.249-5.032-5.482-5.032-3.35 0-5.646 2.318-5.646 5.702 0 3.493 2.235 5.708 5.762 5.708.862 0 1.689-.123 2.304-.335v-.862c-.43.199-1.354.328-2.29.328-2.926 0-4.813-1.88-4.813-4.798 0-2.844 1.921-4.881 4.594-4.881 2.735 0 4.608 1.688 4.608 4.156 0 1.682-.554 2.769-1.416 2.769-.492 0-.772-.28-.772-.76V5.206H8.923v.834h-.11c-.266-.595-.881-.964-1.6-.964-1.4 0-2.378 1.162-2.378 2.823 0 1.737.957 2.906 2.379 2.906.8 0 1.415-.39 1.709-1.087h.11c.081.67.703 1.148 1.503 1.148 1.572 0 2.57-1.415 2.57-3.643zm-7.177.704c0-1.197.54-1.907 1.456-1.907.93 0 1.524.738 1.524 1.907S8.308 9.84 7.371 9.84c-.895 0-1.442-.725-1.442-1.914z"></path>
                  </svg>
                  <input
                    type="text"
                    className="input-field"
                    placeholder="Username"
                    autoComplete="off"
                    name='email'
                    value={input.email}
                    onChange={handleInput}
                  />
                </div>
                <div className="field">
                  <svg viewBox="0 0 16 16" fill="currentColor" height="16" width="16" xmlns="http://www.w3.org/2000/svg" className="input-icon">
                    <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"></path>
                  </svg>
                  <input
                    type="password"
                    className="input-field"
                    placeholder="Password"
                    name='password'
                    value={input.password}
                    onChange={handleInput}
                  />
                </div>

                

                <div className="btn">
                  <button type='submit' className="button4 w-50">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default SignUp
