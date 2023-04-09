import React ,{Fragment} from "react";
import styles from './Header.module.css';
import CartTotal from "../cart/cartTotal/CartTotal";
function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.header_element}>Logo</div>
            <div>
                <strong>Header</strong>
            </div>
            <div>
                <CartTotal />
            </div>
        </div>
    )
}

export default Header;