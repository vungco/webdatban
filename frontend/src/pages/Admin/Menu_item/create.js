import React, { useEffect, useState } from "react";
import menu_itemApi from "../../../api/menu_itemApi";
import menu_categoryApi from "../../../api/menu_categoryApi";
import axios from 'axios';


const CreateForm = ({ setisShowFormCreate,GetMenu_items }) => {
    const [CategoryID,setCategoryID] = useState('');
    const [Name,setName] = useState('');
    const [Description,setDescription] = useState('');
    const [Price,setPrice] = useState('');
    const [File,setFile] = useState('');
    const [Status,setStatus] = useState('');
    const [Menu_categorys,setMenu_categorys] = useState();
    

    useEffect(()=>{
        menu_categoryApi.getAll()
        .then(response=>{
            setMenu_categorys(response.data);
        })
        .catch(error=>{
            console.error('có lỗi trong quá trình lấy dl: '+error);
        })
    },[])

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(File);
        let formdata = new FormData();
        // Append dữ liệu sản phẩm
        formdata.append("CategoryID", CategoryID);
        formdata.append("Name", Name);
        formdata.append("Description", Description);
        formdata.append("Price", Price);
        formdata.append("Status", Status);

        formdata.append("img", File);

        // Laravel cần `_method=PUT` khi gửi bằng formdata
        // formdata.append("_method", "PUT");
        
        const token = localStorage.getItem("token"); // Hoặc lấy từ Redux, Context API...

    axios.post("http://localhost:8000/api/menu_items", formdata, 
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,  // Thêm token vào header
        },
      })
        .then(response=>{
            alert('bạn đã thêm sản phẩm thành công');
            GetMenu_items();
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
                        <label className="form-label">Nhóm : </label>
                        <select
                        onChange={(e)=>setCategoryID(e.target.value)}
                        style={{width:'100%',height:'30px',border:'1px solid black'}}
                        >
                            <option hidden>Ấn để chọn</option>
                            {Menu_categorys?.map((menu_category)=>(
                                
                                <option value={menu_category.CategoryID}>{menu_category.CategoryName}</option>
                            ))}
                        </select>
            
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Tên sản phẩm</label>
                        <input
                            type="text"
                            className="form-control"
                            value={Name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Mô tả sản phẩm</label>
                        <input
                            type="text"
                            className="form-control"
                            value={Description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Giá sản phẩm</label>
                        <input
                            type="text"
                            className="form-control"
                            value={Price}
                            onChange={(e) => setPrice(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Ảnh sản phẩm</label>
                        <input
                            type="file"
                            name="img"
                            className="form-control"
                            // value={Price}
                            onChange={(e) => setFile(e.target.files[0])}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Trạng thái sản phẩm</label>
                        <input
                            type="text"
                            className="form-control"
                            value={Status}
                            onChange={(e) => setStatus(e.target.value)}
                            required
                        />
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