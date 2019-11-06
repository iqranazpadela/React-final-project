import React from 'react'
import {NavLink} from "react-router-dom"
const SignInLinks = (props) =>{
  const char = props.email.slice(0,1)
  return (
    <ul className="right">
            <li><NavLink to='/'>Donors</NavLink></li>
            {props.s  === "donor" ? (<li><NavLink to='/RegisterDonor'>Register</NavLink></li>) : (null)}
            <li><NavLink to='/LogOut'>Log out</NavLink></li>
            <li><NavLink to="/Profile" className='btn btn-floating red lighten-1'>{char}</NavLink></li>
        </ul>
  )
}

export default SignInLinks;