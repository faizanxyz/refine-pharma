import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import MainPage from './components/mainPage/mainPage';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Order from './components/Order';
<<<<<<< Updated upstream
=======
import PurchaseOrderFilter from './components/PurchaseOrder';
import Patients from './components/Patients';
import Product from './components/Product';
import EditOrder from './components/EditOrder';
// import EditOrder from './components/EditOrder/editOrder';
import Edit from '@mui/icons-material/Edit';
import Delete from './components/Delete';
import LongMenu from './components/Options';
>>>>>>> Stashed changes

function App() {
  const accessToken = localStorage.getItem('accessToken');
  const navigate = useNavigate();

  useEffect(() => {
    if (accessToken) {
      
      navigate('/mainPage/dashboard');
    }else{
      navigate('/login');
    }
  }, [accessToken]);

  return (
<<<<<<< Updated upstream
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
=======
    <div>

    {/* Ensure that Router wraps your entire application */}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/mainPage" element={<MainPage />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="order" element={<Order />} />
          <Route path="edit-order" element={<EditOrder />} />
          <Route path="purchase-order" element={<PurchaseOrderFilter />} />
          <Route path="patient" element={<Patients />} />
          <Route path="product" element={<Product />} />   
          <Route path="Edit" element={<Edit />} /> 
          <Route path="Delete" element={<Delete />} /> 
          <Route path="longmenu" element={< LongMenu/>} /> 
        </Route>
      </Routes>
   
    </div>
  );
>>>>>>> Stashed changes
}

export default App;

