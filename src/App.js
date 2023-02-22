import React, {useState, useEffect} from 'react';
import ProductsList from './pages/products';
import ShoppingCart from './components/shopping-cart';
import {Context} from './context';

export default function App() {
  const [productDataList, setProductDataList] = useState([]);

  return (
      <div className="bg-white">
        <div className="mx-auto container py-16 px-4 sm:py-24 sm:px-6 ">
          <div className="flex">
            <ProductsList productDataList={productDataList} setProductDataList={setProductDataList}/>
            <Context.Provider value={productDataList}>
              <ShoppingCart />
            </Context.Provider>
            {/* <ShoppingCart productDataList={productDataList}/> */}
          </div>
        </div>
      </div>
  )
}
