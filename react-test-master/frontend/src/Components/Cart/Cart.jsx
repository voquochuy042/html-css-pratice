import NavBar from "../Nav-bar/NavBar";
import { CartContext } from "../../Context/CartContext";
import { useContext } from "react";
import './cart.css'
const Cart = () => {
    const { myCart } = useContext(CartContext);
    const { total } = useContext(CartContext);
    return (
        <>
            <NavBar />
            <section className="cart-container">
                <div className="cart-header">
                    CHECK OUT: ${total}
                </div>
                <div className="cart-item">
                    {myCart.slice(1).map((item) => {
                        return (
                            <div className="cart-items">
                                <img src={item.thumb} className="cart-item-img" alt="" />
                                {item.name}:{item.price}
                            </div>
                        )
                    })}
                </div>
            </section>
        </>);
}

export default Cart;