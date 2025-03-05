import React, { useEffect, useState } from "react";
import promotionApi from '../../../api/promotionApi'
import CreateForm from "./create";
import EditForm from "./edit";
import { formatNumber } from "../../../components/utils/format_number";

function Promotion() {
    const [Promotions, setPromotions] = useState(null);
    const [isShowFormCreate, setisShowFormCreate] = useState(false);
    const [isShowFormEdit, setisShowFormEdit] = useState(false);

    useEffect(()=>{
        GetPromotions();
    },[])

    function GetPromotions(){
        promotionApi.getAllOfAdmin()
        .then(response=>{
            setPromotions(response.data);
        })
        .catch(error=>{
            console.error('có lỗi trong quá trình lấy dl: '+error);
        })
    }

    function Deletepromotion(id){
        let getconfirm = window.confirm('bạn có thực sự muốn xóa mã giảm giá này không ?');
        if(getconfirm){
            promotionApi.delete(id)
            .then(response=>{
                alert('bạn đã xóa mã giảm giá thành công');
                GetPromotions();
                
            })
            .catch(error=>{
                console.error('có lỗi trong quá trình xóa dl: '+error);
            })
        }
    }
    
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
                    GetPromotions={GetPromotions}
                    />
                    :
                    ''
                    }
            </div>
            <table className="table table-bordered table-hover">
                <thead className="table-dark">
                    <tr>
                        <th>Tiêu đề</th>
                        <th>Mô tả</th>
                        <th>Giảm giá:</th>                        
                        <th>Ngày bắt đầu</th>
                        <th>Ngày kết thúc</th>
                        <th>Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    {Promotions?.map((promotion) => (
                        <tr 
                        key={promotion.PromotionID}
                        >
                            <td>{promotion.Title}</td>
                            <td>
                                {promotion.Description}
                            </td>
                            <td>{formatNumber(promotion.Discount)}</td>
                            <td>{promotion.StartDate}</td>
                            <td>{promotion.EndDate}</td>
                            <td>
                                <button
                                    className="btn btn-warning btn-sm me-2"
                                    onClick={() => setisShowFormEdit(promotion)}
                                >
                                    <i className="fa fa-edit"></i> Sửa
                                </button>
                                {isShowFormEdit.PromotionID ==promotion.PromotionID ?
                                <EditForm
                                setisShowFormEdit={setisShowFormEdit}
                                GetPromotions={GetPromotions}
                                data={{ Title: promotion.Title,
                                     Description: promotion.Description, 
                                     Discount: promotion.Discount, 
                                     StartDate : promotion.StartDate,
                                     EndDate : promotion.EndDate
                                    }}
                                id={promotion.PromotionID}
                                />
                                :
                                ''
                                }
                                <button
                                    className="btn btn-danger btn-sm"
                                    onClick={() => Deletepromotion(promotion.PromotionID)}
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

export default Promotion