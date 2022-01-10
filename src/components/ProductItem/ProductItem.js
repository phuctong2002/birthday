import React from "react";
function ProductItem() {
    return (
        <tbody>
            <tr>
                <td>1</td>
                <td>1</td>
                <td>Iphone</td>
                <td>500</td>
                <td>Còn hàng</td>
                <td>
                    <button type='button' className='mr-10 btn btn-success'>
                        Sửa
                    </button>
                    <button type='button' className='btn btn-danger'>
                        Xóa
                    </button>
                </td>
            </tr>
        </tbody>
    )
}
export default ProductItem;