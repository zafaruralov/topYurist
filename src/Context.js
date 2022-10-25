import { createContext, useState } from "react";

export const topYutistInfo = createContext()

export const Context = ({children}) => {
  const [nums,setNum]= useState('')

  return(
    <topYutistInfo.Provider value={{nums, setNum}}>
      {children}
    </topYutistInfo.Provider>
  )
}
export default Context