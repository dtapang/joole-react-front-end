import ProductCard from "./ProductCard";
import React from "react";

let MainBody  = props =>{

    if(!props.products)
        return "N/A";
    let {...products} = props.products;

    let productsArray = [];

    products = eval(products);

    for (let key in products) {
        if (products.hasOwnProperty(key)) {
            productsArray.push(products[key]);
        }
    }

    products = productsArray;

    let count = 0;

       return(
           <div className={"product-list-view container-fluid"}>

               {products.map(p =>

                   <ProductCard
                       key={count++}
                       product={p}
                       imageSrc={p.imageSrc}
                       name={count +" "+ p.manufacturer +"\n"+ p.series +"\n"+ p.model}
                       verifiedDate={p.vDate}
                       techSpec={p.airflow +" CFM, \n"+p.fanSpeedMax+" W at max speed, \n "+p.maxSpeedSound+" dBA at max speed, \n"+p.diameter+" ” fan sweep diameter"}
                       pastSpec={"Past specifications:"+"\n"+
                       "Firm "+p.firm+"/ Global"+ p.global}/>
                   )}

           </div>
       );

}
export default  MainBody;
