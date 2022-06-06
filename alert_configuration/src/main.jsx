import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {BrowserRouter} from "react-router-dom"
import 'antd/dist/antd.css';
import {AppContextProvider} from "./context/AppContext"
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </AppContextProvider>
  </React.StrictMode>
)
