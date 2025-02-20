import React, { useEffect, useState } from "react";
import customerApi from "../../../api/customerApi";
import userApi from "../../../api/userApi";

const CreateForm = ({ setisShowFormCreate,GetCustomers }) => {
    const [FullName,setFullName] = useState('');
    const [PhoneNumber,setPhoneNumber] = useState('');
    const [Address,setAddress] = useState('');
    const [User_id,setUser_id] = useState('');
    const [Users,setUsers] = useState(null);

    useEffect(()=>{
        userApi.getAll()
        .then(response=>{
            setUsers(response.data);
        })
        .catch(error=>{
            console.error('có lỗi trong quá trình lấy dl: '+error);
        })
    },[])

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            FullName,
            PhoneNumber,
            Address,
            UserID:User_id,
        }
        customerApi.create(data)
        .then(response=>{
            alert('bạn đã thêm khách hàng thành công');
            GetCustomers();
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
                        <label className="form-label">Họ và Tên</label>
                        <input
                            type="text"
                            className="form-control"
                            value={FullName}
                            onChange={(e) => setFullName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Số điện thoại</label>
                        <input
                            type="text"
                            className="form-control"
                            value={PhoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Địa chỉ</label>
                        <input
                            type="text"
                            className="form-control"
                            value={Address}
                            onChange={(e) => setAddress(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Thuộc tài khoản: </label>
                        <select
                        onChange={(e)=>setUser_id(e.target.value)}
                        style={{width:'100%',height:'30px',border:'1px solid black'}}
                        >
                            <option hidden>Ấn để chọn</option>
                            {Users?.map((user)=>(
                                user?.customer || user.name =='admin' ?''
                                :
                                <option value={user.id}>{user.name}</option>
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