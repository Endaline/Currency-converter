import React from 'react'
import { NavLink } from 'react-router-dom';

function Navbar() {
  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? 'bold' : 'normal',
      color: isActive ? 'blue' : '#000',
      backgroundColor: isActive ? 'white' : 'lightblue',
    }
  }
  return (
    <nav className="primary-nav bg-white">
      <NavLink style={navLinkStyles} to="/">
        Chart
      </NavLink>
      <NavLink  style={navLinkStyles}  to="/send" >
        Send
      </NavLink>
      <NavLink style={navLinkStyles} to="/chart">
        Charts
      </NavLink>
      <NavLink style={navLinkStyles} to="/alert">
        Alert
      </NavLink>
    </nav>
  )
}

export default Navbar
