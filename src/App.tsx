import './App.css';
import MainPage from './components/mainPage/mainPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Order from './components/Order';

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
