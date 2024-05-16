import React, { createContext, useState} from 'react'
import NqhUseContext1 from './NqhUseContext1';
export const ThemeContext = createContext();// tạo ngữ cảnh 

export default function NqhUseContext() {
    // state
    const [theme,setTheme] = useState('red');
    // hàm thay đổi ng
    const NqhHandleChange = ( )=>{
        setTheme(theme=='red'?'blue':'red');

    }
  return (
    <ThemeContext.Provider value={theme}>
    <div>
      <h2>demo context </h2>
      <NqhUseContext1 />
      <button onClick={NqhHandleChange}>Change Bgcolor</button>
    </div>
    </ThemeContext.Provider>
  )
}