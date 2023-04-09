import React from 'react';
import styles from './Product.module.css'
import defaultBurger from './assets/default-burger.jpeg';
import {ProductInterface} from "../../interfaces/Interfaces";
import AddToCart from "../../cart/addToCart/AddToCart";

function Product({id, image, name, description, price}: ProductInterface) {
    return (
        <div className={styles.card}>
            <img src={defaultBurger} className={styles.card__image} alt=""/>
            <div className={styles.card__overlay}>
                <div className={styles.card__header}>
                    <div className={styles.card__header__text}>
                        <div className={styles.card__title}>
                            <h3 className={styles.card__title}>{name}</h3>
                            <span className={styles.card__price}>{price} €</span>
                        </div>
                    </div>
                </div>
                <p className={styles.card__description}>
                    {description}
                </p>
                <AddToCart name={name} price={price} id={id} description={description} image={image}/>
            </div>
        </div>
    );
}


export default Product;