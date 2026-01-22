import React, { useEffect, useState } from 'react';
import img from "../assets/Imagesslideshow/image5.png"
import img1 from "../assets/Imagesslideshow/image1.png"
import img2 from "../assets/Imagesslideshow/image2.png"
import img3 from "../assets/Imagesslideshow/image3.png"
import img4 from "../assets/Imagesslideshow/image4.png"
import "./slider.css"

export default function Slider() {
    const images = [img, img1, img2, img3, img4];
    const Names = ["KARATE KID LEGENDS", "WENDESDAY", "KANTARA", "WAR 2", 'JOURNEY']
    const [change, setchange] = useState(0)
    const Increment = () => {
        setchange((change + 1) % images.length)
    }
 

        setTimeout(() => {
            Increment()
        }, 3000);



    return (
        <>
        <div className='slid-container'>
            <div className='slid-subcontainer'>
            <img src={images[change]} alt={Names[change]} />
            </div>
            </div>
        </>
    )
}


