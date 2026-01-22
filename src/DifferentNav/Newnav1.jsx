import React from 'react'
import './newnav1.css'
import { CiBellOn } from "react-icons/ci";
import { IoChatboxOutline } from "react-icons/io5";
import img from '../assets/Imagesslideshow/image2.png'
function Newnav1(){
    return(
        <div>
            <div className='nav1-main-container'>
                <div className='nav1-sub-container'>
                    <div className='left-menu'>
                    <h1 className='h1-icon'>
                        Clever
                    </h1>
                    <p className='p-newnav1'>Home</p>
                    <p className='p-newnav1'>Product</p>
                    <p className='p-newnav1'>Features</p>
                    <p className='p-newnav1'>Pricing</p>
                    </div>
                    <div className='register-nav1'>
                    <p className='p-newnav2'><IoChatboxOutline/></p> 
                    <p className='p-newnav2'><CiBellOn /></p>
                    <img  className="image-nav1" src={img}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Newnav1