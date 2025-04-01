import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';

import Musical from './Musical'
import Theater from './Theater'
import Exhibit from './Exhibit'

const Tab = () => {
  return (
    <>
      <Router>
        <section className='tab'>
          <div className="inner">
            <h2>HOT! 인기 공연/전시</h2>
            <ul className="tab_btn">
              <li><NavLink to="/" className={({ isActive }) => (isActive ? 'active-link' : 'inactive-link')}>뮤지컬</NavLink></li>
              <li><NavLink to="/Theater" className={({ isActive }) => (isActive ? 'active-link' : 'inactive-link')}>연극</NavLink></li>
              <li><NavLink to="/Exhibit" className={({ isActive }) => (isActive ? 'active-link' : 'inactive-link')}>전시/행사</NavLink></li>
            </ul>

            <Routes>
              <Route path='/' element={<Musical />} />
              <Route path='/Theater' element={<Theater />} />
              <Route path='/Exhibit' element={<Exhibit />} />
            </Routes>
          </div>
        </section>
      </Router>
    </>
  )
}

export default Tab


