import logo from "../images/joole_logo.png";
import React from "react";

export default function Header(){
    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            Building Product Selection System
        </header>
    );
}
