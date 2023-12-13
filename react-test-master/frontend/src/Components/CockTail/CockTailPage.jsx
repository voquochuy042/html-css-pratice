import NavBar from "../Nav-bar/NavBar";
import CockTailCard from "./CockTailCard"
import './cockTailPage.css'
const CockTailPage = (props) => {
    const { listBeverage } = props;
    return (
        <>
            <NavBar />
            <div className="cocktail-list">{listBeverage.map((item) => {
                return (
                    <CockTailCard
                        key={item.idDrink}
                        id={item.idDrink}
                        name={item.name}
                        price={item.price}
                        thumb={item.thumb}
                    />
                )
            })}</div>
        </>
    );
}

export default CockTailPage;