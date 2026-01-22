import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { BiSolidLeftArrowAlt } from "react-icons/bi";
import { CiViewList } from "react-icons/ci";
import axios from "axios";
import Studentsignin from "./Studentsignin";
function Studentproblemlist({ a }) {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const [back, setback] = useState(true)
    const [apicalling, setapicalling] = useState([])
    const [mergeddata, setmergeddata] = useState([])
    const [status, setstatus] = useState(false)
    const saveproblem = async (data) => {
        const handledata = {
            "problem_title": data.problem_title,
            "problem": data.problem,
            "student": a.id
        }
        try {
            let rel = await axios.post("https://gokulraman.pythonanywhere.com/student/problem/", handledata)
            setback(false)
        }
        catch (error) {
            console.log("status", error.response?.status)
            console.log("Error", error.response?.data)
        }
    }
    const handleapi = async () => {
        try 
        {let handle = await axios.get("https://gokulraman.pythonanywhere.com/student/problem/")
        setapicalling(handle.data)}
        catch(error){
            console.log("api error",error)
        }
    }
    const alldata = () => {
        return apicalling.filter(p => p.student === a.id)
    }
    const selection = () => {
        setback(false)
        setstatus(false)
    }
    const statusbtn = () => {
        setstatus(true)
    }
    const statusHide = () => {
        setstatus(false)
    }
    useEffect(() => {
        handleapi()
    }, [])
    useEffect(() => {
        alldata()
    }, [])
    useEffect(() => {
        if (apicalling && a) {
            const mergedata = alldata(apicalling, a)
            setmergeddata(mergedata)
        }
    }, [apicalling, a])
    return (
        <>
            {back ? (<><p className="backarrow" onClick={selection}><BiSolidLeftArrowAlt /></p>

                <div className="problem-container">
                    <div className="problem-subcontainer">
                        <form onSubmit={handleSubmit(saveproblem)}>
                            {/* <p>{da.a.email}</p> */}
                            <label>Title</label><sup className="text text-danger">{errors.problem_title?.message}</sup><input  className="form form-control" type="text" {...register("problem_title", { required: "Titile is require", minLength: { value: 2, message: "Fill Minimum one sentence" } })} placeholder="Problem Title" /><br />
                            <label>Explain about the problem</label><sup className="text text-danger">{errors.problem?.message}</sup><textarea  className="form form-control"  {...register("problem", { required: "Problem require" })} placeholder="explain problem here" /><br />
                            <input className="btn btn-secondary" type="submit" />{status ? (<button className="btn btn-dark ps-4 pe-4 ms-5" onClick={statusHide}>Status Hide</button>) : (<button className="btn btn-dark ps-4 pe-4 ms-5" onClick={statusbtn}>Status Show</button>)}
                        </form>
                    </div>
                </div>
            </>) : <Studentsignin />}
            {status ? (<div className="problem-container">
                <div className="problem-subcontainer">
                    <table>
                        <thead>
                            <tr>
                                <th>
                                    Title
                                </th>
                                <th>
                                    Problem
                                </th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                mergeddata.map((values) => (
                                    <tr key={values.id}>
                                        <td>
                                            {values.problem_title}
                                        </td>
                                        <td>
                                            {values.problem}
                                        </td>
                                        <td>

                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>) : ""}
        </>
    )
}
export default Studentproblemlist