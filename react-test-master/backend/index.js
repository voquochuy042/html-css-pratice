const express = require("express")
const app = express()

const cocktails = [
    {
        idDrink: 1,
        name: "Blueberry Mojito",
        price: "20",
        thumb: "https://www.thecocktaildb.com/images/media/drink/07iep51598719977.jpg"
    },
    {
        idDrink: 2,
        name: "Mocha-Berry",
        price: "17",
        thumb: "https://www.thecocktaildb.com/images/media/drink/vtwyyx1441246448.jpg"
    },
    {
        idDrink: 3,
        name: "Gin Lemon",
        price: "23",
        thumb: "https://www.thecocktaildb.com/images/media/drink/6gdohq1681212476.jpg"
    },
    {
        idDrink: 4,
        name: "Pure Passion",
        price: "20.9",
        thumb: "https://www.thecocktaildb.com/images/media/drink/4tymma1604179273.jpg"
    },
    {
        idDrink: 5,
        name: "Lemon Drop",
        price: "18.8",
        thumb: "https://www.thecocktaildb.com/images/media/drink/mtpxgk1504373297.jpg"
    },
    {
        idDrink: 6,
        name: "Sweet Bananas",
        price: "20.9",
        thumb: "https://www.thecocktaildb.com/images/media/drink/sxpcj71487603345.jpg"
    },
    {
        idDrink: 7,
        name: "Mojito",
        price: "19.99",
        thumb: "https://www.thecocktaildb.com/images/media/drink/metwgh1606770327.jpg"
    },
    {
        idDrink: 8,
        name: "Margarita",
        price: "20",
        thumb: "https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg"
    }
];
app.get("/v1/cocktails", (req, res) => {
    res.status(200).json(cocktails);
})
app.listen("8080", () => {
    console.log("sever's running")
})