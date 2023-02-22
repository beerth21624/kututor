import React from 'react'

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-light bg-light"
      style={{
        height: '90px',
      }}
    >
      <div className="container-fluid">
        <div className="d-flex align-items-center">
          <img src="/image/logo.png" alt="logo" width={'80px'} />
          {/* <span className="navbar-brand mb-0 h1">KU TUTOR</span> */}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
