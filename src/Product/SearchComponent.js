import Button from "@material-ui/core/Button";
import React from "react";
import Searcher from "./ProductSearch";
import ProductService from "../services/product.service";

export class SearchComponent extends React.Component {

    constructor(props) {
        super(props);
        console.log(props);
        this.handleSearchClick = this.handleSearchClick.bind(this);
        this.handleOnChangeQuery = this.handleOnChangeQuery.bind(this);
        this.handleChangeCategory = this.handleChangeCategory.bind(this);
        this.state = {
            query: "",
            category: "Mechanical",
            loading: false,
        };
    }

    handleChangeCategory =(e)=>{
        this.setState({
            category: e.target.value,
        });
    }

    handleSearchClick =()=>{

        this.setState({
            loading: true,
        });

        const { history } = this.props;


        if (this.state.category && this.state.query) {
            ProductService.getProductsByCategory(this.state.category, this.state.query)
                .then((response) => {
                    history.push("/product");
                    window.location.reload();
                })
                .catch(() => {
                    this.setState({
                        loading: false
                    });
                });
        } else {
            this.setState({
                loading: false,
            });
        }
    }

    handleOnChangeQuery = (e)=>{

        this.setState({
            query: e.target.value,
        });

    }

    render() {

        return (
            <div>
                <select onChange={this.handleChangeCategory} value={this.state.category}>
                    <option>Mechanical</option>
                    <option>Electrical</option>
                </select>
                <input type="text" placeholder="search..." onChange={this.handleOnChangeQuery}/>
                <Button onClick={this.handleSearchClick}>Search</Button>
            </div>
        );
    }

}
export default SearchComponent;
