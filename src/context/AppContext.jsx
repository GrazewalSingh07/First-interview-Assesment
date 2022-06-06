import React from "react";
import { Boxes } from "../components/Boxes";
export const AppContext=React.createContext()

const obj={
    inputtext:"alert 1",
    defaultval_independent:['ME Totge (Avg.)','ME Speed (Avg.)','Rate of Return (Avg.)'],
    defaultval_dependent:"ME Torge (Avg.)",
    frequency:"10"
}
const obj2={
    inputtext:"alert 1",
    defaultval_independent:['ME Totge (Avg.)','ME Speed (Avg.)'],
    defaultval_dependent:"ME Torge (Avg.)",
    frequency:"10"
}
 export const AppContextProvider=({children})=>{
    const [addrow,setRow] =React.useState(1)
   
    const[array,setarray]=React.useState([<Boxes {...obj2}/>,<Boxes {...obj}/>])
    React.useEffect(()=>{
        for(let i=0;i<addrow;i++){
            setarray([...array,<Boxes/>])
         }
         console.log(array)
    },[addrow])
    
    function handlerow(val){
        if(val==1){
            setRow(addrow+1)
        }
        else if(val==-1){
           
             array.splice(array.length-1,1)
            
            setarray([...array])
        }
    }
    return <AppContext.Provider value={[addrow,handlerow,array,setarray]}>
{children}
    </AppContext.Provider>
}