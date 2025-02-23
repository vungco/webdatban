import React, { useEffect, useState } from "react";
import customerApi from "../../../api/customerApi";
import table_bookingApi from "../../../api/table_bookingApi";

const CreateForm = ({ setisShowFormCreate,GetTable_bookings }) => {
    const [CustomerID,setCustomerID] = useState('');
    const [BookingTime,setBookingTime] = useState('');
    const [Status,setStatus] = useState('');
    const [Customers,setCustomers] = useState();

    useEffect(()=>{
        customerApi.getAll()
        .then(response=>{
            setCustomers(response.data);
        })
        .catch(error=>{
            console.error('có lỗi trong quá trình lấy dl: '+error);
        })
    },[])

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            CustomerID,
            BookingTime,
            Status,
        }
        table_bookingApi.create(data)
        .then(response=>{
            alert('bạn đã thêm lượt đặt thành công');
            GetTable_bookings();
            setisShowFormCreate(false);
        })
        .catch(error=>{
            console.error('có lỗi trong quá trình lấy dl: '+error);
        })
    };


    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h4>{"Thêm dữ liệu"}</h4>
                <form onSubmit={handleSubmit}>
                <div className="mb-3">
                        <label className="form-label">Tên khách hàng: </label>
                        <select
                        onChange={(e)=>setCustomerID(e.target.value)}
                        style={{width:'100%',height:'30px',border:'1px solid black'}}
                        >
                            <option hidden>Ấn để chọn</option>
                            {Customers?.map((customer)=>(
                                <option value={customer.CustomerID}>{customer.FullName}</option>
                            ))}
                        </select>
            
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Thời gian đặt bàn</label>
                        <input
                            type="time"
                            className="form-control"
                            value={BookingTime}
                            onChange={(e) => setBookingTime(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Trạng thái</label>
                        <select
                        onChange={(e)=>setStatus(e.target.value)}
                        style={{width:'100%',height:'30px',border:'1px solid black'}}
                        >
                            <option hidden>Ấn để chọn</option>
                            
                                <option value={0}>chưa xác nhận</option>
                                <option value={1}>đã xác nhận</option>
                            
                        </select>
                    </div>
                    
                    <button type="submit" className="btn btn-success me-2">Lưu</button>
                    <button type="button" className="btn btn-secondary" 
                    onClick={()=>{setisShowFormCreate(false)}}
                    >
                        Hủy
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CreateForm