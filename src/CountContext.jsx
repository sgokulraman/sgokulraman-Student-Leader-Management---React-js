import React,{createContext, useContext, useState} from "react";
export const CountContext = createContext()
export const ContextProvider = ({children})=>{
    const [Count,setCount] = useState(0)
     const Increment = ()=>{
        setCount(Count +1)
        console.log(Count)
     }
     return(
        <CountContext.Provider value={{Count, Increment}}>
{children}
        </CountContext.Provider>
     )
}