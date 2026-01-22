import React, { useState } from "react";
import Studentlogin from "./Studentlogin";
import './mainpage.css'
import { useContext } from "react";
import {BrowserRouter, Route, Routes, Link}from 'react-router'
import Leadermainpage from "./Leadermainpage";
function Mainpage(){
    const [disable, setdisable] = useState(true)
    const [enable, setenable] = useState(true)
    const display = ()=>{
        setdisable(false)
    }
    const disabledisplay = ()=>{
        setenable(false)
        setdisable(false)
    }
    return(
        <>
        {enable?(<>
        {disable ?
            (<div className="Mainpage-container">
            
            <div className="Mainpage-subcontainer">
                
                <button className="btn btn-primary" onClick={display}>Student Login</button>
                

            </div>
            <div>
                <button className="btn btn-danger" onClick={disabledisplay}>Leader Login</button>

            </div>

        </div>)
        :<Studentlogin/>}
        </>):<Leadermainpage/>}
    </>
    )
}
export default Mainpage