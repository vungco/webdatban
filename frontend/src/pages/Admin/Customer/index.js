import React, { useEffect, useState } from "react";
import customerApi from '../../../api/customerApi'
import CreateForm from "./create";
import EditForm from "./edit";

function Customer() {
    const [Customers, setCustomers] = useState(null);
    const [isShowFormCreate, setisShowFormCreate] = useState(false);
    const [isShowFormEdit, setisShowFormEdit] = useState(false);

    useEffect(()=>{
        GetCustomers();
    },[])

    function GetCustomers(){
        customerApi.getAll()
        .then(response=>{
            setCustomers(response.data);
        })
        .catch(error=>{
            console.error('có lỗi trong quá trình lấy dl: '+error);
        })
    }

    function Deletecustomer(id){
        let getconfirm = window.confirm('bạn có thực sự muốn xóa khách hàng này không ?');
        if(getconfirm){
            customerApi.delete(id)
            .then(response=>{
                alert('bạn đã xóa người dùng thành công');
                GetCustomers();
                
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
                    GetCustomers={GetCustomers}
                    />
                    :
                    ''
                    }
            </div>
            <table className="table table-bordered table-hover">
                <thead className="table-dark">
                    <tr>
                        <th>Tên khách hàng</th>
                        <th>Tên tài khoản</th>
                        <th>Số điện thoại</th>                        
                        <th>Địa chỉ</th>
                        <th>Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    {Customers?.map((customer) => (
                        <tr 
                        key={customer.CustomerID}
                        >
                            <td>{customer.FullName}</td>
                            <td>{customer.user.name}</td>
                            <td>{customer.PhoneNumber}</td>
                            <td>{customer.Address}</td>
                            <td>
                                <button
                                    className="btn btn-warning btn-sm me-2"
                                    onClick={() => setisShowFormEdit(customer)}
                                >
                                    <i className="fa fa-edit"></i> Sửa
                                </button>
                                {isShowFormEdit.CustomerID ==customer.CustomerID ?
                                <EditForm
                                setisShowFormEdit={setisShowFormEdit}
                                GetCustomers={GetCustomers}
                                data={{ FullName: customer.FullName,
                                     PhoneNumber: customer.PhoneNumber, 
                                     Address: customer.Address, 
                                     UserID: customer.UserID
                                    }}
                                id={customer.CustomerID}
                                />
                                :
                                ''
                                }
                                <button
                                    className="btn btn-danger btn-sm"
                                    onClick={() => Deletecustomer(customer.CustomerID)}
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

export default Customer