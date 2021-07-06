import React from "react"
import Login from "../../components/register/login-in"

import Register from "../../components/register/register"
import "./register.styles.scss"

const Registers = () => (
  <div className="sign-in-and-sign-up">
    <Register />
    <Login />
  </div>
)

export default Registers
