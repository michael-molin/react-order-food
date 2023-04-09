import React,{useContext} from "react";
import styles from "../../products/product/Product.module.css";
import {ProductInterface} from "../../interfaces/Interfaces";
import DispatchContext from "../../store/dispatch-context";

function AddToCart({name, image, description, price, id} : ProductInterface) {
    const dispatch = useContext(DispatchContext);

    const onClickHandler: any = () => {
        const product : ProductInterface ={
            name : name,
            image : image,
            description: description,
            price : price,
            id : id
        }
        dispatch({type: 'ADD_TO_CART', product})
    };

    return (
        <button className={styles.button} onClick={onClickHandler}>
            Add to Cart
        </button>
    )
}

export default AddToCart;