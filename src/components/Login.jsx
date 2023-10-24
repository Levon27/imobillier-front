import { useState } from "react"
import { LoginService } from "../services/LoginService"
import { Utils } from "../services/Utils"
import Input from "./Input"

const Login = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!Utils.isEmailValid(email)) {
      setEmailError('Please enter a valid email address')
      return
    }

    LoginService.login(email, password)
      .then(() => {
        setEmailError('')
        setPassword('')
        alert('Success')
      })
      .catch((error) => setPasswordError(error))
  }

  return (
    <div className='d-flex justify-content-center align-items-center fullscreen'>
      <form className='h-50 d-block central-card container'>
        <Input
          label="E-mail"
          type="text"
          error={emailError}
          onChange={(event) => setEmail(event.target.value)}
        />
        <Input
          label="Password"
          type="password"
          error={passwordError}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button className="w-100 row align-items-center" onClick={(e) => onSubmit(e)}>
          <span className="text-center">Login</span>
        </button>
      </form>
    </div>
  )
}

export default Login
