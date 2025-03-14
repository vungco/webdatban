import order_detailApi from "../../../api/order_detailApi";
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { apiUrl } from "../../../config";

function OrderDetail(){
    const [order_details,setorder_details] = useState(null);
    const OrderID = useParams().OrderID;

    useEffect(()=>{
        order_detailApi.getAllOfOrder(OrderID)
            .then(response=>{
                setorder_details(response.data)
            })
            .catch(error=>{
                console.error('có lỗi trong quá trình lấy dl: '+error)
            })
    },[])

    const getImagePath = (productImg) => {
                try {
                  return `${apiUrl}/uploads/Categories/${productImg}`;
                } catch (error) {
                  console.error('Error loading image:', error);
                  return null; // Hoặc có thể trả về một hình ảnh mặc định
                }
              };

    return (
        <div className='container-fluid w-100' style={{ background: '#10302c', padding: '80px 0 0 0' }}>
            <div className='container-fluid p-0' style={{ height: '50px', background: '#000' }}>
                <div className='container h-100 d-flex align-items-center'>
                    <p className='m-0' style={{ color: '#fff' }}>Trang chủ / </p>
                    <p className='m-0' style={{ color: '#d69c52' }}>  Các lượt đặt bàn của tôi</p>
                </div>
            </div>
            <div className='container order'>
                <div className='container  pb-3 mt-5'>
                    <table className="w-100 " style={{
                    }}>
                        <thead>
                            <tr style={{ background: '#135b50', color: 'white' }}>
                                <th scope="col">Ảnh món ăn</th>
                                <th scope="col">Tên món ăn</th>
                                <th scope="col">Đơn giá</th>
                                <th scope="col">Số lượng</th>
                            </tr>
                        </thead>
                        <tbody>
                            {order_details?.map(order_detail=>(
                                <tr style={{ background: '#135b50', color: 'white' }}>

                                <td>
                                    <img style={{ width: '108px' }} src={getImagePath(order_detail.menu_item.ImageURL)} />
                                </td>
                                <td>{order_detail.menu_item.Name}</td>
                                <td>{order_detail.Price}</td>
                                <td>{order_detail.Quantity}</td>
                                </tr>
                            ))}
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default OrderDetail