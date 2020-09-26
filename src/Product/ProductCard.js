import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Checkbox from "@material-ui/core/Checkbox";
import "./Product.css";
import {Link} from "react-router-dom";
import {connect, useDispatch} from "react-redux";
import {checkProduct, uncheckProduct} from "../actions/compareProducts";

const images = require.context('../images/', true);

function handleChangeCheck(props,dispatch, event){
    //TODO: dispatch action to redux to add/remove product from compare Set
    if (event.target.checked) {
        dispatch(checkProduct(props.product));
    } else {
        dispatch(uncheckProduct(props.product));
    }
}

function ProductCard(props){
        let img = images("./fan1.png");

        if(props.imageSrc){
            img = images('./' + props.imageSrc + ".png");
        }

        console.log("props.product->"+ (props));
        const dispatch = useDispatch()
        return (
            <Card className="card-root">
                <CardActionArea>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Verified Date: {props.verifiedDate}
                    </Typography>
                    <CardMedia
                        className="media-height"
                        image={img}
                        title={props.name}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2" className={"card-name"}>
                            <nav >
                                <Link to="/productinfo/:id"> {props.name} </Link>
                            </nav>

                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p" className={"tsPec"}>
                            {props.techSpec}
                        </Typography>
                        <Typography variant="body2" color="error" component="p" className={"psPec"}>
                            {props.pastSpec}
                        </Typography>

                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Checkbox
                        color="primary"
                        inputProps={{ 'aria-label': 'secondary checkbox' }}
                        onChange={(e) => handleChangeCheck(props,dispatch,  e)}
                    />Compare

                </CardActions>
            </Card>
        );
}

function mapStateToProps(state){
    const compareProducts  = state.CompareProducts;
    console.log("mapStateToProps: ----> ");
    console.log(state);
    console.log(state.CompareProducts);
    console.log(compareProducts.compareSet);
    return {
        compareSet: compareProducts.compareSet
    }
}
export default connect(mapStateToProps, {checkProduct, uncheckProduct})(ProductCard);



