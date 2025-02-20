import React, { useEffect, useState } from "react";
import userApi from "../../../api/userApi";

const EditForm = ({ setisShowFormEdit,GetUsers,data,id }) => {
    const [name,setname] = useState('');
    const [email,setemail] = useState('');
    const [password,setpassword] = useState('');
    const [role,setrole] = useState('');

    useEffect(()=>{
        setname(data.name);
        setemail(data.email);
        setrole(data.role);
    },[])

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            name,
            email,
            role,
        }
        if(password.length>0){
            data.password=password;
        }
        userApi.update(id,data)
        .then(response=>{
            alert('bạn đã sửa người dùng thành công');
            GetUsers();
            setisShowFormEdit(false);
        })
        .catch(error=>{
            console.error('có lỗi trong quá trình sửa dl: '+error);
        })
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h4>{"Sửa dữ liệu"}</h4>
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
                            placeholder="Nhập vào đây nếu bạn muốn đổi mật khẩu mới"
                            minLength={6}
                            value={password}
                            onChange={(e) => setpassword(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Vai trò</label>
                        <select
                        onChange={(e)=>setrole(e.target.value)}
                        style={{width:'100%',height:'30px',border:'1px solid black'}}
                        value={role}
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