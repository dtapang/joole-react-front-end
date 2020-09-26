import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";

import { connect } from "react-redux";
import { register } from "../actions/auth";
import Navbar from "../Product/Navbar";
import Header from "../Product/Header";

const required = (value) => {
    if (!value) {
        return (
            <div className="alert alert-danger" role="alert">
                This field is required!
            </div>
        );
    }
};

const email = (value) => {
    if (!isEmail(value)) {
        return (
            <div className="alert alert-danger" role="alert">
                This is not a valid email.
            </div>
        );
    }
};

const vusername = (value) => {
    if (value.length < 3 || value.length > 20) {
        return (
            <div className="alert alert-danger" role="alert">
                The username must be between 3 and 20 characters.
            </div>
        );
    }
};

const vpassword = (value) => {
    if (value.length < 6 || value.length > 40) {
        return (
            <div className="alert alert-danger" role="alert">
                The password must be between 6 and 40 characters.
            </div>
        );
    }
};

class Register extends Component {
    constructor(props) {
        super(props);
        this.handleRegister = this.handleRegister.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeCpassword = this.onChangeCpassword.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);

        this.state = {
            username: "",
            firstname: "",
            lastname: "",
            cpassword: "",
            password: "",
            successful: false,
        };
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value,
        });
    }

    onChangeCpassword(e) {
        this.setState({
            cpassword: e.target.value,
        });
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value,
        });
    }

    handleRegister(e) {
        e.preventDefault();

        const { dispatch, history } = this.props;

        this.setState({
            successful: false,
        });

        //this.form.validateAll();

        if (this.state.username && this.state.password) {
            this.props
                .dispatch(
                    register(this.state.username, this.state.password)
                )
                .then((response) => {
                    this.setState({
                        successful: true,
                    });


                    console.log(response);
                    history.push("/login");
                    window.location.reload();


                })
                .catch(() => {
                    this.setState({
                        successful: false,
                    });
                });
        }
    }

    render() {
        const { message } = this.props;

        return (
            <div >

                <div>
                    <Navbar />
                    <Header />
                    <div className="login-input">
                        <Form onSubmit={this.handleRegister}
                              ref={(c) => {
                                  this.form = c;
                              }}>
                            <input type="text" placeholder="username or email"
                                   name="username"
                                   value={this.state.username}
                                   onChange={this.onChangeUsername}
                            />
                            <br/>
                            <input type="text" placeholder="firstname"/>
                            <br/>
                            <input type="text" placeholder="lastname"/>
                            <br/>
                            <input type="password" placeholder="password"
                                   name="password"
                                   value={this.state.password}
                                   onChange={this.onChangePassword}
                            />
                            <br/>
                            <input type="password" placeholder="confirm password"
                                   name="cpassword"
                                   value={this.state.cpassword}
                                   onChange={this.onChangeCpassword}
                            />
                            <br/>
                            <button type="submit">Register</button>
                        </Form>
                    </div>
                </div>

            </div>
        );
    }
}

function mapStateToProps(state) {
    const { message } = state.message;
    return {
        message,
    };
}

export default connect(mapStateToProps)(Register);
