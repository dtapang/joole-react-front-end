import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import logo from "../images/joole_logo.png";
import axios from "axios";

class LoginPage extends React.Component {

    constructor(props) {
        super(props);


        this.state = {
            username: '',
            password: '',
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit = (event) => {
        event.preventDefault();

        this.setState({ submitted: true });
        const { username, password } = this.state;
        const { dispatch } = this.props;
        if (username && password) {
            //dispatch(userActions.login(username, password));
        }

        const user = {
            username:"happy",
            password:"happy"
        };

        axios.post(`http://localhost:8070/auth/login`,user)
            .then(res => {
                console.log(res);
                console.log(res.data);



            })

        /*
            setInterceptors = () => {
                axios.defaults.headers.common['Token'] = localStorage.getItem("token");
                axios.defaults.headers.common['Device'] = "device";
            };
            */
    }


    Navbar = () => {
        const search = "Fan";
        return (
            <nav className="navbar-link">
                <Link to="/login"> Login | </Link>
                <Link to="/signup"> Signup | </Link>
                <Link to={`/search`}> Search | </Link>
                <Link to={`/product/${search}`}> Products | </Link>
                <Link to={`/product/compare/${search}`}> Compare </Link>

            </nav>
        );
    }

    Header = () => {
        return (
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                Building Product Selection System
            </header>
        );
    }


    render () {

        /**
         * <Navbar/>
         <Header/>
         */

        return (
            <div>

                <div className="login-input">
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" placeholder="username or email" name="username"
                               onChange={this.handleChange}/>
                        <br/>
                        <input type="password" placeholder="password" name="password"
                               onChange={this.handleChange}/>
                        <br/>
                        <button type="submit">Login</button>
                    </form>
                </div>
            </div>
        );
    }



}


export { LoginPage };
