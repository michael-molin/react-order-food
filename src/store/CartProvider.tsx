import React, {useReducer} from "react";
import CartContext from "./cart-context";
import DispatchContext from "./dispatch-context";
import {ProductInterface} from "../interfaces/Interfaces";
import {cartReducer} from "../reducer/cartReducer";

const defaultCartState : any = {
    products: [] as ProductInterface[],
    total: 0
}

const CartProvider = (props : any) => {
    const [cartState, dispatch] = useReducer(cartReducer, defaultCartState)
    return (
        <DispatchContext.Provider value={dispatch}>
            <CartContext.Provider value={cartState}>
                {props.children}
            </CartContext.Provider>
        </DispatchContext.Provider>
    )}

export default CartProvider;
