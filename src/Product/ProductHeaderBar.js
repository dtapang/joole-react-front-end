import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import jooleLogoImagePath from "../images/joole_logo.png";
import {Link} from "react-router-dom";
import userImagePath from "../images/user.png";
import React from "react";
import Searcher from "./ProductSearch";
import SearchComponent from "./SearchComponent";



export default function ProductHeaderBar(){
    return(

        <Container className={"header-layout"} >
            <Row className={"header-row"}>
                <Col xs={12} sm={12} md={3}> <img src={jooleLogoImagePath} height={"100px"} align={"left"}/> </Col>
                <Col xs={12} sm={12} md={7}> <SearchComponent /> </Col>
                <Col xs={12} sm={12} md={2}>
                    <span className={"header-right"}>
                    <nav className="navbar-link" >
                        <Link to="/projects"> Projects </Link>
                    </nav>
                    <img src={userImagePath} height={"100px"}/>
                    </span>
                </Col>
            </Row>
        </Container>

    );

}
