import React from 'react'
import Product from '../product/Product';
import {ProductInterface, ProductListInterface} from "../../interfaces/Interfaces";
import style from "./ProductsList.module.css";

function ProductsList({list}: ProductListInterface) {
    return (
        <div className={style.body}>
            {list.map((product : ProductInterface) => (
                <Product key={product.id} id={product.id} price={product.price} image={product.image} description={product.description} name={product.name} />
            ))}
        </div>
    )
}

export default ProductsList;