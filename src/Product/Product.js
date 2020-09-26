import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Product.css"
import ProductHeaderBar from "./ProductHeaderBar";
import ProductService from "../services/product.service";
import Menu from "./ProductMenu";
import MainBody from "./ProductMainBody";
import {clearCompareSet} from "../actions/compareProducts";
import store from "../store";

export default class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: null,
            modelYearL: null,
            modelYearH: null,
            manufacturer:null,
            series:   null,
            model:   null,
            vDate: null,
            uType: null,
            application: null,
            mLocation: null,
            accessories: null,
            AirflowL: null,
            AirflowH: null,
            powerMin: null,
            powerMax: null,
            oVoltageMinH: null,
            oVoltageMinL: null,
            fanSpeedMaxH: null,
            fanSpeedMaxL: null,
            firmH: null,
            firmL: null,
            globalH: null,
            globalL: null,
            FanSpeedsH: null,
            FanSpeedsL: null,
            maxSpeedSoundH: null,
            maxSpeedSoundL: null,
            diameterH: null,
            diameterL: null,
            weightH: null,
            weightL: null,
            heightMin: null,
            heightMax: null
        };
        this.LoadProducts();
        this.handleChangeValue = this.handleChangeValue.bind(this);
        this.applySearchFilters = this.applySearchFilters.bind(this);

    }

    componentDidMount() {
        //Clear selected components from redux store
        const { dispatch } = this.props;
        store.dispatch(clearCompareSet());

    }

    LoadProducts() {
        ProductService.getAllProducts().then(
            response => {

                let {...products} = response.data;

                let productsArray = [];

                products = eval(products);

                for (let key in products) {
                    if (products.hasOwnProperty(key)) {
                        productsArray.push(products[key]);
                    }
                }
                this.setState({
                    content: productsArray,
                    filteredContent: productsArray
                });
            },
            error => {
                console.error(error);
            }
        );
    }

    handleChangeValue = (value, property) => {
        console.log("property : " + property);
        console.log("value : " + value);
        this.setState(({
            [property]: value ,
            filteredContent: this.applySearchFilters()
        }));
    }

    applySearchFilters =() =>{
        let {...products} = this.state.content;

        let productsArray = [];

        products = eval(products);

        for (let key in products) {
            if (products.hasOwnProperty(key)) {
                    productsArray.push(products[key]);
            }
        }

        let productFilter = productsArray;
        if(this.state.modelYearL)
            productFilter = productFilter.filter((p) => parseInt(p.modelYear) >= parseInt(this.state.modelYearL));
        if(this.state.modelYearH)
            productFilter = productFilter.filter((p) => parseInt(p.modelYear) <= parseInt(this.state.modelYearH));
        if(this.state.AirflowL)
            productFilter = productFilter.filter((p) => parseInt(p.Airflow) >= parseInt(this.state.AirflowL));
        if(this.state.AirflowH)
            productFilter = productFilter.filter((p) => parseInt(p.Airflow) <= parseInt(this.state.AirflowH));

        if(this.state.powerMax)
            productFilter = productFilter.filter((p) => parseInt(p.powerMax) <= parseInt(this.state.powerMax));
        if(this.state.powerMin)
            productFilter = productFilter.filter((p) => parseInt(p.powerMin) >= parseInt(this.state.powerMin));
        if(this.state.maxSpeedSoundH)
            productFilter = productFilter.filter((p) => parseInt(p.maxSpeedSound) <= parseInt(this.state.maxSpeedSoundH));
        if(this.state.maxSpeedSoundL)
            productFilter = productFilter.filter((p) => parseInt(p.maxSpeedSound) >= parseInt(this.state.maxSpeedSoundL));

        if(this.state.diameterH)
            productFilter = productFilter.filter((p) => parseInt(p.diameter) <= parseInt(this.state.diameterH));
        if(this.state.diameterL)
            productFilter = productFilter.filter((p) => parseInt(p.diameter) >= parseInt(this.state.diameterL));

        if(this.state.heightMax)
            productFilter = productFilter.filter((p) => parseInt(p.height) <= parseInt(this.state.heightMax));
        if(this.state.heightMin)
            productFilter = productFilter.filter((p) => parseInt(p.heightc) >= parseInt(this.state.heightMin));


        console.log("Apply Filter");
        console.log(productFilter);
        return productFilter;
    }

    render() {
        return (
            <Container className={"page-background"} fluid>
                <Row>
                    <Col xs={12} sm={12}> <ProductHeaderBar /> </Col>
                </Row>
                <Row>
                    <Col sm={3}> <Menu onchange={this.handleChangeValue} /> </Col>
                    <Col sm={9}>  <MainBody products={this.state.filteredContent}/> </Col>
                </Row>
            </Container>
        );
    }
}
