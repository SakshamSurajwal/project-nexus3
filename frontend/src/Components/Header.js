import React from 'react'
import { NavLink,Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <nav style={{backgroundColor:'black',color:'white'}} className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <img alt='logo' style={{height:'45px',width:'60px',marginRight:'8px'}} src="https://cdn.pixabay.com/photo/2018/06/08/00/48/developer-3461405_1280.png"/> 
          </Link>
          <div style={{fontSize:'30px'}}>N-Tech</div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item"><NavLink style={{color:'white'}} to="/" className="nav-link">Home</NavLink></li>
              <li className="nav-item"><NavLink style={{color:'white'}} to="/services" className="nav-link">Services</NavLink></li>
              <li className="nav-item"><NavLink style={{color:'white'}} to="/about" className="nav-link">About Us</NavLink></li>
              <li className="nav-item"><NavLink style={{color:'white'}} to="/contact" className="nav-link">Contact Us</NavLink></li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header
