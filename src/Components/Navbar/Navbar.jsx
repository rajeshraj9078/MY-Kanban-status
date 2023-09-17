import React from 'react'
import'./Navbar.css';
import Header from '../Header/Header';


const Navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-black-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand text-white h1 p-3 ms-3" href="../Header/Header">RAJESH</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-4 mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active text-white h2 p-3 ml-1" aria-current="page" href="/">Home</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle text-white h2 p-3 ms-5" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="../Header/Header">Status</a></li>
                    <li><a className="dropdown-item" href="../Header/Header">Priority</a></li>
                    
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      
    </div>
  )
}

export default Navbar
