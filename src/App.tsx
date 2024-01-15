import './App.css'
import MainPage from './Components/MainPage/mainPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import Login from './Components/Login';
import Order from './Components/Order';

function App() {
  
  return (
    <>
    <Router>
    <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/mainPage" element={<MainPage />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="order" element={<Order />} />
          </Route>
        </Routes>
    </Router>
    
    </>
  )
}

export default App
