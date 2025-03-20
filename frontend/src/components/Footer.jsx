import { Button, Input } from "./FormComponent";
import './footer.css';
const Footer = () =>{
    return(
        <div className="content container footer">
            <div className="footer-content">
                <ul>
                    <li>icon</li>
                    <li><p>Worldwide furniture store since 2020. We sell over 1000+ branded products on our website</p></li>
                    <li><p>Sahibzada Ajit Singh Nagar, Punjab</p></li>
                    <li><p>+91 982 6601 617</p></li>
                    <li><p>www.urbancraft.com</p></li>
                </ul>
                <ul>
                    <li className="heading">Sitemap</li>
                    <li><p>Product</p></li>
                    <li><p>Services</p></li>
                    <li><p>Article</p></li>
                    <li><p>About Us</p></li>
                </ul>
                <ul>
                    <li className="heading">Category</li>
                    <li><p>Living Room</p></li>
                    <li><p>Bed Room</p></li>
                    <li><p>Kitchen</p></li>
                    <li><p>Bath Room</p></li>
                </ul>
                <ul>
                    <li className="heading">Our company</li>
                    <li><p>About us</p></li>
                    <li><p>Vacancies</p></li>
                    <li><p>Contact us</p></li>
                    <li><p>Privacy</p></li>
                    <li><p>Returns policy</p></li>
                </ul>
                <ul>
                    <li className="heading">Stay Updated</li>
                    <li><Input placeholder="Enter your mail"/></li>
                    <li className="footer-button"><Button text="Subscribe" /></li>
                </ul>
            </div>
            <hr />
            <p className="rights">Ⓒ 2023 by Urban craft all rights reserved.</p>
        </div>
    )
}

export default Footer;