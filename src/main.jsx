import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { WelcomePage } from './pages/welcomePage'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="" element={<WelcomePage/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
