import React from "react";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button"
import "./Product.css"
import userImagePath from "../images/user.png";
import jooleLogoImagePath from "../images/joole_logo.png";
import ProductTab from "./ProductTab";
import ProductAccordion from "./ProductAccordion";
import ProductSlider from "./ProductSlider";
import ProductCard from "./ProductCard";
import {Link} from "react-router-dom";
import {TableRow} from "@material-ui/core";
import TableHead from "@material-ui/core/TableHead";

let generateRows = (col,data) => {
    switch (col){
        case "Manufacturer":
            return data.map(c=> <td>{c.Manufacturer}</td> )
            break;
        case "Series":
            return data.map(c=> <td>{c.Series}</td> )
            break;
        case "Model":
            return data.map(c=> <td>{c.Model}</td> )
            break;
        case "Use Type":
            return data.map(c=> <td>{c.UseType}</td> )
            break;
        case "Mounting Location":
            return data.map(c=> <td>{c.MountingLocation}</td> )
            break;
        case "Accessories":
            return data.map(c=> <td>{c.Accessories}</td> )
            break;
        case "Model Year":
            return data.map(c=> <td>{c.ModelYear}</td> )
            break;
        case "Airflow (CFM)":
            return data.map(c=> <td>{c.AirflowCFM}</td> )
            break;
        case "Power (W)":
            return data.map(c=> <td>{c.PowerW}</td> )
            break;
        case "Operating voltage (VAC)":
            return data.map(c=> <td>{c.OperatingVoltageVAC}</td> )
            break;
        case "Fan speed (RPM)":
            return data.map(c=> <td>{c.FanSpeedRPM}</td> )
            break;
        default :
            return data.map(c=> <td>N/A</td> )
            break;
    }
}
export default function CompareTable(props){
    console.log(props);

    //let columns = [...props.columns];
    //let data = [...props.data];
    ///* {columns.map(col =><tr><th>{col}</th>{generateRows(col,data)}</tr> )}*/
    return(
        <div>
            <table >
                <tr><h5>{props.title}</h5></tr>

            </table>
        </div>
    );
}
