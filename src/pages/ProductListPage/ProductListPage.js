import React, {useEffect} from 'react';
import ProductList from '../../components/ProductList/ProductList';
import ProductItem from '../../components/ProductItem/ProductItem';


function ProductListPage(){
    console.log("ProductListPage render");
    useEffect(()=>{
        return ()=>{
            console.log("ProductListPage unmount")
        }    
    })
    return (
        <ProductList>
            <ProductItem />
        </ProductList>
    )
}
export default ProductListPage;