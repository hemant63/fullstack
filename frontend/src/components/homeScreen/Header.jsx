import chair from '../../assests/images/header-chair.webp';
import desk from '../../assests/images/header-desk.jpg';
import sofa from '../../assests/images/header-sofa-big.webp';
import { Button } from '../FormComponent';

const Header=()=>{
    return(
        <div >
            <div className="home-header ">
                <div className="left-header">
                    <p>Discover quality, style and comfort for every room</p>
                    <h1>Enhance your <br /> space with<br/> timeless furniture</h1>
                    <div className='button-group'>
                        <div>
                        <Button text="Buy now"/>
                        </div>
                        <div>
                        <Button text="View more"/>
                        </div>
                    </div>
                    <div className="statistics">
                        <div className="stat-item">
                            <h4>200+</h4>
                            <p>International Brands</p>
                        </div>
                            <hr />
                        <div className="stat-item">
                            <h4>2,000+</h4>
                            <p>High-Quality Products</p>
                        </div>
                            <hr />
                        <div className="stat-item">
                            <h4>30,000+</h4>
                            <p>Happy Customers</p>
                        </div>
                    </div>
                </div>
                <div className="right-header">
                        <img src={sofa} height="296px" width="500px" alt="" />
                    <div>
                        <img src={desk} height="296px" width="240px" alt="" />
                        <img src={chair} height="296px" width="240px" alt="" />
                    </div>
                </div>
            </div>
            <div className="bottom-header">
                <div className="bottom-header-content">
                    <div>QualityIcon</div>
                    <div>
                        <h4>High quality</h4>
                        <p>crafted from top materials</p>
                    </div>
                </div>
                <div className="bottom-header-content">
                    <div>QualityIcon</div>
                    <div>
                        <h4>High quality</h4>
                        <p>crafted from top materials</p>
                    </div>
                </div>
                <div className="bottom-header-content">
                    <div>QualityIcon</div>
                    <div>
                        <h4>High quality</h4>
                        <p>crafted from top materials</p>
                    </div>
                </div>
                <div className="bottom-header-content">
                    <div>QualityIcon</div>
                    <div>
                        <h4>High quality</h4>
                        <p>crafted from top materials</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;