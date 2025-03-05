import React, { useEffect, useState } from "react";
import menu_itemApi from '../../../api/menu_itemApi'
import CreateForm from "./create";
import EditForm from "./edit";
import { apiUrl } from "../../../config";
import {formatNumber} from "../../../components/utils/format_number";
 

function Menu_item() {
    const [Menu_items, setMenu_items] = useState(null);
    const [isShowFormCreate, setisShowFormCreate] = useState(false);
    const [isShowFormEdit, setisShowFormEdit] = useState(false);

    useEffect(()=>{
        GetMenu_items();
    },[])

    function GetMenu_items(){
        menu_itemApi.getAll()
        .then(response=>{
            setMenu_items(response.data);
            console.log(response.data);
        })
        .catch(error=>{
            console.error('có lỗi trong quá trình lấy dl: '+error);
        })
    }

    function Deletemenu_item(id){
        let getconfirm = window.confirm('bạn có thực sự muốn xóa món ăn này không ?');
        if(getconfirm){
            menu_itemApi.delete(id)
            .then(response=>{
                alert('bạn đã xóa món ăn thành công');
                GetMenu_items();
                
            })
            .catch(error=>{
                console.error('có lỗi trong quá trình xóa dl: '+error);
            })
        }
    }

    const getImagePath = (productImg) => {
        try {
          return `${apiUrl}/uploads/Categories/${productImg}`;
        } catch (error) {
          console.error('Error loading image:', error);
          return null; // Hoặc có thể trả về một hình ảnh mặc định
        }
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
                    GetMenu_items={GetMenu_items}
                    />
                    :
                    ''
                    }
            </div>
            <table className="table table-bordered table-hover">
                <thead className="table-dark">
                    <tr>
                        <th>Tên nhóm</th>
                        <th>Tên món ăn</th>
                        <th>Mô tả</th>                        
                        <th>Giá</th>
                        <th>Ảnh món ăn</th>
                        <th>Trạng thái</th>
                        <th>Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    {Menu_items?.map((menu_item) => (
                        <tr 
                        key={menu_item.MenuItemID}
                        >
                            <td>{menu_item.menu_category?.CategoryName}</td>
                            <td>{menu_item.Name}</td>
                            <td>{menu_item.Description}</td>
                            <td>{formatNumber(menu_item.Price)}</td>
                            <td>
                                <img style={{width:'180px'}} src={getImagePath(menu_item.ImageURL)} alt="Product Image"/>
                            </td>
                            <td>{menu_item.Status}</td>
                            <td>
                                <button
                                    className="btn btn-warning btn-sm me-2"
                                    onClick={() => setisShowFormEdit(menu_item)}
                                >
                                    <i className="fa fa-edit"></i> Sửa
                                </button>
                                {isShowFormEdit.MenuItemID ==menu_item.MenuItemID ?
                                <EditForm
                                setisShowFormEdit={setisShowFormEdit}
                                GetMenu_items={GetMenu_items}
                                data={{ CategoryID: menu_item.menu_category.CategoryID,
                                    CategoryName: menu_item.menu_category.CategoryName, 
                                    Name: menu_item.Name, 
                                    Description: menu_item.Description,
                                    Price: menu_item.Price,
                                    Status: menu_item.Status,
                                    }}
                                id={menu_item.MenuItemID}
                                />
                                :
                                ''
                                }
                                <button
                                    className="btn btn-danger btn-sm"
                                    onClick={() => Deletemenu_item(menu_item.MenuItemID)}
                                >
                                    <i className="fa fa-trash"></i> Xóa
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Menu_item