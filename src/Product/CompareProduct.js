import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CompareTable from "./CompareTable";
import ProductHeaderBar from "./ProductHeaderBar";
import {connect} from "react-redux";
import {checkProduct, uncheckProduct} from "../actions/compareProducts";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    paperColumn: {
        padding: theme.spacing(1),
        textAlign: 'left',
        color: theme.palette.text.secondary,
    },
}));

let products = {"products":[
                    {
                        "Manufacturer": "Big Ass",
                        "Series": "Haiku H",
                        "Model": "S3150-S0-BC-04-01-C-01",
                        "UseType": "Commercial",
                        "Application": "Indoor",
                        "MountingLocation": "Roof",
                        "Accessories": "With light",
                        "ModelYear": "2016",
                        "AirflowCFM": "5,467",
                        "PowerW": "Min 1.95 Max 21.14",
                        "OperatingVoltageVAC": "Min 100 Max 240",
                        "FanSpeedRPM": "Min 35 Max 200",
                        "imageSrc":"fan1",
                        "vDate":new Date("08/21/2016").toLocaleDateString()
                    },
                    {
                        "Manufacturer": "Emerson",
                        "Series": "Luray Eco",
                        "Model": "CF860",
                        "UseType": "Commercial",
                        "Application": "Indoor",
                        "MountingLocation": "Roof",
                        "Accessories": "With light",
                        "ModelYear": "2014",
                        "AirflowCFM": "8,500",
                        "PowerW": "Min 2.85 Max 33.00",
                        "OperatingVoltageVAC": "Min 100 Max 240",
                        "FanSpeedRPM": "Min 46 Max 240",
                        "imageSrc":"fan2",
                        "vDate":new Date("08/21/2016").toLocaleDateString()
                    },
                    {
                        "Manufacturer": "Minka",
                        "Series": "Aviation",
                        "Model": "F853-RW",
                        "UseType": "Commercial",
                        "Application": "Indoor",
                        "MountingLocation": "Roof",
                        "Accessories": "With light",
                        "ModelYear": "2015",
                        "AirflowCFM": "6,604",
                        "PowerW": "Min 3.69 Max 25.92",
                        "OperatingVoltageVAC": "Min 100 Max 240",
                        "FanSpeedRPM": "Min 60 Max 240",
                        "imageSrc":"fan3",
                        "vDate":new Date("08/21/2016").toLocaleDateString()
                    }
                ]}

products = Array.from(products.products);
//console.log(products);

function CompareProduct(props){

    let DESCRIPTION_COLS = ["Manufacturer","Series","Model"];

    let TYPE_COLS = ["Use Type","Mounting Location","Accessories","Model Year"];

    let TECH_SPEC_COLS = ["Airflow (CFM)","Power (W)","Operating voltage (VAC)","Fan speed (RPM)"];

    console.log(...props.compareSet);///launch compareProduct with selected products

    return (
        <Container className={"page-background"} fluid>
            <Row>
                <Col xs={12} sm={12}> <ProductHeaderBar /> </Col>
            </Row>
            <Row>
                <Col xs={12} sm={12}> Bread crumbs </Col>
            </Row>
            <Row>
                <Col xs={12} sm={12}><NestedGrid products={props.compareSet} /> </Col>
            </Row>
        </Container>
    );
}

/*
*
*  <CompareTable title={"DESCRIPTION"} columns={DESCRIPTION_COLS} data={products}/>
* <CompareTable title={"TYPE"} columns={TYPE_COLS} data={products}/>
* <CompareTable title={"TECHNICAL SPECIFICATIONS"} columns={TECH_SPEC_COLS} data={products}/>
*
* */
const images = require.context('../images/', true);


function FormRowImg(props) {
    const classes = useStyles();
    let img = images("./fan1.png");
    if(props.imageSrc){
        img = images('./' + props.products[0].imageSrc + ".png");
    }
    return (
        <React.Fragment>
            <Grid item xs={3}>
                _
            </Grid>
            {props.products.map((p) => (
                <Grid item xs={3}>
                    <Paper className={classes.paper}>
                        <img src={images('./' + p.imageSrc + ".png")}/>
                    </Paper>
                </Grid>
            ))}
        </React.Fragment>
    );
}

function FormRowDesc(props) {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Grid item xs={3}>
                <Paper className={classes.paperColumn}>Description</Paper>
                <Paper className={classes.paperColumn}>Manufacturer</Paper>
                <Paper className={classes.paperColumn}>Model</Paper>
                <Paper className={classes.paperColumn}>Series</Paper>
            </Grid>


            {props.products.map((p) => (
                <Grid item xs={3}>
                    <Paper className={classes.paper}> _ </Paper>
                    <Paper className={classes.paper}>{p.manufacturer}</Paper>
                    <Paper className={classes.paper}>{p.model}</Paper>
                    <Paper className={classes.paper}>{p.series}</Paper>
                </Grid>

            ))}

        </React.Fragment>
    );
}
function FormRowType(props) {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Grid item xs={3}>
                <Paper className={classes.paperColumn}>Type</Paper>
                <Paper className={classes.paperColumn}>Use Type</Paper>
                <Paper className={classes.paperColumn}>Accessories</Paper>
                <Paper className={classes.paperColumn}>Model Year</Paper>
            </Grid>


            {props.products.map((p) => (
                <Grid item xs={3}>
                    <Paper className={classes.paper}> _ </Paper>
                    <Paper className={classes.paper}>{p.uType}</Paper>
                    <Paper className={classes.paper}>{p.accessories}</Paper>
                    <Paper className={classes.paper}>{p.modelYear}</Paper>
                </Grid>

            ))}

        </React.Fragment>
    );
}
function FormRowSpec(props) {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Grid item xs={3}>
                <Paper className={classes.paperColumn}>Technical Specifications</Paper>
                <Paper className={classes.paperColumn}>Airflow</Paper>
                <Paper className={classes.paperColumn}>Power</Paper>
            </Grid>

            {props.products.map((p) => (
                <Grid item xs={3}>
                    <Paper className={classes.paper}> _ </Paper>
                    <Paper className={classes.paper}>{p.airflow}</Paper>
                    <Paper className={classes.paper}>{p.powerMin + " MIN "+ p.powerMax + " MAX "}</Paper>

                </Grid>

            ))}
        </React.Fragment>
    );
}



function NestedGrid(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={1}>
                <Grid container item xs={12} spacing={0}>
                    <FormRowImg products={props.products}/>
                </Grid>
                <Grid container item xs={12} spacing={0}>
                    <FormRowDesc products={props.products} />
                </Grid>
                <Grid container item xs={12} spacing={0}>
                    <FormRowType products={props.products} />
                </Grid>
                <Grid container item xs={12} spacing={0}>
                    <FormRowSpec products={props.products} />
                </Grid>
            </Grid>
        </div>
    );
}

function mapStateToProps(state){

    const compareProducts  = state.CompareProducts;
    console.log("CompareProduct ----> ");
    console.log(state);
    console.log(state.CompareProducts);
    console.log(compareProducts.compareSet);

    return {
        compareSet: compareProducts.compareSet
    }
}
export default connect(mapStateToProps)(CompareProduct);

