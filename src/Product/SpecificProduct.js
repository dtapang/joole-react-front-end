import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button"
import "./Product.css"
import jooleLogoImagePath from "../images/joole_logo.png";
import {Link} from "react-router-dom";
import userImagePath from "../images/user.png";
import ProductTab from "./ProductTab";
import ProductAccordion from "./ProductAccordion";
import ProductInfoTab from "./ProductInfoTab";
import CompareTable from "./CompareTable";


let Searcher = () =>{
    return(
        <div className={"searcher"}>
            <select>
                <option>Mechanical</option>
                <option>Spiritual</option>
                <option>Technical</option>
            </select>
            <input type="text" placeholder="search..." />
        </div>
    );
}
let Header =()=>{
    return(

        <Container className={"header-layout"} >
            <Row className={"header-row"}>
                <Col xs={12} sm={12} md={3}> <img src={jooleLogoImagePath} height={"100px"} align={"left"}/> </Col>
                <Col xs={12} sm={12} md={7}> <Searcher /> </Col>
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

let ProductInfoTabs = () => {

    return(
        <div>
            <ProductInfoTab />
        </div>
    );
}

export default function SpecificProduct() {
    return (
        <Container className={"page-background"} fluid>
            <Row>
                <Col xs={12} sm={12}> <Header /> </Col>
            </Row>
            <Row>
                <Col xs={12} sm={12}> Bread Crumbs </Col>
            </Row>
            <Row>
                <Col xs={12} sm={12}> ProductInfo </Col>
            </Row>
            <Row>
                <Col xs={12} sm={12}>
                    <ProductInfoTabs />
                    <CompareTable />

                </Col>
            </Row>
        </Container>
    );
}
