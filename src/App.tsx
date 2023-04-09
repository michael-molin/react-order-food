import React, {useState, useEffect} from 'react';
import './App.css';
import CategorySelection from "./products/CategorySelection";
import ProductsList from "./products/productsList/ProductsList";
import Header from "./header/Header";
import CartProvider from "./store/CartProvider";
import {ProductListInterface} from "./interfaces/Interfaces";
import {productsList} from "./variables/productList";

function App() {
  const [category, setCategory] = useState('noList');
  const [listToShow, setListToShow] = useState <ProductListInterface> (
      {
        title: '',
        id: '',
        image: '',
        list: []
      }
  );

  useEffect( () => {
    productsList.forEach((listElement ) => {
      if(listElement.title === category) {
        setListToShow(listElement);
      }
    });

  }, [category]);
  const selectedCategory = (selectedCategory : string) => {
    setCategory(selectedCategory)
  }

  const returnToMenu = <div className="Return-main-menu">
      <a href="javascript:void(0);" onClick={ () =>selectedCategory('noList')}>Return to Main Menu</a>
  </div>

  return (
    <div className="App">
      <CartProvider>
        <Header />
          {category !== 'noList' && returnToMenu}
        <div className="App-body">
          {category === 'noList' && productsList.map(product => (
              <CategorySelection key={product.id} title={product.title} image={product.image} handlerClick={selectedCategory} />
          ))}
            {category !== 'noList' && <ProductsList id={listToShow?.id} image={listToShow.image} list={listToShow.list} title={listToShow.title}/>}
        </div>
      </CartProvider>
    </div>
  );
}

export default App;
