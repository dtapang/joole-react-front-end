import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import "./Product.css";

const useStyles = makeStyles({
    root: {
        width: "100%",
    },
});

function valuetext(value) {
    return `${value}`;
}

export default function ProductSlider(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState([10, 7000]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
        props.onchange(value[0], props.KeyL);
        props.onchange(value[1], props.keyH);
    };

    return (
        <div className={classes.root}>
            <Typography id="range-slider" gutterBottom>
                {props.filterField}
            </Typography>
            <span className={"accordion-content-span"}>
                <input size={2} value={value[0]} onChange={(event)=>props.onchange(event.target.value, props.KeyL)}/>
                <Slider
                    value={value}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    aria-labelledby="range-slider"
                    getAriaValueText={valuetext}
                />
                <input size={2}  value={value[1]} onChange={(event)=>props.onchange(event.target.value,props.keyH)}/>
            </span>
        </div>
    );
}
