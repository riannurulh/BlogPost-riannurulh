import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import HomePage from './HomePage.jsx'
import DetailPage from './pages/DetailPage.jsx'
import Login from './pages/Login.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <HomePage /> */}
    <Login/>
    {/* <DetailPage/> */}
  </React.StrictMode>,
)
