import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import LoginPage from './Auth/LoginPage'
import { Layout } from './Component/layout'
import { HomePage } from './Pages/Home'
import { RegisterPage } from './Auth/RegisterPage'

import CallbackPage from './Component/CallbackPage'


function App() {
  const [count, setCount] = useState(0)

  return (
    <Layout>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/Login' element={<LoginPage/>}/>
      <Route path='/Register' element={<RegisterPage/>}/>
      {/* <Route path='/sso-callback' element={<CallbackPage/>}/> */}
    </Routes>
    </Layout>
  )
}

export default App
