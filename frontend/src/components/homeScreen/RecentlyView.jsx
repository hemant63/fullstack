import { useState, useEffect } from "react";
import masterServices from "../../services/masterServices";
import ProductCard from "../ProductCard";

const RecentlyView = () =>{
    const[products,setProducts]=useState([]);
    const handleProductData=async()=>{
        try{
            const response = await masterServices.getProducts();
            setProducts(response?.data?.products?.slice(0,4))
        }catch(err){
            console.log("Error in fetching Slider data")
        }
    }
    useEffect(()=>{
        handleProductData();
    },[])
    // const array1=[1,2,3,4,5]
    // const array2=[6,7,8,9,10]

    // useEffect(()=>{
    //     const array3=[];
    //     array1.map((i,ind)=>{
    //         if(ind > 0){
    //             array2.map((j)=>{
    //                 const res = i*j;
    //                 array3.push(res)
    //             })
    //         }
    //     })
    //     console.log(array3)
    // },[])
    return(
        <>
        <div className="content container">
            <h2>Recently view</h2>
            <p>Crafted with love specially for you</p>
            <div className="products">
                {products?.map((product, index)=>{
                    return(
                        <ProductCard key={index} product={product} />)
                })}
            </div>
        </div>
        <div className="content container new-arrival-banner">
            <div className="urbancraft-banner">
                <h2>#Urbancraft</h2>
                <p>Tag us on social media to get discount</p>
            </div>
        </div>
        </>
    )
}

export default RecentlyView;