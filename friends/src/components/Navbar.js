import React from 'react'
import {Link} from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
      <nav>
        <Link to="/signin">Sign In</Link>
        <Link to="/addfriend">Add Friend</Link>
        <Link to="/updatefriend">Update Friend</Link>
        <Link to="/friendlist">Friends List</Link>
        <Link to="/signout">Sign Out</Link>
      </nav>
    </div>
  )
}