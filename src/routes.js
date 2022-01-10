import React from "react";
import HomePage from "./pages/HomePage/HomePage";
// import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
// cau hinhf router tuong ung nhe anh
import ProductListPage from "./pages/ProductListPage/ProductListPage";
const routesArr =[
    {
        path:"/",
        exact : true,
        main : function(){
            return <HomePage></HomePage>;
        } 
    },
    {
        path:"/pages/ProductListPage/ProductListPage",
        exact: false,
        main: function(){
            return <ProductListPage></ProductListPage>;
        }
    }
];
export default routesArr;