import React, { useEffect, useState } from "react";
import booking_tableApi from "../../../api/booking_tableApi";
import tableApi from "../../../api/tableApi";
import format_date from "../../../components/utils/format_date";

const CreateForm = ({ setisShowFormCreate,GetBooking_tables,BookingID }) => {
    const [TableID,setTableID] = useState('');
    const [Tables,setTables] = useState();
    

    useEffect(()=>{
        tableApi.getAll()
        .then(response=>{
            setTables(response.data);
        })
        .catch(error=>{
            console.error('có lỗi trong quá trình lấy dl: '+error);
        })
    },[])

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            BookingID,
            TableID,
        }
        booking_tableApi.create(data)
        .then(response=>{
            alert('bạn đã thêm mã giảm giá thành công');
            setStatusOfTable();
            GetBooking_tables();
            setisShowFormCreate(false);
        })
        .catch(error=>{
            console.error('có lỗi trong quá trình lấy dl: '+error);
        })
    };

    function setStatusOfTable(){
        tableApi.setStatus(TableID)
        .then(response=>{
            
        })
        .catch(error=>{
            console.error('có lỗi trong quá trình lấy dl: '+error);
        })
    }

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h4>{"Thêm dữ liệu"}</h4>
                <form onSubmit={handleSubmit}>
                <div className="mb-3">
                        <label className="form-label">Chọn bàn: </label>
                        <select
                        onChange={(e)=>setTableID(e.target.value)}
                        style={{width:'100%',height:'30px',border:'1px solid black'}}
                        >
                            <option hidden>Ấn để chọn</option>
                            {Tables?.map((table)=>(
                                table.Status==0?
                                <option value={table.TableID}>{table.TableNumber}</option>
                                :''
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