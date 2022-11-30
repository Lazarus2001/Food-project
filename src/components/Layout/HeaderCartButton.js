import React,{useContext} from "react";
import CartIcon from "../Cart/CartIcon";
import classes from './HeaderButton.module.css'
import CartContext from "../../store/cart-context";

const HeaderCartButton = props=>
{
    const cartCtx = useContext(CartContext)

    const  numberOfItemsInCart = cartCtx.items.reduce((curNum,items)=>{
        return curNum + items.amount
    },0)
    return(
        <button className={classes.button} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon/>
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>
                {numberOfItemsInCart}
            </span>
        </button>
    )
}

export default HeaderCartButton