import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import Header from './component/Header'
import Musical from './component/Musical'
import Theater from './component/Theater'
import Exhibit from './component/Exhibit'
import Footer from './component/Footer'
import './App.css'

function App() {

  return (
    <Router>
      <>
        <div id="wrap">
          <Header />

          <div className="nav">
            <div className="inner">
              <h2>HOT! 인기 공연/전시</h2>
              <ul>
                <li><NavLink to="/" className={({ isActive }) => (isActive ? 'active-link' : 'inactive-link')}>뮤지컬</NavLink></li>
                <li><NavLink to="/Theater" className={({ isActive }) => (isActive ? 'active-link' : 'inactive-link')}>연극</NavLink></li>
                <li><NavLink to="/Exhibit" className={({ isActive }) => (isActive ? 'active-link' : 'inactive-link')}>전시/행사</NavLink></li>
              </ul>
            </div>
          </div>

          <Routes>
            <Route path='/' element={<Musical />} />
            <Route path='/Theater' element={<Theater />} />
            <Route path='/Exhibit' element={<Exhibit />} />
          </Routes>

          <Footer />
        </div>
      </>
    </Router>
  )
}

export default App
