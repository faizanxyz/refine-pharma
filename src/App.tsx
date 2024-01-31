import './App.css';
import MainPage from './components/mainPage/mainPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Order from './components/Order';
import PurchaseOrderFilter from './components/PurchaseOrder';
import Patients from './components/Patients';
import Product from './components/Product';

function App() {
  
  return (
    <>
    <Router>
    <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/mainPage" element={<MainPage />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="order" element={<Order />} />
            <Route path="purchase-order" element={<PurchaseOrderFilter />} />
            <Route path="patient" element={<Patients />} />
            <Route path="product" element={<Product />} />


          </Route>
        </Routes>
    </Router>
    
    </>
  )
}

export default App
