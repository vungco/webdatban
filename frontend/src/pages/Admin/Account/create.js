import React, { useEffect, useState } from "react";
import userApi from "../../../api/userApi";

const CreateForm = ({ setisShowFormCreate,GetUsers }) => {
    const [name,setname] = useState('');
    const [email,setemail] = useState('');
    const [password,setpassword] = useState('');
    const [role,setrole] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            name,
            email,
            password,
            role,
        }
        userApi.create(data)
        .then(response=>{
            alert('bạn đã thêm người dùng thành công');
            GetUsers();
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
                        <label className="form-label">Tên</label>
                        <input
                            type="text"
                            className="form-control"
                            value={name}
                            onChange={(e) => setname(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            value={email}
                            onChange={(e) => setemail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Mật khẩu</label>
                        <input
                            type="text"
                            className="form-control"
                            value={password}
                            onChange={(e) => setpassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Vai trò</label>
                        <select
                        onChange={(e)=>setrole(e.target.value)}
                        style={{width:'100%',height:'30px',border:'1px solid black'}}
                        >
                            <option hidden>Ấn để chọn</option>
                            <option value={'user'}>user</option>
                            <option value={'admin'}>admin</option>
                        </select>
                        {/* <input
                            type="text"
                            className="form-control"
                            value={role}
                            onChange={(e) => setrole(e.target.value)}
                            required
                        /> */}
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