import Button from "@material-ui/core/Button";
import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";

import SearchComponent from "./SearchComponent";

export class Searcher extends React.Component{

    constructor(props) {
        super(props);
        console.log(props);
    }

    render() {
        return(
            <div>
                <Navbar />
                <Header />
                <SearchComponent {...this.props} />
            </div>
        );
    }
}
export default Searcher;

