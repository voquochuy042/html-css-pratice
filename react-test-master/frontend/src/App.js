import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import CockTailPage from './Components/CockTail/CockTailPage';
import Cart from './Components/Cart/Cart';
import { useEffect, useState } from 'react';
import axios from "axios";
import { CartContext } from './Context/CartContext';
function App() {
  const [cockTails, setCockTails] = useState([]);
  const [myCart, addToCart] = useState([{}]);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    async function getData() {
      const res = await axios.get("/v1/cocktails");
      return res;
    }
    getData().then((res) => setCockTails(res.data))
    getData().catch((err) => console.log(err))
    console.log(cockTails)
  }, [])

  return (
    <CartContext.Provider value={{ myCart, addToCart, total, setTotal }}>
      <div className="App">
        <Router>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/cocktails' element={<CockTailPage listBeverage={cockTails} />}></Route>
            <Route path='/checkout' element={<Cart />}></Route>
          </Routes>

        </Router>
      </div>
    </CartContext.Provider>
  );
}

export default App;
