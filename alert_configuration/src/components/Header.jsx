import {PlusCircleOutlined}  from "@ant-design/icons"
 import "./header.css"
 import { useContext } from "react"
import { AppContext } from "../context/AppContext"
export const Header=()=>{
    
const [row,handlerow] =useContext(AppContext)

function addRow(){
    handlerow(1)
    // console.log("hi")
    // console.log(row)
}
    return <div className="header">
    <PlusCircleOutlined style={{fontSize:"3rem", color:"green",margin:"1rem"}} onClick={addRow}/>
        <h4>Alert Name</h4>
        <h4>Independent variable</h4>
        <h4>Dependent variable</h4>
        <h4>Frequency</h4>
        <h4>Save</h4>
    </div>
}