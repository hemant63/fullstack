import { useState } from "react"

const NewArrivals = () =>{
    const[products,setProducts]=useState([]);
    const[activeTab, setActiveTab]=useState("chairs");
    return(
        <div>
            <h2>New arrivals</h2>
            <p>Crafted with love specially for you</p>
        </div>
    )
}