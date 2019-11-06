import React, { Fragment } from 'react';
import { Route } from "react-router-dom";
import Bar from "../../UIComponents/Bar"
import UserProfile from "./UserProfile"
import Notifications from "./Notifications"
import Requests from "./Requests"
import { connect } from 'react-redux';

const Profile = (props) => {
  return (<Fragment>
      {props.currentUser ? (
        <Fragment>
        <Bar />
        <Route exact path="/Profile/UserProfile" component={UserProfile} />
        <Route exact path="/Profile/Notifications" component={Notifications} />
        <Route exact path="/Profile/Requests" component={Requests} />
        </Fragment>
      ) : (null) }
  </Fragment>
  )
}
const mapStateToProps = (state) => {
  return {
    currentUser: state.auth.currentUser,
  }
}
export default connect(mapStateToProps)(Profile)
