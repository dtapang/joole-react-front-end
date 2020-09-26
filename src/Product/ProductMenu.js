import ProductSlider from "./ProductSlider";
import Button from "react-bootstrap/Button";
import ProductTab from "./ProductTab";
import ProductAccordion from "./ProductAccordion";
import React from "react";
import {Link} from "react-router-dom";

let handleCompareClick = () =>{
    //TODO: get compare set from store

    //TODO: pass compare set to compare Product component

    //TODO: launch compare component -> CompareProduct

    window.location.assign('product/compare/');
}

let handleClearClick = () => {
    //TODO: dispatch action to switch clear flag in global redux state
}

export default function Menu(props){
    let ptContent = <span>Model Year: <input size={4} onChange={(event)=>props.onchange(event.target.value,"modelYearL")}/>-<input size={4} onChange={(event)=>props.onchange(event.target.value,"modelYearH")}/></span>;

    let filters = [
        {

            labelText:"Airflow (CFM)",
            keyH: "AirflowH",
            keyL: "AirflowL"
        },
        {
            labelText:"Max power (W)",
            keyH: "powerMax",
            keyL: "powerMin"
        },
        {
            labelText:"Sound at max speed (dBA)",
            keyH: "maxSpeedSoundH",
            keyL: "maxSpeedSoundL"
        },
        {
            labelText:"Fan sweep diameter (in)",
            keyH: "diameterH",
            keyL: "diameterL"
        },
        {
            labelText:"Height (in)",
            keyH: "heightMax",
            keyL: "heightMin"
        }
    ];

    let tsContentChild = filters.map(
        filter =>
            <div key={filter.keyH}>
                <ProductSlider keyH={filter.keyH} KeyL={filter.keyL} onchange={props.onchange} filterField={filter.labelText} key={filter.labelText}/>
            </div>);

    let tsContent = <span>{tsContentChild}</span>;

    let sections = {"sections":[
            {"name":"Product Type", "content":ptContent},
            {"name":"Technical Specifications", "content":tsContent},
            {"name":"Brand", "content":"Brand Search"},
            {"name":"Past Selections", "content":"Past Selections"},
            {"name":"Certifications", "content":"Certifications"}
        ]}

    return(
        <div>
            <div>
                <Button onClick={handleClearClick}>Clear</Button>

                <nav className="navbar-link">
                    <Link to={`/product/compare/`}>
                        <Button type="button">
                            Compare
                        </Button>
                    </Link>
                </nav>
            </div>
            <div>
                <ProductTab  children={<ProductAccordion  accordionSections={sections}/>}/>
            </div>

        </div>
    );
}
