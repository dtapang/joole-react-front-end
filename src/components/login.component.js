import React, { Component } from "react";
import {Redirect}  from 'react-router-dom';

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import { connect } from "react-redux";
import { login } from "../actions/auth";
import logo from "../images/joole_logo.png";
import * as axios from "axios";
import store from "../store";

const required = (value) => {
    if (!value) {
        return (
            <div className="alert alert-danger" role="alert">
                This field is required!
            </div>
        );
    }
};

class Login extends Component {

    signal = axios.CancelToken.source();

    unsubscribe = store.subscribe(() => console.log(store.getState()))
    constructor(props) {
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);

        this.state = {
            username: "",
            password: "",
            loading: false,
        };
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value,
        });
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value,
        });
    }

    handleLogin(e) {
        e.preventDefault();

        this.setState({
            loading: true,
        });

        const { dispatch, history } = this.props;

        let self = this;

        if (this.state.username && this.state.password) {
            dispatch(login(this.state.username, this.state.password, this.signal))
                .then((response) => {
                    console.log(response.data);
                    self.setState({
                        loading: false,
                    });

                })
                .catch(() => {
                    this.setState({
                        loading: false
                    });
                });
        } else {
            this.setState({
                loading: false,
            });
        }
        //history.push("/search");
    }

    componentWillUnmount = () =>{
        this.signal.cancel('Api is being canceled');
        this.unsubscribe();
    }
    render() {
        const { isLoggedIn, message } = this.props;

        if (isLoggedIn) {
            return <Redirect to="/search" />;
        }

        return (
            <div>

                <div>
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo"/>
                        Building Product Selection System
                    </header>

                    <div className="login-input">
                        <form onSubmit={this.handleLogin}>
                            <input type="text" placeholder="username or email" name="username"
                                   onChange={this.onChangeUsername}/>
                            <br/>
                            <input type="password" placeholder="password" name="password"
                                   onChange={this.onChangePassword}/>
                            <br/>
                            <button type="submit">
                                {this.state.loading && (
                                    <span className="spinner-border spinner-border-sm"></span>
                                )}
                                Login
                            </button>
                        </form>
                    </div>
                </div>

             </div>
        );
    }
}

function mapStateToProps(state) {
    const { isLoggedIn } = state.auth;
    const { message } = state.message;
    return {
        isLoggedIn,
        message
    };
}

export default connect(mapStateToProps)(Login);
