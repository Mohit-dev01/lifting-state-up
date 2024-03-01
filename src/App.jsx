import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import User from './form'

function App() {
 function getdata(data) {
  console.log(data)
 }
  return (
    <>
      <User func={getdata} />
    </>
  )
}

export default App
