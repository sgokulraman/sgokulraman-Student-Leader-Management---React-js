import React, { useEffect, useState } from 'react'
 import {useForm} from 'react-hook-form'
import "./studentsigninform.css"
import axios from 'axios'
import { BiSolidLeftArrowAlt } from 'react-icons/bi'
import Studentlogin from './Studentlogin'
export default function StudentSigninForm(){
    const {register, handleSubmit, formState:{errors}} = useForm()
    const [studentdata, setstudentdata] = useState(true)
    const [backword, setbackword] = useState(true)

    const submiting = async(Data)=>{
        let body = {
            "first_name" : Data.first_name,
            "last_name" : Data.last_name,
            "roll_no" : Data.roll_no,
            "email" : Data.email,
            "phone_no": Data.phone_no,
            "class_name" : Data.class_name,
            "section": Data.section,
            "dateofbirth": Data.dateofbirth,
            "password": Data.password,
            "gender" : Data.gender,
        }
        if (Data.password == Data.confirm_password){

            try{

                console.log(body)
                const res = await axios.post("https://gokulraman.pythonanywhere.com/student/detail/",body)
                setstudentdata(false)

                
        }
            catch(error){
                console.log("Status", error.response?.status)
                console.log("Error", error.response?.data)
                }
            }
        else{
            alert("Invalide password")
            setstudentdata("invalid Password")
        }
        }
    let backarrow = ()=>{
        setbackword(false)
    }

    return(
        <div>
        {studentdata ? (<>{backword ?
        (<div><p className="backarrow" onClick={backarrow}><BiSolidLeftArrowAlt/> </p>
        <h1 className='studentreg'>Student Registration</h1>
        <div className='StudentSignin'>
        <form onSubmit={handleSubmit(submiting)} >
            <label>First Name : </label><sup className='text text-danger'>* {errors.first_name?.message}</sup><input className="form form-control"type='text' {...register("first_name",{required:"First name is Reqired"})} placeholder='First Name' /><br/>
            <label>Last Name : </label><sup className='text text-danger'>*</sup><input className="form form-control" type = "text"  {...register("last_name")} placeholder='Last Name'/><br/>
            <label>Roll No : </label><sup className='text text-danger'>*</sup><input className='form form-control' type='number' {...register("roll_no")} placeholder='Roll No'/>
            <label>Email : </label><sup className='text text-danger'>*</sup><input className="form form-control" type="email" {...register("email")} placeholder='Eg. abc@gmail.com'/><br/>
            <label>Phone No : </label><sup className='text text-danger'>*{errors.phone_no?.message}</sup><input className="form form-control" type="number" {...register("phone_no",{required:"Phone number required",minLength:{value:10,message:"Enter Valid Mobile Number"}})} placeholder='Phone No'/><br/>
            <label>class : </label><sup className='text text-danger'>*</sup><input className="form form-control" type="number" {...register("class_name")} placeholder=' 1 to 12'/><br/>
            <label>Section : </label><sup className='text text-danger'>*</sup><input className="form form-control" type="text" {...register("section")} placeholder='I, II, III...' /><br/>
            <label>Date of Birth : </label><br/><input className="form form-control" type="date" {...register("dateofbirth")}/><br/>
            <label>Gender</label><br/>
            <label>Male</label><input type="radio" value={"male"} {...register("gender",{required:"Gender reqired"})}  />
            <label>Female</label><input type="radio" value={"female"} {...register("gender",{required:"Gender reqired"})} /> <br/>
            <label>Password</label><sup className='text text-danger'>*{errors.password?.message}</sup><input className='form form-control' type='password' {...register("password",{required:"Minimum 8 digits",minLength:{value:8, message:"Please Enter min 8 digit"}})} placeholder='Enter password'/>
            <label>Confirm Password</label><sup className='text text-danger'>*</sup><input className='form form-control' type="password" placeholder='Confirm password' {...register("confirm_password")} />
            <input className='btn btn-info me-5' type="submit"/><input className='btn btn-danger ms-5' type='reset'/>
        </form>
        </div>
        </div>):<Studentlogin/>}</>):<Studentlogin/>}
        {/* use memo feature add for prev site */}
    </div>
    )
}