import React, { useEffect, useState } from "react";
import order_detailApi from "../../../api/order_detailApi";
import orderApi from "../../../api/orderApi";
import menu_itemApi from "../../../api/menu_itemApi";

const CreateForm = ({ setisShowFormCreate,GetOrder_details,OrderID }) => {
    const [MenuItemID,setMenuItemID] = useState();
    const [Quantity,setQuantity] = useState(1);
    const [Price,setPrice] = useState();
    const [SlectPrice,setSlectPrice] = useState(null);
    const [MenuItems,setMenuItems] = useState();

    useEffect(()=>{
        menu_itemApi.getAll()
        .then(response=>{
            setMenuItems(response.data);
        })
        .catch(error=>{
            console.error('có lỗi trong quá trình lấy dl: '+error);
        })
    },[])

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            OrderID,
            MenuItemID,
            Quantity,
            Price,
        }
        order_detailApi.create(data)
        .then(response=>{
            alert('bạn đã thêm đơn hàng chi tiết thành công');
            HandleUpdatePriceOfOrder();
        })
        .catch(error=>{
            console.error('có lỗi trong quá trình lấy dl: '+error);
        })
    };

    function HandleSelectMenuItem(value){
        let parValue = JSON.parse(value);
        setMenuItemID(parValue.MenuItemID);
        setSlectPrice(parValue.Price);
    }

    useEffect(()=>{
        if(SlectPrice!==null){
            setPrice(Quantity*SlectPrice);
        }
    },[SlectPrice,Quantity])

    function HandleUpdatePriceOfOrder(){
        orderApi.updateTotalAmount(OrderID)
        .then(response=>{
            GetOrder_details();
            setisShowFormCreate(false);
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
                        <label className="form-label">Tên sản phẩm: </label>
                        <select
                        onChange={(e)=>HandleSelectMenuItem(e.target.value)}
                        style={{width:'100%',height:'30px',border:'1px solid black'}}
                        >
                            <option hidden>Ấn để chọn</option>
                            {MenuItems?.map((menu_item)=>(
                                <option value={JSON.stringify(menu_item)}>{menu_item.Name}</option>
                            ))}
                        </select>
            
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Số lượng</label>
                        <input
                            type="number"
                            className="form-control"
                            min='1'
                            value={Quantity}
                            onChange={(e) => setQuantity(e.target.value)}
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