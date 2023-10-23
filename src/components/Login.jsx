import { LoginService } from "../services/LoginService"
import Input from "./Input"

const Login = () => {
  var email = ''
  var password = ''

  const onSubmit = async (e) => {
    e.preventDefault();

    LoginService.login(email, password)
      .then(() => alert('Success'))
      .catch(() => alert('Error'))
  }

  return (
    <div className='d-flex justify-content-center align-items-center fullscreen'>
      <form className='h-50 d-block central-card container'>
        <Input
          label="E-mail"
          type="text"
          error=""
          onChange={(event) => email = event.target.value}
        />
        <Input
          label="Password"
          type="password"
          onChange={(event) => password = event.target.value}
        />
        <button className="w-100 row align-items-center" onClick={(e) => onSubmit(e)}>
          <span className="text-center">Login</span>
        </button>
      </form>
    </div>
  )
}

export default Login
