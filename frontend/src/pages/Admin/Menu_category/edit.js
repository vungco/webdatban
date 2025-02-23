import React, { useEffect, useState } from "react";
import menu_categoryApi from "../../../api/menu_categoryApi";
import promotionApi from "../../../api/promotionApi";

const EditForm = ({ setisShowFormEdit,GetMenu_categorys,data,id }) => {
    const [CategoryName,setCategoryName] = useState('');
    

    useEffect(()=>{
        setCategoryName(data.CategoryName);
        
    },[])

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            CategoryName,
            
        }
        menu_categoryApi.update(id,data)
        .then(response=>{
            alert('bạn đã sua nhóm thành công');
            GetMenu_categorys();
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
                        <label className="form-label">Tên nhóm: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={CategoryName}
                            onChange={(e) => setCategoryName(e.target.value)}
                            required
                        />
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