import { useState } from "react";
import AuthForm from '../components/AuthForm';

const SignIn = () => {
  return (
    <div className="container">
    <AuthForm  formType='login'/>
    </div>
  )
}

export default SignIn;