import React from 'react'
import LogIn from "../auth/LogIn";
const SignOutNavbar = () => {
    return (
      <div className="l">
        <nav className="nav-wrapper red darken-4">
          <div className="container">
            <span className="brand-logo  hide-on-small-only">Blood Bank System</span>
            <span className="hide-on-med-and-up">Blood Bank System</span>
          </div>
        </nav>
        <br />
        <br />
        <br />
        <div className="container">
        <LogIn />
        </div>
      </div>
    )
  }
export default SignOutNavbar

