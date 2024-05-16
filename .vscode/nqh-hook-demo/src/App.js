import React from 'react'
import NqhUseState from './components/NqhUseState'
import NqhUseEffect from './components/NqhUseEffect'
import NqhUseContext from './components/NqhUseContext'
import './App.css'

export default function App() {
  return (
      <div className='container border mt-3'>
        <h1 ClassName= 'text-center'> Nguyễn Quang Huy</h1>
      <hr/>
      <NqhUseState />
      <hr/>
      <NqhUseEffect />
      <hr/>
      <NqhUseContext/>
    </div>
      
  )
}
