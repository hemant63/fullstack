import { Button } from './FormComponent';
import './authForm.css';


const NavBar = ({items, button, activeTab, setActiveTab}) =>{
    return(
        <div className='content container tab-bar'>
            <ul className="form-nav">
                {items?.map((item, index)=>{
                    return(
                        <li key={index} onClick={()=>setActiveTab(item?.value)} className={`form-nav-link ${activeTab === item?.value ? 'active' : ''}`}>{item?.label}</li>
                    )
                })}
            </ul>
            {button && <div><Button text={button}/></div>}
        </div>
    )
}

export default NavBar;