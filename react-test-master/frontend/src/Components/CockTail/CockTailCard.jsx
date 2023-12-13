import { useContext, useState } from 'react';
import './cocktailCard.css'
import { CartContext } from '../../Context/CartContext';
const CockTailPage = (props) => {
    const { id, name, price, thumb } = props;
    const [isAdd, setIsAddToCard] = useState(false);
    const { addToCart } = useContext(CartContext);
    const { total, setTotal } = useContext(CartContext);
    const btnAddToCardHandler = () => {
        setIsAddToCard(true);
        const newItems = {
            name,
            price,
            thumb
        }
        addToCart((item) => [...item, newItems]);
        setTotal((total) => (total += parseFloat(price)))
    }
    return (
        <>
            <section className="cocktails" key={id}>
                <div className="cocktails-img-container">
                    <img className="cocktail-img" src={thumb} alt="" />
                </div>
                <div className="cocktails-info">
                    <p className="cocktail-name">{name}</p>
                    <p className="cocktail-price">${price}</p>
                </div>
                <button className={isAdd ? 'btn-added' : 'btn-add'} onClick={btnAddToCardHandler}>{!isAdd ? 'ADD TO CARD' : 'ADDED'}</button>
            </section>
        </>
    );
}

export default CockTailPage;