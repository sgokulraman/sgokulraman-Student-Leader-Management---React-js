import React from "react"
import { FaStarHalf,FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
function MovieDetails(da){
    // const [star, setstar] = useState("")
    let Stars = da.a.imdbRating
    const Handlestar =(Stars)=>{
        const Starcontainer = [];
        const FullStar = Math.floor(Stars/2)
        const HalfStar = Stars %2 >=1;
        const empty = 5-FullStar-(HalfStar?1:0)
        for (let i = 0; i < FullStar;i++){
            Starcontainer.push(<FaStar className="text-warning"/>)
        }
        if(HalfStar){
            Starcontainer.push(<FaStarHalf className="text-warning"/>)
        }
        for (let i = 0; i<empty; i++){
            Starcontainer.push(<CiStar className="text-dark"/>)
        }
        return Starcontainer
    }
    return(
        <>
        <div>
            
            <div key={da.a.id} className='container-card'>

            <div className='sub-container-card'>
                <img src={da.a.poster} alt={da.a.title +" Movie-Image"}/>
                <div className='title-container'>
            <div className='title'>
                <li className='fs-6 font-monospace'>{da.a.title}</li></div>
                <div className='star-container-card'>{
                    Handlestar(Stars)}<sub>{Stars}</sub>
                </div>
            </div>
            <div className='content-card'>
                <b>
                    Released
                </b>
                <b>
                    RunTime
                </b>
                <b>
                    Genre
                </b>
            </div>
            <div className='sub-content-card'>
                <p>
                    {da.a.released}
                </p>
                <p>
                    {da.a.runtime}
                </p>
                <p>
                    {da.genre}
                </p>
            </div>
            </div>    
        </div>
        </div>
        </>
    )
}
export default MovieDetails