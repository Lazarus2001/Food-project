import classes from './Cart.module.css'
import CartModal from '../UI/CartModal'
import CartContext from '../../store/cart-context';
import CartItems from './CartItems';
import { useContext } from 'react';
const Cart = props=>
{


    const cartCtx =  useContext(CartContext)
    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`
    const itemsIsValid = cartCtx.items.length > 0;

    const cartItemRemoveHandler = ()=>
    {

    }
    const cartItemAddHandler = ()=>
    {

    }

    const cartItems = (
        <ul className={classes['cart-items']}>
            {cartCtx.items.map((item) => (
                <CartItems key = {item.id} 
                name={item.name}
                 amount = {item.amount}
                  price = {item.price}
                  onAdd={cartItemAddHandler}
                    onRemove={cartItemRemoveHandler} />
            ))}
        </ul>
    );

    return (
        <CartModal onClose={props.onHide}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div> 
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick = {props.onHide}>Close</button>
                {itemsIsValid && <button className={classes.button}>Order</button>}
            </div>
        </CartModal>
    );
};



export default Cart