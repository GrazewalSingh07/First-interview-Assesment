import {CloseCircleOutlined } from "@ant-design/icons"
import { Input, Select } from 'antd';
import { useContext,useState } from "react"
import { AppContext } from "../context/AppContext"
import "./Boxes.css"
    const { Option } = Select;

    
   
 
  export const Boxes=({inputtext ,defaultval_independent,defaultval_dependent,frequency})=>{
     
    const [addrow,handlerow] =useContext(AppContext)

    const [alertext,setalerttext]=useState(inputtext)
    const [independent,setindependent]=useState(defaultval_independent)
    const [dependent,setdependent]=useState(defaultval_dependent)
    const [tempfrequency,settempfrequency]=useState(frequency)
   
    function savedata(){
        console.log(alertext,independent,dependent,tempfrequency)
        
    }
 

    return <div style={{display:"flex",justifyContent:"space-around" , borderBottom:".1px solid gray", margin:"1rem"}}>
        <CloseCircleOutlined className="crossCircle" onClick={()=>handlerow(-1)}/>
        <Input id="inputtext" value= {inputtext} style={{width:"10%", height:"2.2rem"}} onChange={(e)=>setalerttext(e.target.value)}/>
         
        <Select mode="multiple" style={{ width: '40%', }} placeholder="Select..."
                value={independent}
                 
                onChange={(e)=>setindependent(e)}
                optionLabelProp="label"
                 id="defaultval_independent" >
                 <Option  value="ME Totge (Avg.)" label="ME Totge (Avg.)">
                <div className="demo-option-label-item">
                    ME Totge (Avg.)
                </div>
                </Option>
                <Option value="ME Speed (Avg.)" label="ME Speed (Avg.)">
                <div className="demo-option-label-item">
                ME Speed (Avg.)
                </div>
                </Option>
                <Option value=" Rate of Return (Avg.)" label=" Rate of Return (Avg.)">
                <div className="demo-option-label-item">
                Rate of Return (Avg.)
                </div>
                </Option>
    
         </Select>
      
         <Select
          defaultValue={defaultval_dependent}
            showSearch
            placeholder="Select..."
            optionFilterProp="children"
            onChange={(e)=>setdependent(e)}
            
            // filterOption={(input, option) => option.children.toLowerCase().includes(input.toLowerCase())}
               style={{width:"20%"}} id="defaultval_dependent" >
            <Option value=" ME Shaft Power (Avg.)"> ME Shaft Power (Avg.)</Option>
            <Option value=" ME Torge (Avg.)"> ME Torge (Avg.)</Option>
            
        </Select>
        <Input type="number" onChange={(e)=>settempfrequency(e.target.value)}id="frequency"value={frequency} placeholder="min" style={{width:"3rem", padding:"7px",margin:".2rem"}}/>
        
        <button className="saveBtn" onClick={savedata}>Save</button>
    </div>
     
}