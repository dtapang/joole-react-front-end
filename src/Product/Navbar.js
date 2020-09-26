import {Link} from "react-router-dom";
import React from "react";

export default function Navbar(props){
    const search  = "Fan";
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
