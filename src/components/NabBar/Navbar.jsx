import React, { Component, Fragment } from 'react'
import SignInLinks from "./SignInLinks"
import SignOutLinks from "./SignOutNavbar"
import { NavLink } from "react-router-dom"
import Drawer from '@material-ui/core/Drawer';
import './Navbar.css'
import { connect } from "react-redux"
import { PervData } from "../../store/Actions/donorsAction"
import { CURRENTUSER } from '../../store/Actions/authActions';

class Navbar extends Component {
  constructor() {
    super()
    this.state = {
      name: "",
      left: false,
    }
  }
  componentDidMount = () => {

    this.props.currentUser()
    this.props.pervData()
  }
  toggleDrawer = (open) => () => {
    this.setState({
      left: open,
    });
  };

  render() {
    const sideList = (
      <div className="list_width">
        <ul className="collection with-header">
          <li className="collection-header red darken-2">
              <h6 className="white-text">
                {this.props.User ? (this.props.User.email) : (null)}
              </h6>
          </li>
          <li className="collection-item">
            <NavLink to="/Profile" className="red-text">
              Profile
            </NavLink>
          </li>
          <li className="collection-item">
            <NavLink to="/" exact className="red-text">
              Donors
      </NavLink>
          </li>
          {this.props.status === "donor" ? (<li className="collection-item">
            <NavLink to='/RegisterDonor' exact className="red-text">
              Register
      </NavLink>
          </li>
          ) : (null)}
          <li className="collection-item">
            <NavLink to='/LogOut' exact className="red-text">
              Log out
      </NavLink>
          </li>
        </ul>
      </div>
    );
    return (
      <div>
        {this.props.User ? (<Fragment><nav className="nav-wrapper red darken-4">
          <div className="container">
            <span onClick={this.toggleDrawer(true)} className="btn-small btn-floating transparent hide-on-large-only">
              <i className="material-icons">menu</i>
            </span>
            &nbsp;
            &nbsp;
            &nbsp;
        <span className="flow-text red darken-4 hide-on-large-only">Blood Bank System</span>
            <Drawer open={this.state.left} onClose={this.toggleDrawer(false)}>
              <div onClick={this.toggleDrawer(false)}>
                {sideList}
              </div>
            </Drawer>
            <span className="brand-logo hide-on-med-and-down">Blood Bank System</span>
            <ul className="right hide-on-med-and-down">
              <SignInLinks s={this.props.status} email={this.props.User.email} />
            </ul>
          </div>
        </nav>
        </Fragment>) : (<SignOutLinks />)}
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  const user = state.auth.currentUser ? state.auth.currentUser : null
  return {
    User: user,
    status: state.auth.status
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    pervData: () => dispatch(PervData()),
    currentUser: () => dispatch(CURRENTUSER()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
