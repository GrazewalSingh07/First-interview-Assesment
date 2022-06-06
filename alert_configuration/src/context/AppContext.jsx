import React from "react";

export const AppContext=React.createContext()

 export const AppContextProvider=({children})=>{
    const [row,setRow] =React.useState(1)
    
    function handlerow(val){
        if(val==1){
            setRow(row+1)
        }
        else if(val==-1){
            setRow(row-1)
        }
    }
    return <AppContext.Provider value={[row,handlerow]}>
{children}
    </AppContext.Provider>
}