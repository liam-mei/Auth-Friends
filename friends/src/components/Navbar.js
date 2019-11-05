import React from "react";
import { Link } from "react-router-dom";
import getToken from "../utils/getToken";

export default function Navbar() {

  const token = getToken();
  return (
    <div>
      <nav>
        {token && <Link to="/">Home</Link>}
        {!token && <Link to="/signin">Sign In</Link>}
        {token && <Link to="/addfriend">Add Friend</Link>}
        {/* {token && <Link to="/updatefriend">Update Friend</Link>} */}
        {token && <Link to="/friendslist">Friends List</Link>}
        {token && <Link to="/signout">Sign Out</Link>}
      </nav>
    </div>
  );
}
