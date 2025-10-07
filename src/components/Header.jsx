import React from 'react'
import { NavLink } from 'react-router'

function Header() {
  return (
    <div>
     <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow">
      <div className="container-fluid px-4">

    <NavLink className="navbar-brand fw-bold" to="#">
      StudentMS
    </NavLink>

    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
    <span className="navbar-toggler-icon"></span>
    </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                
                <li className="nav-item">
                  <NavLink className="nav-link" to="/">Home</NavLink>
                </li>

                <li className="nav-item">
                  <NavLink className="nav-link" to="/about">About</NavLink>
                </li>

                <li className="nav-item">
                  <NavLink className="nav-link" to="/contact">Contact</NavLink>
                </li>

                <li className="nav-item">
                  <NavLink className="nav-link" to="/student/add">Add Student</NavLink>
                </li>

                <li className="nav-item">
                  <NavLink className="nav-link" to="/student/display">Display Student</NavLink>
                </li>

              </ul>
            </div>
          </div>
        </nav>
    </div>
  )
}

export default Header