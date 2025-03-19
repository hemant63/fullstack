import './authForm.css';


const NavBar = ({items, activeTab, setActiveTab}) =>{
    return(
        <>
            <ul className="form-nav">
                {items?.map((item, index)=>{
                    return(
                        <li key={index} onClick={()=>setActiveTab(item?.value)} className={`form-nav-link ${activeTab === item?.value ? 'active' : ''}`}>{item?.label}</li>
                    )
                })}
              {/* <li onClick={()=>setActiveTab('ShopByProducts')} className={`form-nav-link ${activeTab === 'ShopByProducts'?'active':''}`}>Shop by products</li> */}
              {/* <li onClick={()=>setActiveTab('ShopByRooms')} className={`form-nav-link ${activeTab === 'ShopByRooms'?'active':''}`}>Shop by rooms</li> */}
            </ul>
            {/* <div><Button text="Buy now"/></div> */}
        </>
    )
}

export default NavBar;