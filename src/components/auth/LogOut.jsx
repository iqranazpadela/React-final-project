import React, { Fragment } from 'react';
import An from '../../UIComponents/An';
import { connect } from "react-redux"
import { LOGOUT } from "../../store/Actions/authActions"

const LogOut = (props) => {
    const whenClick = () => {
        props.history.push('/')
        props.logOut()
    }
    const WhenClick = () => {
        props.history.push('/')
    }
    return (<Fragment>
        {props.User ? (<div className="container">
            <br />
            <br />
            <br />
            <div className="row">
                <div className="col s12 m6 l6 offset-l3 offset-m2">
                    <div className="card red lighten-5">
                        <div className="card-content">
                            <b className="card-title red-text">Log out</b>
                            <p className="Black-text">Are you sure, You want to log out?</p>
                        </div>
                        <div className="card-action">
                            <An cn="btn-small black-text red lighten-1 white-text" t="Cancel" oc={WhenClick} />
                            &nbsp; &nbsp; &nbsp;
                        <An cn="btn-small black-text red lighten-1 white-text" t="Log out" oc={whenClick} />
                        </div>
                    </div>
                </div>
            </div>
        </div>) : (null)}</Fragment>
        
    )
}

const mapDispatchToProps = (dispatch) => {
    return{
        logOut: () => dispatch(LOGOUT())
    }
}
const mapStateToProps = (state) => {
    return{
        User:state.auth.currentUser
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(LogOut);