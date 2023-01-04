import React from 'react'
import {Link} from "react-router-dom"
import './NavBar.css';



function NavBar() {

 
  return (
    <div className='navbar'>
        <div className="hiddenLink">
        <Link to="/admin">Admin</Link>
        </div>
      </div>
     
  )
}

export default NavBar
