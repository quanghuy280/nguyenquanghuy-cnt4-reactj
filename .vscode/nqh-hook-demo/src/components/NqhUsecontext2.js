import React, { useContext } from 'react'
import { ThemeContext} from './NqhUseContext'

export default function NqhUseContext2() {
    const theme = useContext(ThemeContext  )
  return (
    <div className={theme} >
      <h2>NqhUseContext2</h2>
      <p>
        <b>2210900102</b>
        <b>Nguyên Quang huy</b>
        <b>K22CNT4</b>
      </p>
    </div>
  )
}