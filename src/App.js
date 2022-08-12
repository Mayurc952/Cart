import React,{useState, useEffect} from 'react'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";
import {Provider} from 'react-redux';
import store from './store/store';


const priceData = [{id:0, value:"Choose A Range:"},{id:1, value:10},{id:2, value:50},{id:3, value:100},{id:4, value:500},{id:5, value:900}]

function App() {
  const[filterdata,SetFilterdata]=useState([]);
  const [product, setProduct] = useState([]);


  useEffect(() => {
    const fetchP = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      console.log(data);
      setProduct(data);
    };

    fetchP();
  }, []);

  const handleFilter= (e)=>{

    console.log(e, "eeee");
    const filterProduct=  product.filter((item)=>item.price <= e)
    SetFilterdata(filterProduct)
  }

const showProduct = filterdata.length === 0 ? product : filterdata


  return (
    <div className="App">
      <Provider store={store}>
      <Router>
        <Navbar priceData={priceData} handleFilter={handleFilter} />
        <Routes>
          <Route path="/" element={<Home product={product} filterdata={showProduct} handleFilter={handleFilter}/>}></Route>
          <Route path="/cart" element={<Cart />}></Route>

        </Routes>
      </Router>
      </Provider>
    </div>
  );
}

export default App;
