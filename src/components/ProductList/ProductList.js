import React from "react";
import ProductItem from '../ProductItem/ProductItem'
function ProductList() {
    return (
        <div className='panel panel-primary'>
            <div className='panel-heading'>
                <h3 className='panel-title'>Danh sach san phan</h3>
            </div>
            <div className='panel-body'>
                <table className='table table-bordered table-hover'>
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Mã</th>
                            <th>Tên</th>
                            <th>Giá</th>
                            <th>Trạng thái</th>
                            <th>Hành động</th>
                        </tr>
                    </thead>
                    <ProductItem></ProductItem>
                    <ProductItem></ProductItem>
                   
                </table>
            </div>
        </div>
    )
}
export default ProductList;