import {useState} from "react"
import {withRouter} from "react-router-dom"
import {connect} from "react-redux"
import {register} from "../../redux/user/user.actions"
import "./register.styles.scss"
import FormInput from "../form/form"
import CustomButton from "../custom-button/custom-button"

const Register = ({register, history}) => {
  const [credentials, setCredentials] = useState({
    text: "",
    email: "",
    password: "",
  })

  const handleChange = (e) => {
    const {value, type} = e.target

    setCredentials({
      ...credentials,
      [type]: value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    //send the user object to route for auth
    const {text, email, password} = credentials

    const newUser = {
      fullname: text,
      email,
      password,
    }

    register(newUser, history)
  }

  return (
    <div className="sign-in">
      <form onSubmit={handleSubmit} className="form">
        <h2 className="cta__header">if already have an account sign in</h2>
        <FormInput
          type="text"
          label="Please enter your name"
          inputChange={handleChange}
          value={credentials.text}
          required
        />
        <FormInput
          type="email"
          label="Please enter your email"
          inputChange={handleChange}
          value={credentials.email}
          required
        />
        <FormInput
          type="password"
          label="Please enter your password"
          inputChange={handleChange}
          value={credentials.password}
          required
        />
        <div className="buttons">
          <CustomButton type="submit">Sign up</CustomButton>
        </div>
      </form>
    </div>
  )
}

export default withRouter(connect(null, {register})(Register))
