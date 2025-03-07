import { useState } from "react";
import { Input } from "../components/FormComponent";
import { Button } from "../components/FormComponent";
import  facebook  from "../assests/images/facebook.png";
import  iphone  from "../assests/images/apple-logo.png";
import  google  from "../assests/images/search.png";
import './authForm.css';

const AuthForm = ({formType}) => {
  const [activeTab, setActiveTab]=useState('email');
  const [hidePassword, setHidePassword]=useState(false);
  const [loginPayload, setLoginPayload]=useState({});
  const [registerPayload, setRegisterPayload]=useState({});
  const handleTabChange=(tab)=>{
    setActiveTab(tab);
    if(formType === 'login'){
      setLoginPayload({});
    } else {
      setRegisterPayload({});
    }
  }
  const handleChange=(name, value)=>{
    if(formType === 'login'){
      setLoginPayload({...loginPayload, [name]: value});
    } else {
      setRegisterPayload({...registerPayload, [name]: value});
      
    }
  }
  const handleSubmit=()=>{
    console.log("login payload",loginPayload)
    console.log("register payload",registerPayload)
  }
  return (
    <div className="auth-page">
      <div className="auth-form">
        <h1>{formType === 'login'? 'Login' :'Register'}</h1>
        <ul className="form-nav">
          <li onClick={()=>handleTabChange('email')} className={`form-nav-link ${activeTab === 'email'?'active':''}`}>Email</li>
          <li onClick={()=>handleTabChange('phone')} className={`form-nav-link ${activeTab === 'phone'?'active':''}`}>Phone</li>
        </ul>
        <div className="form">
          <Input
            label={`${activeTab === 'email'?'Email':'Phone number'}`}
            placeholder={`Enter ${activeTab === 'email'?'email':'phone number'}`} 
            name={`${activeTab === 'email'?'email':'phoneNo'}`}
            key={formType+activeTab}
            type={`${activeTab === 'email'?'text':'number'}`}
            onChange={handleChange}
            // value={activeTab === 'email' ? loginPayload.email : loginPayload.phoneNo}
            value={`${(formType === 'login'? 
                        (activeTab === 'email'?
                          loginPayload?.email : 
                          loginPayload?.phoneNo) : 
                        (activeTab === 'email'?
                          registerPayload?.email : 
                          registerPayload?.phoneNo)) || ""
                  }`}
            required
          />
          <Input
            label="Password"
            placeholder="Enter password"
            name="password"
            type={`${hidePassword ? 'password':'text'}`}
            value={`${(formType === 'login' ? loginPayload?.password : registerPayload?.password)||""}`}
            onChange={handleChange}
            required
          />
          <a href="" className="forgot-password" style={{display: `${formType === 'login' ? 'block' :'none'}`}}>Forgot password?</a>
          {formType === 'register'? 
            <Input
              label="Confirm password"
              placeholder="Confirm password" 
              name="confirmPassword"
              type={`${hidePassword ? 'password':'text'}`}
              value={`${registerPayload?.confirmPassword || ""}`}
              onChange={handleChange} 
              required
            />
          :<></>}
          <Button text={`${formType === 'login'? 'Login' :'Register'}`} onClick={handleSubmit}/>
          <p style={{display: `${formType === 'register' ? 'block' :'none'}`, paddingRight: '5px' }}>By clicking Register you agree to our <a href="" className="policy">Terms of use</a> and <a href="" className="policy">privacy policy</a></p>
        </div>
        <div className="partition">
            <hr />
            <p>Or</p>
            <hr />
        </div>
        <div className="icons">
          <div className="icon">
            <img src={iphone} alt="ios" />
          </div>
          <div className="icon">
            <img src={google} alt="google" />
          </div>
          <div className="icon">
            <img src={facebook} alt="facebook" />
          </div>
        </div>
        <p>{formType === 'login'? 'Existing user?' :'New to Urban Craft?'}<a href="">{formType === 'login'? 'Register' :'Login'}</a></p>
      </div>
    </div>
  )
}

export default AuthForm;