import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import {BiSolidArrowFromRight} from "react-icons/bi"
import axios from 'axios'
import Studentproblemlist from './Studentproblemlist'
import Studentlogin from './Studentlogin'
import Studentstatus from './Studentstaus'
export default function Studentsignin(){
    const {register, handleSubmit,formState:{errors}} = useForm()
    const [apicalling, setapicalling] = useState([])
    const [choose, setchoose] = useState(true)
    const [Signup, setSignup] = useState([])
    const [back, setback] = useState(true)
    const submited = (data)=>{
        let choosen = apicalling.find((user)=>
            user.email === data.email &&
            user.password === data.password &&
            user.dateofbirth === data.date 
        )

        if (choosen){
            setchoose(false)
            setSignup(choosen)

        }
        else{
            alert("Invalid Credentials")
        }
    }
    const backarrow = ()=>{
        setback(false)
    }
    const handleapi = async()=>{
            let handle = await axios.get("https://gokulraman.pythonanywhere.com/student/detail/")
            setapicalling(handle.data)
    }

    useEffect(()=>{
        handleapi()
    },[])
    return(
            <>
            {back?(<>{choose ? (<><p className="backarrow" onClick={backarrow}><BiSolidArrowFromRight/></p>
         <div className='StudentSignin'>
        <form onSubmit={handleSubmit(submited)}>
            <label>Email</label><sup  className='text text-danger'>* {errors.email?.message}</sup><input type="email"className='form form-control' {...register("email",{required:"Email is required",pattern:{message: "Invalid email format"}})} placeholder='Enter Your Email'/><br/>
            <label>password</label><sup className='text text-danger'>*{errors.password?.message}</sup>
            <input type="password" {...register('password',{required:"Password is required",minLength:{value:6,message:"password must be at least 6 characters"}})} className="form form-control"placeholder='Enter Your password'/><br/>
            <label>Date Of Birth</label>
            <input type="date" className='form form-control'{...register("date")}/><br/>
            <input className='btn btn-info' type="submit"/><input className='btn btn-danger' type="reset"/>
        </form>
        </div>
        </>):<Studentproblemlist a={Signup}/>}</>):<Studentlogin/>}
        
        </>
    )
}