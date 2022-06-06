import { useEffect, useState } from "react"
 
import { Header } from "./Header"
import { Boxes } from "./Boxes"
import "./Home.css"
import { useContext } from "react"
import { AppContext } from "../context/AppContext"
import { v4 as uuidv4 } from 'uuid';
export const Home=()=>{
    
     const [addrow,setRow,array,setarray] =useContext(AppContext)
    //  const [array,setarray]=useState([<Boxes {...obj2}/>,<Boxes {...obj}/>])
    
    return <div className="main">
        <h1 style={{textAlign:"center"}}>Alert configuration</h1>
        <hr />
        <Header/>
        <hr />
        {array?.map((el=>(
            <div key={uuidv4()}>{el}</div>
        )))}
         
    </div>
}