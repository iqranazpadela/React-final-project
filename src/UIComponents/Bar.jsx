import React from 'react'
import { NavLink } from "react-router-dom"
function Bar() {
    return (
        <div className="row">
            <div className="col s12 m8 l4 offset-l4">
                <br />
                <br />
                <nav className="white z-index-0">
                    <div className="container">
                        <ul>
                            <li>
                                <NavLink to="/Profile/UserProfile" className="grey-text" exact activeClassName="black-text">
                                    User Profile
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/Profile/Notifications" className="grey-text" exact activeClassName="black-text">
                                    Notifications
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/Profile/Requests" className="grey-text" exact activeClassName="black-text">
                                    Request
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Bar
