import React, {useContext} from "react";
import style from "./CartTotal.module.css";
import cartContext from "../../store/cart-context";

function CartTotal() {
    const ctx = useContext(cartContext)
    let cartItems = 0;
    let total = 0;
    if(ctx !== null) {
        cartItems = ctx.products.length
        total = ctx.total
    }
    return (
        <div className={style.cartHeader}>
            <div className={style.cartInfo}>
                Items: {cartItems} <br />
                Total Price: {total} €
            </div>
        </div>
    )
}

export default CartTotal;