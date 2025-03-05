import React, { useEffect, useState } from "react";
import order_detailApi from '../../../api/order_detailApi'
import CreateForm from "./create";
import EditForm from "./edit";
import { useParams } from 'react-router-dom';
import { apiUrl } from "../../../config";
import { formatNumber } from "../../../components/utils/format_number";

function Order_detail() {
    const {OrderID} = useParams();
    
    const [Order_details, setOrder_details] = useState(null);
    const [isShowFormCreate, setisShowFormCreate] = useState(false);
    const [isShowFormEdit, setisShowFormEdit] = useState(false);

    useEffect(()=>{
        GetOrder_details();
    },[])

    function GetOrder_details(){
        order_detailApi.getAllOfOrder(OrderID)
        .then(response=>{
            setOrder_details(response.data);
        })
        .catch(error=>{
            console.error('có lỗi trong quá trình lấy dl: '+error);
        })
    }

    function Deleteorder(id){
        let getconfirm = window.confirm('bạn có thực sự muốn xóa các đơn hàng chi tiết này không ?');
        if(getconfirm){
            order_detailApi.delete(id)
            .then(response=>{
                alert('bạn đã xóa đơn hàng thành công');
                GetOrder_details();
            })
            .catch(error=>{
                console.error('có lỗi trong quá trình xóa dl: '+error);
            })
        }
    }

    const getImagePath = (productImg) => {
            try {
              return `${apiUrl}/uploads/Categories/${productImg}`;
            } catch (error) {
              console.error('Error loading image:', error);
              return null; // Hoặc có thể trả về một hình ảnh mặc định
            }
          };
    
    return (
        
        <div className="container mt-3 ">
            <div className="d-flex justify-content-between mb-3">
                <button className="btn btn-primary" 
                onClick={()=>setisShowFormCreate(true)}
                >
                    <i className="fa fa-plus"></i> Thêm
                </button>
                    {isShowFormCreate?
                    <CreateForm
                    setisShowFormCreate={setisShowFormCreate}
                    GetOrder_details={GetOrder_details}
                    OrderID={OrderID}
                    />
                    :
                    ''
                    }
            </div>
            <table className="table table-bordered table-hover">
                <thead className="table-dark">
                    <tr>
                        <th>Ảnh sản phẩm</th>
                        <th>Tên sản phẩm</th>
                        <th>Đơn giá</th>
                        <th>Số lượng</th>
                        <th>Thành tiền:</th>                        
            
                        {/* <th>Hành động</th> */}
                    </tr>
                </thead>
                <tbody>
                    {Order_details?.map((order_detail) => (
                        <tr 
                        key={order_detail.MenuItemID}
                        >
                            <td>
                                <img style={{width:'180px'}} src={getImagePath(order_detail.menu_item?.ImageURL)} alt="Product Image"/>
                            </td>
                            <td>{order_detail.menu_item?.Name}</td>
                            <td>{formatNumber(order_detail.menu_item?.Price)}</td>
                            <td>{order_detail.Quantity}</td>
                            <td>{formatNumber(order_detail.Price)}</td>
                            {/* <td>
                                <button
                                    className="btn btn-danger btn-sm"
                                    onClick={() => Deleteorder(order_detail.OrderID)}
                                >
                                    <i className="fa fa-trash"></i> Xóa
                                </button>
                            </td> */}
                            
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Order_detail