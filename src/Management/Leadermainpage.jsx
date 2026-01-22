import React, { useEffect, useState } from "react";
import './leaderlogin.css'
// import Leader_signin from "./Leader_signin";
import axios from "axios";
import { useForm } from "react-hook-form";
import { BiSolidLeftArrowAlt } from "react-icons/bi";
import Mainpage from "./Mainpage";
import Leader_signin from "./Leader_signin";
function Leadermainpage(){
    const [selectedsignin, setselectedsignin] = useState(true)
    const [formdata, setformdata] = useState(true)
    const {register, handleSubmit,formState:{errors}} = useForm()
    const [apicalling, setapicalling] = useState([])
    const handleapi = async()=>{
        let apihandle = await axios.get("https://gokulraman.pythonanywhere.com/leader/access/")
        setapicalling(apihandle.data)
    }
    const submited = (data)=>{
        let answer = apicalling.find((dat)=>
            dat.username === data.username &&
            dat.password === data.password &&
            dat.dateofbirth === data.dateofbirth
        )
        
        if (answer){
            setformdata(false)
        }
        else{
            alert("Invalid Credentials")
        }
    }

    const back = ()=>{
        setselectedsignin(false)
    }
    useEffect(()=>{
        handleapi()
    },[])
    return(
        <>
        {formdata?(<>{selectedsignin?(
            <div>
        <p className="backarrow" onClick={back}><BiSolidLeftArrowAlt/></p>
        <div className="Leader-container">
            <div className="Leader-subcontainer">
                <form onSubmit={handleSubmit(submited)}>
                    <label>Username</label><input className="form form-control " type="text" {...register("username",{required:"username required"})} />
                    <label>Password</label><sup>{errors.required?.message}</sup><input  className="form form-control" type="password" {...register("password",{required:"password required",minLength:{value:8, message:"minimum 8 digits"}})} />
                    <label>Date of Birth</label><input className="form form-control" type="date" {...register("dateofbirth")}/>
                    <input className="btn btn-info" type="submit"></input><input type="reset" className="btn btn-warning" />
                </form>
                </div>

        </div>
        </div>):<Mainpage/>} </>):<Leader_signin/>}
    </>
    )
}
export default Leadermainpage