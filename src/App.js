import React from 'react';
import { Route, Routes} from 'react-router-dom';
import './App.css'
import routesArr from './routes';
import Menu from './components/Menu/Menu';



// import { useState } from "react";
// import HomePage from './pages/HomePage/HomePage';
// import ProductItem from './components/ProductItem/ProductItem'
// import ProductList from './components/ProductList/ProductList';
// import ProductListPage from './pages/ProductListPage/ProductListPage';



function App() {
    console.log("render trong app.js");
    return (
        <>
            
            <Menu>
            </Menu>
            <Routes>
                {routesArr.map(function (el, index) {
                    return (
                        <Route path={el.path} key={index}  element={el.main()} exact={el.exact} />
                    )
                })}
            </Routes>
            {/* <ProductList>
            </ProductList> */}
        </>
    )
}
export default App;
