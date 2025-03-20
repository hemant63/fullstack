import { useState, useEffect } from "react";
import masterServices from "../../services/masterServices";
import NavBar from "../NavBar";
import ProductCard from "../ProductCard";
import { Button } from "../FormComponent";
import ImageCarousel from "../ImageCarousel";
// import '../imageCarousel.css'

const NewArrivals = () =>{
    const[products,setProducts]=useState([]);
    const[activeTab, setActiveTab]=useState("chairs");
    const tabs =[
        {
            label:"Chairs",
            value:"chairs"
        },
        {
            label:"Table",
            value:"table"
        },
        {
            label:"Sofa",
            value:"sofa"
        },
        {
            label:"Lamps",
            value:"lamps"
        },
        {
            label:"Rug",
            value:"rug"
        },
        {
            label:"Desk",
            value:"desk"
        },
        {
            label:"Bed",
            value:"beds"
        }
    ]

    const handleProductData=async()=>{
        try{
            const response = await masterServices.getProducts();
            setProducts(response?.data?.products?.slice(0,8))
        }catch(err){
            console.log("Error in fetching Slider data")
        }
    }
    useEffect(()=>{
        handleProductData();
    },[])
    return(
        <>
        <div className="content container">
            <h2>New arrivals</h2>
            <p>Crafted with love specially for you</p>
            <NavBar items={tabs} button="View all" activeTab={activeTab} setActiveTab={setActiveTab} />
            <div className="products">
                {products?.map((product, index)=>{
                    return(
                        <ProductCard key={index} product={product} />)
                })}
            </div>
        </div>
        <div className="content container new-arrival-banner">
            <div className="room-prototypes-banner">
                <div className="left-content">
                    <h2>Inspiration to kickstart your journey.</h2>
                    <p>Our designer has crafted numerous stunning room prototypes to spark your imagination.</p>
                    <div>
                        <Button text="Explore more"/>
                    </div>
                </div>
                <div className="right-content">
                    <ImageCarousel/>
                </div>
            </div>
        </div>
        </>
    )
}

export default NewArrivals;