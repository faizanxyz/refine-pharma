import './App.css'
import Nav from './components/navbar/navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Nav />}/>
      </Routes>
    </Router>
    
    </>
  )
}

export default App
