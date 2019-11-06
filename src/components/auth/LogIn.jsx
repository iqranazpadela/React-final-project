import React, { Component } from 'react';
import Button from '../../UIComponents/Button'
import InputS from '../../UIComponents/InputS';
import An from '../../UIComponents/An';
import './LogIn.css'
import Checkbox from '../../UIComponents/checkbox';
import { connect } from "react-redux"
import { LOGIN, error, SIGNUP } from '../../store/Actions/authActions';
import Type from '../../store/const/types';
class LogIn extends Component {
    constructor() {
        super();
        this.state = {
            UserEmail: '',
            UserPass: '',
            Status: '',
            SignUp: false,
            LogIn: true,
        }
    }
    onAdd = (event) => {
        event.preventDefault();
        if (this.state.LogIn) {
            if (this.state.UserEmail === ''){
                this.props.LoginVE()
                return
            }
            else if(this.state.UserPass === '') {
                this.props.LoginVP()
                return
            }
            this.props.logIn(this.state.UserEmail, this.state.UserPass);
        }
        else if (this.state.SignUp) {
            if (this.state.UserEmail === ''){
                this.props.SignUpVE()
                return
            }
            else if(this.state.UserPass === ''){
                this.props.SignUpVP()
                return
            }
            else if(this.state.Status === '') {
                this.props.SignUpVS()
                return
            }
            this.props.signUp(this.state.UserEmail, this.state.UserPass, this.state.Status)
        }
    }

    whenChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value })
        this.props.error()
    }
    whenClick = () => {
        this.setState({
            UserEmail: '',
            UserPass: '',
            Status: '',
            SignUp: true,
            LogIn: false,
        })

    }
    WhenClick = () => {
        this.setState({
            UserEmail: '',
            UserPass: '',
            SignUp: false,
            LogIn: true,
            Status: '',
        })
    }

    render() {
        return (
            <div>
                <div className="container">
                    {this.state.LogIn ? (<div className="row">
                        <div className="col s12 m6 l6 offset-l3 offset-m3">
                            <div className="card z-depth-2">
                                <form onSubmit={this.onAdd}>
                                    <div className="card-content red lighten-5">
                                        <div className="card-title z-depth-1 center red darken-2 white-text">Log In</div>
                                        <br />
                                        <InputS n="UserEmail" v={this.state.UserEmail} t="text" oc={this.whenChange} f="lemail" e={this.props.lemail} m={this.props.lmess} d="lemail" l="Email" />
                                        <InputS n="UserPass" v={this.state.UserPass} t="password" oc={this.whenChange} f="pass" p={this.props.lpass} m={this.props.lmess} d="pass" l='Password' />
                                    </div>
                                    <div className="card-action red lighten-5">
                                        <Button cn="btn form_bu red darken-1" t="Log in" />
                                        <span className="grey-text darken-1">Don't have an account?</span>  &nbsp; <An cn="red-text form_a text" t="Sign up" oc={this.whenClick} />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>) : (null)}
                    {this.state.SignUp ? (<div className="row">
                        <div className="col s12 m6 l6 offset-l3 offset-m3">
                            <div className="card z-depth-2">
                                <form onSubmit={this.onAdd}>
                                    <div className="card-content red lighten-5">
                                        <div className="card-title z-depth-1 center red darken-2 white-text">Sign Up</div>
                                        <br />
                                        <InputS n="UserEmail" v={this.state.UserEmail} t="text" oc={this.whenChange} f="semail" e={this.props.semail} m={this.props.smess} d="semail" l="Email" />
                                        <InputS n="UserPass" v={this.state.UserPass} t="password" oc={this.whenChange} f="pass" p={this.props.spass} m={this.props.smess} d="pass" l='Password' />
                                        <p className="pink-text accent-3-text">Who are you?</p>
                                        <Checkbox wc={this.whenChange} />
                                       {this.props.statuserr ? (<div className="red-text">{this.props.statusmess}</div>):(null)} 
                                    </div>
                                    <div className="card-action red lighten-5">
                                        <Button cn="btn form_bu red darken-1" t="Sign up" />
                                        <span className="grey-text darken-1">Already have an account?</span> &nbsp; <An cn="red-text form_a text" t="Log in" oc={this.WhenClick} />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>) : (null)}
                </div>
            </div>
        )
    }
}
const mapdispatchToProps = (dispatch) => {

    return {
        logIn: (email, pass) => dispatch(LOGIN(email, pass)),
        error: () => dispatch(error()),
        signUp: (email, pass, status) => dispatch(SIGNUP(email, pass, status)),
        LoginVE: () => dispatch({type: Type.logInVE}),
        LoginVP: () => dispatch({type: Type.logInVP}),
        SignUpVE: () => dispatch({type: Type.SignUpVE}),
        SignUpVP: () => dispatch({type: Type.SignUpVP}),
        SignUpVS: () => dispatch({type: Type.SignUpVS}),
        
    }
}
const mapStateToProps = (state) => {
    return {
        lemail: state.signIn.email,
        lpass: state.signIn.pass,
        lmess: state.signIn.errorMessage,
        semail: state.signUp.email,
        spass: state.signUp.pass,
        smess: state.signUp.errorMessage,
        statusmess: state.auth.errorMessage,
        statuserr: state.auth.statusErr,
        signUpUser: state.signUp.signUpUser
    }
}
export default connect(mapStateToProps, mapdispatchToProps)(LogIn);
