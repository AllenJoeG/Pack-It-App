import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { useSelector } from 'react-redux';

function Nav() {
  //REDUX Access
  const user = useSelector((store) => store.user);

  return (
    <div className="nav">
      <Link to="/home">
        <h2 className="nav-title">PackItApp</h2>
      </Link>
      <div>
        {/* If no user is logged in, show these links */}
        {user.id === null &&
          // If there's no user, show login/registration links
          <Link className="navLink" to="/login">
            Login / Register
          </Link>
        }

        {/* If a user is logged in, show these links */}
        {user.id && (
          <>

            <Link className="navLink" to="/headout">
              Head Out
            </Link>

            <Link className="navLink" to="/pack">
              Pack
            </Link>

            <Link className="navLink" to="/inventory">
              Inventory
            </Link>

            <Link className="navLink" to="/unpack">
              Unpack
            </Link>

            <Link className="navLink" to="/user">
              Account
            </Link>

            <LogOutButton className="navLink" />
          </>
        )}

        <Link className="navLink" to="/about">
          About
        </Link>
      </div>
    </div>
  );
}

export default Nav;
