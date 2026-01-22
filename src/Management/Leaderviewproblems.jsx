import axios from "axios";
import React, { useEffect, useState } from "react";

function Leaderviewproblems(){
    const [apicalling, setapicalling] = useState([])
    const apihandle = async()=>{
        let api = await axios.get("http://127.0.0.1:8000/student/problem/")
        setapicalling(api.data)
        console.log(apicalling)
    }
    
    useEffect(()=>{
        apihandle()
    },[])
    return(
        <div>

        </div>
    )
}
export default Leaderviewproblems