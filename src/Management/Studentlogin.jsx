import React, { useState } from "react";
import './mainpage.css'
import { BiSolidLeftArrowAlt } from 'react-icons/bi'
import StudentSignupForm from "./StudentSigninForm";
import Mainpage from "./Mainpage";
import Studentsignin from "./Studentsignin";
function Studentlogin(){
    const [signin, setsignin] = useState(true)
    const [backword, setbackword] = useState(true)
    const [signup, setsignup] = useState(true)
    
    const Signinbutton = ()=>{
        setsignin(false)
        setbackword(false)
    }
    let backarrow = ()=>{
        setbackword(false)
    }
    let Signupbutton = ()=>{
        setsignup(false)
    }
    return(<>

       {signin ?(<> {signup? (<>{backword?(<div>
        <p className="backarrow" onClick={backarrow}><BiSolidLeftArrowAlt/></p>
        <div className="Mainpage-container">
            <div className="Mainpage-subcontainer">
                <button className="btn btn-primary" onClick={Signupbutton}>Sign up</button>
            </div>
            <div>
                <button className="btn btn-danger" onClick={Signinbutton}>Sign in</button>
            </div>
        </div></div>):<Mainpage/>}
        </>):<StudentSignupForm/>}
        </>):<Studentsignin/>}
        
        </>
    )
}
export default Studentlogin