import React, { useEffect, useState } from "react";
import table_bookingApi from '../../../api/table_bookingApi'
import CreateForm from "./create";
import EditForm from "./edit";
import { useNavigate } from 'react-router-dom';

function Table_booking() {
    const navigate = useNavigate();
    const [Table_bookings, setTable_bookings] = useState(null);
    const [isShowFormCreate, setisShowFormCreate] = useState(false);
    const [isShowFormEdit, setisShowFormEdit] = useState(false);

    useEffect(()=>{
        GetTable_bookings();
    },[])

    function GetTable_bookings(){
        table_bookingApi.getAll()
        .then(response=>{
            setTable_bookings(response.data);
        })
        .catch(error=>{
            console.error('có lỗi trong quá trình lấy dl: '+error);
        })
    }

    function Deletetable_booking(id){
        let getconfirm = window.confirm('bạn có thực sự muốn xóa khách hàng này không ?');
        if(getconfirm){
            table_bookingApi.delete(id)
            .then(response=>{
                alert('bạn đã xóa người dùng thành công');
                GetTable_bookings();
                
            })
            .catch(error=>{
                console.error('có lỗi trong quá trình xóa dl: '+error);
            })
        }
    }

    const handleToOrder = (BookingID,CustomerID) => {
        navigate(`/Admin/Order/${BookingID}/${CustomerID}`); // Chuyển đến trang Pay
    };

    const handleToTable = (BookingID,CustomerID) => {
        navigate(`/Admin/Booking_table/${BookingID}/${CustomerID}`); // Chuyển đến trang Pay
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
                    GetTable_bookings={GetTable_bookings}
                    />
                    :
                    ''
                    }
            </div>
            <table className="table table-bordered table-hover">
                <thead className="table-dark">
                    <tr>
                        <th>Tên khách hàng</th>
                        <th>Thời gian đặt</th>
                        <th>Trạng thái</th>                        

                        <th>Hành động</th>
                        <th>Đơn hàng</th>
                        <th>Bàn</th>
                    </tr>
                </thead>
                <tbody>
                    {Table_bookings?.map((table_booking) => (
                        <tr 
                        key={table_booking.BookingID}
                        >
                            <td>{table_booking.customer?.FullName}</td>
                            <td>{table_booking.BookingTime}</td>
                            <td>{table_booking.Status==0?'chưa tốt':'đã xong'}</td>
                            <td>
                                <button
                                    className="btn btn-warning btn-sm me-2"
                                    onClick={() => setisShowFormEdit(table_booking)}
                                >
                                    <i className="fa fa-edit"></i> Sửa
                                </button>
                                {isShowFormEdit.BookingID ==table_booking.BookingID ?
                                <EditForm
                                setisShowFormEdit={setisShowFormEdit}
                                GetTable_bookings={GetTable_bookings}
                                data={{ FullName: table_booking.customer?.FullName,
                                     CustomerID: table_booking.CustomerID, 
                                     BookingTime: table_booking.BookingTime, 
                                     Status: table_booking.Status
                                    }}
                                id={table_booking.BookingID}
                                />
                                :
                                ''
                                }
                                <button
                                    className="btn btn-danger btn-sm"
                                    onClick={() => Deletetable_booking(table_booking.BookingID)}
                                >
                                    <i className="fa fa-trash"></i> Xóa
                                </button>
                            </td>
                            <td><i className="fa-solid fa-eye" onClick={()=>handleToOrder(table_booking.BookingID,table_booking.CustomerID)} /></td>
                            <td><i className="fa-solid fa-eye" onClick={()=>handleToTable(table_booking.BookingID,table_booking.CustomerID)} /></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Table_booking