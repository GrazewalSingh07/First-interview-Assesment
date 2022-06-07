import {PlusCircleOutlined}  from "@ant-design/icons"
 import "./Header.css"
 import { useContext } from "react"
import { AppContext } from "../context/AppContext"
export const Header=()=>{
    
const [addrow,handlerow] =useContext(AppContext)

function AddRow(){
    handlerow(1)
}
    return <div className="header">
         <div style={{display:"flex", justifyContent:"space-around", width:"20%"}}>
            <PlusCircleOutlined style={{fontSize:"3rem", color:"green",margin:"1rem"}} onClick={AddRow}/>
        
            <h4 style={{margin:"1rem"}}>Alert Name</h4>
        </div>
        <h4 style={{margin:"1rem"}}>Independent variable</h4>
        <h4 style={{margin:"1rem"}}>Dependent variable</h4>
        <div style={{display:"flex", justifyContent:"space-around", width:"15%"}}>
            <h4 style={{margin:"1rem"}}>Frequency</h4>
            <h4 style={{margin:"1rem"}}>Save</h4>
        </div>
        
    </div>
}