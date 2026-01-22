import React, { useEffect, useState } from "react";
import axios from "axios";
import './card.css'
import MovieDetails from "./MovieDetails";
function Card(){
    const [apicalling, setapicalling] = useState([])
    const Handleapi = async()=>{
        try{
        const fetchingapi = await axios.get("https://fooapi.com/api/movies")
        setapicalling(fetchingapi.data.data)
        }catch(error){
            console.log(error)
        }
    }
    useEffect(()=>{
        Handleapi()
    },[])
    return(
        <>
            <div className="container-card">
            {
            apicalling.map((da)=>(
                    <MovieDetails a={da}/>
                ))
            }
            </div>
        </>
    )
}
export default Card