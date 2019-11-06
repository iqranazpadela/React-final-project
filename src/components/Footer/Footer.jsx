import React, { Fragment } from 'react';
import { connect } from "react-redux";
const Footer = (props) => {
    return (<Fragment>
        {props.User ? (null) : (
                <footer className="page-footer transparent">
                    <div className="footer-copyright grey darken-3">
                        <div className="container center-align">
                            &copy; 2018 Blood Bank System <br />
                            Created By Misbah Aslam Sabrani.
         </div>
                    </div>
                </footer>
            )}
    </Fragment>
    );
}
const mapStateToProps = (state) => {
    return {
        User: state.auth.currentUser
    }
}
export default connect(mapStateToProps)(Footer);