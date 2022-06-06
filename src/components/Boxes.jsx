import {CloseCircleOutlined } from "@ant-design/icons"
import { Input, Select } from 'antd';
import { useContext } from "react"
import { AppContext } from "../context/AppContext"
    const { Option } = Select;

    const onChange = (value) => {
        console.log(`selected ${value}`);
    };
    
    const onSearch = (value) => {
        console.log('search:', value);
    };

    const handleChange = (value) => {
    console.log(`selected ${value}`);
    };
export const Boxes=({inputtext ,defaultval_independent,defaultval_dependent,frequency})=>{
     
const [addrow,handlerow] =useContext(AppContext)

    return <div style={{display:"flex",justifyContent:"space-around" }}>
        <CloseCircleOutlined style={{fontSize:"2rem"}} onClick={()=>handlerow(-1)}/>
        <Input value= {inputtext} style={{width:"10%", height:"2.2rem"}}/>
         
        <Select mode="multiple" style={{ width: '40%', }} placeholder="Select..."
                defaultValue={defaultval_independent}
                onChange={handleChange}
                optionLabelProp="label" >
                <Option value="ME Totge (Avg.)" label="ME Totge (Avg.)">
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
            onChange={onChange}
            onSearch={onSearch}
            filterOption={(input, option) => option.children.toLowerCase().includes(input.toLowerCase())}
               style={{width:"20%"}} >
            <Option value=" ME Shaft Power (Avg.)"> ME Shaft Power (Avg.)</Option>
            <Option value=" ME Torge (Avg.)"> ME Torge (Avg.)</Option>
         
        </Select>
        <Input type="number" value={frequency} placeholder="min" style={{width:"3rem", padding:"7px",margin:".2rem"}}/>
        
        <button style={{color:"red", borderRadius:"10px", border:"1px solid red", padding:".5rem", margin:".2rem"}}>Save</button>
    </div>
     
}