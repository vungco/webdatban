import React, { useEffect, useState } from "react";
import tableApi from "../../../api/tableApi";
import promotionApi from "../../../api/promotionApi";

const EditForm = ({ setisShowFormEdit,GetTables,data,id }) => {
    const [TableNumber,setTableNumber] = useState('');
    const [Capacity,setCapacity] = useState('');
    const [Status,setStatus] = useState('');

    useEffect(()=>{
        setTableNumber(data.TableNumber);
        setCapacity(data.Capacity);
        setStatus(data.Status);
    },[])

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            TableNumber,
            Capacity,
            Status,
        }
        tableApi.update(id,data)
        .then(response=>{
            alert('bạn đã sua ban thành công');
            GetTables();
            setisShowFormEdit(false);
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
                        <label className="form-label">Tên bàn: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={TableNumber}
                            onChange={(e) => setTableNumber(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Kích thước</label>
                        <input
                            type="text"
                            className="form-control"
                            value={Capacity}
                            onChange={(e) => setCapacity(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Trạng thái: </label>
                        <select
                        onChange={(e)=>setStatus(e.target.value)}
                        style={{width:'100%',height:'30px',border:'1px solid black'}}
                        >
                            <option hidden>{Status==0?'còn bàn':'đã đặt'}</option>
                            
                                <option value={0}>còn bàn</option>
                                <option value={1}>đã đặt</option>
                            
                        </select>
            
                    </div>
                    
                    <button type="submit" className="btn btn-success me-2">Lưu</button>
                    <button type="button" className="btn btn-secondary" 
                    onClick={()=>{setisShowFormEdit(false)}}
                    >
                        Hủy
                    </button>
                </form>
            </div>
        </div>
    );
};

export default EditForm