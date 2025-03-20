// import { useEffect, useState, useCallback, useRef } from 'react';

// const Categories = () => {
//   const [gazeCoordinates, setGazeCoordinates] = useState(null);
//   const [isCurrentlyBlinking, setIsCurrentlyBlinking] = useState(false);

//  
//   const currentChannel = useRef(null);
//   const ctxRef = useRef(null);
//   const imageCanvasRef = useRef(null);

//   const THROTTLE_MS = 1000;

//   function createThrottledFunction(functionToThrottle, waitTimeMs) {
//     let isWaitingToExecute = false;
//     return function throttledFunction(...args) {
//       if (!isWaitingToExecute) {
//         functionToThrottle.apply(this, args);
//         isWaitingToExecute = true;
//         setTimeout(() => {
//           isWaitingToExecute = false;
//         }, waitTimeMs);
//       }
//     };
//   }

//   const broadcastData = (data) => {
//     if (currentChannel.current) {
//       currentChannel.current.send({
//         type: 'broadcast',
//         event: 'eye_tracking',
//         payload: data,
//       });
//     }
//   };

//   const throttledBroadcast = createThrottledFunction(broadcastData, THROTTLE_MS);

//   useEffect(() => {
//     if (!window.webgazer) {
//       console.error("WebGazer is not initialized.");
//       return;
//     }

//     window.webgazer.setGazeListener((data,clock) => {

//       try {
//         const normalizedGazeX = data.x / window.innerWidth;
//         const normalizedGazeY = data.y / window.innerHeight;
//         setGazeCoordinates({ x: normalizedGazeX, y: normalizedGazeY });
//         const videoElement = document.getElementById('webgazerVideoFeed');
//         console.log('vdo element',videoElement)
//         if (!videoElement) {
//           console.error('WebGazer video element not found');
//           return;
//         }

//         imageCanvasRef.current.width = videoElement.videoWidth;
//         imageCanvasRef.current.height = videoElement.videoHeight; 

//         const tracker = window.webgazer.getTracker();
//         console.log("trackerrrrrr",tracker)
//         tracker.getEyePatches(
//           videoElement,
//           imageCanvasRef.current,
//           videoElement.videoWidth,
//           videoElement.videoHeight
//         ).then((patches) => {
//           console.log(patches,"patches>>>>>>>>>>>>>>>>>>")
//           if (!patches?.right?.patch?.data || !patches?.left?.patch?.data) {
//             console.error('No eye patches detected');
//             return;
//           }
//           const calculateBrightness = (imageData) => {
//             let total = 0;
//             for (let i = 0; i < imageData.data.length; i += 16) {
//               const r = imageData.data[i];
//               const g = imageData.data[i + 1];
//               const b = imageData.data[i + 2];
//               total += (r + g + b) / 3;
//             }
//             console.log("calbrgt func", total)
//             return total / (imageData.width * imageData.height / 4);
//           };

//           const rightEyeBrightness = calculateBrightness(patches.right.patch);
//           const leftEyeBrightness = calculateBrightness(patches.left.patch);
//           const avgBrightness = (rightEyeBrightness + leftEyeBrightness) / 2;

//           const dynamicThreshold = 0.5;
//           const blinkDetected = avgBrightness > dynamicThreshold;
//           console.log("avgbrt", avgBrightness);
//           console.log("blink",blinkDetected)
//           if (blinkDetected !== isCurrentlyBlinking) {
//             setIsCurrentlyBlinking(blinkDetected);
//           }

//           throttledBroadcast({
//             isBlinking: blinkDetected,
//             gazeX: normalizedGazeX,
//             gazeY: normalizedGazeY,
//           });

//         });
//       } catch (error) {
//         console.error('Error processing gaze data:', error);
//       }
//     })
//     // .begin();

//     return () => {
//       if (window.webgazer) {
//         window.webgazer.pause();
//       }
//     };
//   },[]);

//   const [calibrationPoints, setCalibrationPoints] = useState([]);
//   const [currentPoint, setCurrentPoint] = useState(0);
//   const [isCalibrating, setIsCalibrating] = useState(false);
//   const [hasCalibrated, setHasCalibrated] = useState(false);

//   const startCalibration = useCallback(() => {
//     const points = [
//       { x: 0.1, y: 0.1 },
//       { x: 0.9, y: 0.1 },
//       { x: 0.5, y: 0.5 },
//       { x: 0.1, y: 0.9 },
//       { x: 0.9, y: 0.9 },
//     ];
//     setCalibrationPoints(points);
//     setCurrentPoint(0);
//     setIsCalibrating(true);
//     setHasCalibrated(false);

//     if (window.webgazer) {
//       window.webgazer.clearData();
//     }
//   }, []);

//   const handleCalibrationClick = useCallback(
//     (event) => {
//       if (!isCalibrating) return;

//       const x = event.clientX;
//       const y = event.clientY;
//       if (window.webgazer) {
//         window.webgazer.recordScreenPosition(x, y, 'click');
//       }

//       if (currentPoint < calibrationPoints.length - 1) {
//         setCurrentPoint((prev) => prev + 1);
//       } else {
//         setIsCalibrating(false);
//         setHasCalibrated(true);
//       }
//     },
//     [isCalibrating, currentPoint, calibrationPoints.length]
//   );

//   console.log("Calibration Points", calibrationPoints);
//   console.log("Gaze Coordinates", gazeCoordinates);
//   console.log('isblinking', isCurrentlyBlinking)

//   return (
//     <div className="content" >
//       <h3>Categories</h3>
//       <canvas ref={imageCanvasRef} style={{ display: 'none' }}></canvas>
//       <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
//         {calibrationPoints?.map((point, index) => (
//           <div
//             key={index}
//             onClick={handleCalibrationClick}
//             className={`absolute w-6 h-6 rounded-full transform -translate-x-1/2 -translate-y-1/2 ${
//               index === currentPoint ? 'bg-red-500 cursor-pointer pulsate' : 'bg-gray-500'
//             } z-50`}
//             style={{
//               left: `${point.x * 100}%`,
//               top: `${point.y * 100}%`,
//             }}
//           ></div>
//         ))}
//         <div className="text-white text-center z-50 font-serif text-md mb-24">
//           Click the red dot to calibrate ({currentPoint + 1}/{calibrationPoints.length})
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Categories;
import { useState } from "react";
import ImageCarousel from "../ImageCarousel"
import '../authForm.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import NavBar from "../NavBar";

const Categories =()=>{
  const [activeTab, setActiveTab]=useState('ShopByProducts');
  const tabs =[{label: 'Shop by products', value:'ShopByProducts'},{label: 'Shop by rooms', value:'ShopByRooms'}]
  return(
    <div className="content container">
    <h2>Categories</h2>
    <p>Crafted with love specially for you</p>
    <NavBar items={tabs} button="View all" activeTab={activeTab} setActiveTab={setActiveTab} />
    <ImageCarousel type="category" />
    <div>
        <h1>Discount Slider</h1>
    </div>
    </div>
  )
}

export default Categories;