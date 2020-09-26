import React, { Component } from "react";
import { connect } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";

import Login from "./components/login.component";
import Register from "./components/register.component";
import Profile from "./components/profile.component";
import logo from './images/joole_logo.png';
import './App.css';
import {Router, Route, Link , Switch} from "react-router-dom";
import Product from "./Product/Product";
import SpecificProduct from "./Product/SpecificProduct";
import CompareProduct from "./Product/CompareProduct";
import { logout } from "./actions/auth";
import { clearMessage } from "./actions/messages";
import { history } from './helpers/history';
import Searcher from "./Product/ProductSearch";
import store from "./store";

let Navbar = () => {

    return (
            <nav className="navbar-link">
                <Link to="/login"> Login | </Link>
                <Link to="/signup"> Signup | </Link>
                <Link to={`/search`}> Search | </Link>
                <Link to={`/product`}> Products | </Link>
                <Link to={`/product/compare/`}> Compare </Link>

            </nav>
    );
}
let Header = () => {
    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            Building Product Selection System
        </header>
    );
}


class App extends Component {
    constructor(props) {
        super(props);
        this.logOut = this.logOut.bind(this);

        this.state = {
            showModeratorBoard: false,
            showAdminBoard: false,
            currentUser: undefined,
        };

        history.listen((location) => {
            props.dispatch(clearMessage()); // clear message when changing location
        });
    }

    componentDidMount() {
        const user = this.props.user;

        if (user) {
            this.setState({
                currentUser: user,
                showAdminBoard: user.roles.includes("ADMIN"),
            });
        }
    }

    logOut() {
        this.props.dispatch(logout());
    }

    render() {
        const { currentUser, showAdminBoard } = this.state;

        return (
            <Router history={history} store={store}>
                <div className="App">
                    <nav className="navbar navbar-expand navbar-dark bg-dark">

                        <div className="navbar-nav mr-auto">

                            {showAdminBoard && (
                                <li className="nav-item">
                                    <Link to={"/projects"} className="nav-link">
                                        projects
                                    </Link>
                                </li>
                            )}

                            {currentUser && (
                                <li className="nav-item">
                                    <Link to={"/search"} className="nav-link">
                                        Search
                                    </Link>
                                </li>
                            )}
                            {currentUser && (
                                <li className="nav-item">
                                    <Link to={"/product"} className="nav-link">
                                        Product
                                    </Link>
                                </li>
                            )}
                        </div>

                        {currentUser ? (
                            <div className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <Link to={"/"} className="nav-link">
                                        {currentUser.username}
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <a href="/login" className="nav-link" onClick={this.logOut}>
                                        LogOut
                                    </a>
                                </li>
                            </div>
                        ) : (
                            <div className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <Link to={"/login"} className="nav-link">
                                        Login
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <Link to={"/register"} className="nav-link">
                                        Sign Up
                                    </Link>
                                </li>
                            </div>
                        )}
                    </nav>




                    <Switch>
                        <Route path="/" exact  component={Login} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/register" component={Register} />
                        <Route exact path="/profile" component={Profile} />

                        <Route path="/search"  component={Searcher} />
                        <Route path="/product/compare"  component={CompareProduct} />
                        <Route path="/product"  component={Product} />


                        <Route path="/productinfo"  component={SpecificProduct} />


                    </Switch>


                </div>
            </Router>
        );
    }
}


function mapStateToProps(state) {
    const { user } = state.auth;
    return {
        user,
    };
}

export default connect(mapStateToProps)(App);
