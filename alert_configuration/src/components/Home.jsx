import { useEffect, useState } from "react"
import { DefaultBoxes } from "./DefaultBoxes"
import { Header } from "./Header"
import { Boxes } from "./Boxes"
import "./Home.css"
import { useContext } from "react"
import { AppContext } from "../context/AppContext"
import { v4 as uuidv4 } from 'uuid';
export const Home=()=>{
     const [row] =useContext(AppContext)
     const [array,setarray]=useState([<DefaultBoxes/>])
    useEffect(()=>{
        for(let i=0;i<row;i++){
            setarray([...array,<Boxes/>])
         }
         console.log(array)
    },[row])
    return <div className="main">
        <h1 style={{textAlign:"center"}}>Alert configuration</h1>
        <hr />
        <Header/>
        <hr />
        {array.map((el=>(
            <div key={uuidv4()}>{el}</div>
        )))}
         
    </div>
}