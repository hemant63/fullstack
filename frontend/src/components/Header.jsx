import { Outlet, useNavigate } from 'react-router-dom';
import logo from '../assests/images/logo.png';
import './header.css';

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className='container'>
    <div className=' header'>
      <div className='nav-bar'>
        <span className='nav-title'>
        <img src={logo} className='logo' alt="logo"/>
        <h3>Header</h3>
        </span>
        <span className='nav-buttons'>
        <button onClick={()=>navigate('/sign-in')}>SignIn</button>
        <button onClick={()=>navigate('/sign-up')}>SignUp</button>
        </span>
      </div>
        <Outlet />
    </div>
    </div>
  )
}

export default Header