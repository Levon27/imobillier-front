import React, { useEffect, useState } from 'react'
import { Utils } from "../services/Utils"
import Input from './Input'
import { LoginService } from '../services/LoginService'

const Register = () => {
  const [name, setName] = useState('')
  const [nameError, setNameError] = useState('')
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState('')
  const [password, setPassword] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [pswdConfirm, setPswdConfirm] = useState('')
  const [pswdConfirmError, setPswdConfirmError] = useState('')

  function validateName() {
    setNameError('')

    if (name.length < 4) {
      setNameError('Name must be at least 5 characters long')
      return false
    }

    return true
  }

  function validateEmail() {
    setEmailError('')

    if (!Utils.isEmailValid(email)) {
      setEmailError('Please input a valid e-mail')
      return false
    }

    return true
  }

  function validatePassword() {
    setPasswordError('')

    if (password.length < 6) {
      setPasswordError('Password must be at least 7 characters long')
      return false
    }

    return true
  }

  function validatePasswordConfirm() {
    setPswdConfirmError('')

    if (password !== pswdConfirm) {
      setPswdConfirmError('Passwords are not identical')
      return false
    }

    return true
  }

  function validateForm() {
    return validateName() && validateEmail() && validatePassword() && validatePasswordConfirm()
  }

  useEffect(() => { validatePassword() }, [password])
  useEffect(() => { validatePasswordConfirm() },[password, pswdConfirm])


  const onSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    LoginService.register(name, email, password)
    .then((res) => {
      if (res.status >= 400) {
        alert('Please review your information')
      } else {
        alert('Success')
      }

    })
    .catch(() => alert('Ops! Something wnet wrong'))
  }

  return (
    <div className='d-flex justify-content-center align-items-center fullscreen'>
      <form className='h-50 d-block central-card container'>
        <Input
          label='Full Name'
          type='text'
          error={nameError}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          label='E-mail'
          type='text'
          error={emailError}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          label='Password'
          type='password'
          error={passwordError}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Input
          label='Confirm password'
          type='password'
          error={pswdConfirmError}
          onChange={(e) => setPswdConfirm(e.target.value)}
        />

        <button className="w-100 row align-items-center" onClick={(e) => onSubmit(e)}>
          <span className="text-center">Sign-up</span>
        </button>
      </form>
    </div>
  )
}

export default Register
