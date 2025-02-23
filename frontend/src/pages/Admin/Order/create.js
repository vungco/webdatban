import React, { useEffect, useState } from "react";
import orderApi from "../../../api/orderApi";
import promotionApi from "../../../api/promotionApi";
import format_date from "../../../components/utils/format_date";

const CreateForm = ({ setisShowFormCreate,GetOrders,BookingID,CustomerID }) => {
    const [OrderDate,setOrderDate] = useState('');
    const [TotalAmount,setTotalAmount] = useState(0);
    const [PromotionID,setPromotionID] = useState();
    const [Promotions,setPromotions] = useState();

    useEffect(()=>{
        promotionApi.getAll()
        .then(response=>{
            setPromotions(response.data);
        })
        .catch(error=>{
            console.error('có lỗi trong quá trình lấy dl: '+error);
        })
    },[])

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            BookingID,
            CustomerID,
            PromotionID,
            OrderDate,
            TotalAmount,
        }
        orderApi.create(data)
        .then(response=>{
            alert('bạn đã thêm đơn hàng thành công');
            GetOrders();
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
                        <label className="form-label">Ngày tạo đơn hàng: </label>
                        <input
                            type="time"
                            className="form-control"
                            value={OrderDate}
                            onChange={(e) => setOrderDate(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Tổng tiền đơn hàng</label>
                        <input
                            type="text"
                            className="form-control"
                            value={TotalAmount}
                            onChange={(e) => setTotalAmount(e.target.value)}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Giảm giá: </label>
                        <select
                        onChange={(e)=>setPromotionID(e.target.value)}
                        style={{width:'100%',height:'30px',border:'1px solid black'}}
                        >
                            <option hidden>Ấn để chọn</option>
                            {Promotions?.map((promotion)=>(
                                <option value={promotion.PromotionID}>{promotion.Discount}</option>
                            ))}
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