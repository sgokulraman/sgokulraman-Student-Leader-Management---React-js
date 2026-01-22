import React, { useState } from "react";
import axios from "axios";

function Studentstatus({b}){
    const [apicalling, setapicalling] = useState([])
    const handledata = async()=>{
        const api = await axios.get("http://127.0.0.1:8000/student/problem/")
        setapicalling(api)
    }

    useState(()=>{
        handledata()
    },[])
    return(
        <div>
            {
                apicalling.map
            }
        </div>
    )
}
export default Studentstatus