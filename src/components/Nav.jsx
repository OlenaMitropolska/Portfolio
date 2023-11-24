import React from 'react'
import { Link } from 'react-router-dom'


function Nav() {
  return (
    <div className='nav'>
      <Link className='navLink' to={"/"} > <div className='namediv'>Olena Mitropolska</div> </Link>
      <div className="bmenu">
      <Link className='navLink' to={"/myprojects"} ><p>Projects</p></Link>
      </div>
    </div>
  )
}

export default Nav