import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import HomePage from './Pages/Home/HomePage.jsx'
import AddCrop from './Pages/NewCrop/NewCrop.jsx'

// import AdminPage from './Pages/Admin/AdminPage.jsx'


// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/Admin" element={<AdminPage />} /> */}
          <Route path="/AddCrop" element={<AddCrop />} />
          
        </Routes>
      </Router>
    </div>
  
  )
}

export default App
