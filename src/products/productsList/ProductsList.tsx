import React from 'react'
import Product from '../product/Product';
import {ProductInterface, ProductListInterface} from "../../interfaces/Interfaces";
import style from "./ProductsList.module.css";
import {Fragment} from "react";

function ProductsList({list}: ProductListInterface) {
    return (
        <Fragment>
            <div className={style.body}>
                {list.map((product : ProductInterface) => (
                    <Product key={product.id} id={product.id} price={product.price} image={product.image} description={product.description} name={product.name} />
                ))}
            </div>
        </Fragment>
    )
}

export default ProductsList;