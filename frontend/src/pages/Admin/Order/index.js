import React, { useEffect, useState } from "react";
import orderApi from '../../../api/orderApi'
import CreateForm from "./create";
import EditForm from "./edit";
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { formatNumber } from "../../../components/utils/format_number";

function Order() {
    const navigate = useNavigate();
    const {BookingID,CustomerID} = useParams();
    
    const [Orders, setOrders] = useState(null);
    const [isShowFormCreate, setisShowFormCreate] = useState(false);
    const [isShowFormEdit, setisShowFormEdit] = useState(false);

    useEffect(()=>{
        GetOrders();
    },[])

    function GetOrders(){
        orderApi.getAllOfBooking(BookingID)
        .then(response=>{
            setOrders(response.data);
        })
        .catch(error=>{
            console.error('có lỗi trong quá trình lấy dl: '+error);
        })
    }

    function Deleteorder(id){
        let getconfirm = window.confirm('bạn có thực sự muốn xóa đơn hàng này không ?');
        if(getconfirm){
            orderApi.delete(id)
            .then(response=>{
                alert('bạn đã xóa đơn hàng thành công');
                GetOrders();
            })
            .catch(error=>{
                console.error('có lỗi trong quá trình xóa dl: '+error);
            })
        }
    }

    const handleToOrderDetail = (OrderID) => {
        navigate(`/Admin/Order_detail/${OrderID}`); // Chuyển đến trang Pay
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
                    GetOrders={GetOrders}
                    BookingID={BookingID}
                    CustomerID={CustomerID}
                    />
                    :
                    ''
                    }
            </div>
            <table className="table table-bordered table-hover">
                <thead className="table-dark">
                    <tr>
                        <th>Ngày tạo đơn hàng</th>
                        <th>Giảm giá</th>
                        <th>Tổng tiền:</th>                        
            
                        <th>Hành động</th>
                        <th>Đơn hàng chi tiết</th>
                    </tr>
                </thead>
                <tbody>
                    {Orders?.map((order) => (
                        <tr 
                        key={order.OrderID}
                        >
                            <td>{order.OrderDate}</td>
                            <td>{order.promotion?.Discount==null?'0':order.promotion.Discount}</td>
                            <td>{formatNumber(order.TotalAmount)}</td>
                            <td>
                                <button
                                    className="btn btn-warning btn-sm me-2"
                                    onClick={() => setisShowFormEdit(order)}
                                >
                                    <i className="fa fa-edit"></i> Sửa
                                </button>
                                {isShowFormEdit.OrderID ==order.OrderID ?
                                <EditForm
                                setisShowFormEdit={setisShowFormEdit}
                                GetOrders={GetOrders}
                                data={{ OrderDate: order.OrderDate,
                                     TotalAmount: order.TotalAmount,
                                     BookingID,CustomerID,
                                     PromotionID: order.promotion.PromotionID,
                                     Discount: order.promotion.Discount,
                                    }}
                                id={order.OrderID}
                                />
                                :
                                ''
                                }
                                <button
                                    className="btn btn-danger btn-sm"
                                    onClick={() => Deleteorder(order.OrderID)}
                                >
                                    <i className="fa fa-trash"></i> Xóa
                                </button>
                            </td>
                            <td><i className="fa-solid fa-eye" onClick={()=>handleToOrderDetail(order.OrderID)} /></td>

                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Order