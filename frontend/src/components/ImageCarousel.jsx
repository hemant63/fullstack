import { Carousel } from 'react-responsive-carousel';
import masterServices from '../services/masterServices';
import { useEffect, useState } from 'react';
import './imageCarousel.css';
// const slider = [
//     {
//         image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDZT0qh99IVOiZ1NdoCsrP4_mSQzuAFRBVzw&s",
//         title: "Image1"
//     },
//     {
//         image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrUb_SAqHuPx57Y-keP9dzAHNtoCo54OpRxQ&s",
//         title: "Image2"
//     },
//     {
//         image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDZT0qh99IVOiZ1NdoCsrP4_mSQzuAFRBVzw&s",
//         title: "Image3"
//     },
//     {
//         image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrUb_SAqHuPx57Y-keP9dzAHNtoCo54OpRxQ&s",
//         title: "Image4"
//     },
//     {
//         image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDZT0qh99IVOiZ1NdoCsrP4_mSQzuAFRBVzw&s",
//         title: "Image5"
//     },
//     {
//         image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrUb_SAqHuPx57Y-keP9dzAHNtoCo54OpRxQ&s",
//         title: "Image6"
//     }
// ]

const ImageCarousel = ({type}) =>{
    const[slider,setSlider]=useState([]);
    const handleSliderData=async()=>{
        try{
            const response = await masterServices.getProducts();
            setSlider(response?.data?.products?.slice(0,10))
        }catch(err){
            console.log("Error in fetching Slider data")
        }
    }
    useEffect(()=>{
        handleSliderData();
    },[])
    return(
        <>
        {type ? <Carousel
        autoPlay
        infiniteLoop
        showStatus={false} // Hide the status
        showThumbs={false}
        showIndicators={false}
        showArrows={false}
        emulateTouch
        swipeable
        centerMode
        centerSlidePercentage={25}
        >
            {slider.map((slide, index)=>{
            return(
                <div key={index}>
                    <img src={slide?.thumbnail} alt={`Image${index+1}`} />
                </div>)
            })}
        </Carousel>:
        <Carousel
        autoPlay
        infiniteLoop
        showStatus={false} // Hide the status
        showThumbs={false}
        showIndicators={false}
        showArrows={false}
        emulateTouch
        swipeable
        centerMode
        centerSlidePercentage={50}
        >
            {slider.map((slide, index)=>{
            return(
                <div key={index}>
                    <img src={slide?.thumbnail} alt={`Image${index+1}`} />
                </div>)
            })}
        </Carousel>
        }
        <div className='carousel-button'>
        <div>
            <button>{'<'}</button>
        </div>
        <div>
            <button>{'>'}</button>
        </div>
    </div>
    </>
    )
}

export default ImageCarousel;