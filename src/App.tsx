import './App.css'
import MainPage from './components/mainPage/mainPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<MainPage />}/>
      </Routes>
    </Router>
    
    </>
  )
}

export default App
