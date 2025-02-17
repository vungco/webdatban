import React, { useState,useEffect } from 'react';
import userApi from "../../../api/userApi";
import customerApi from "../../../api/customerApi";
import authUser from '../../../api/authUser';
import AddCustomer from './addCustomer';
import EditCustomer from './editCustomer';


function PersonalIn4() {
    const [selectedTab, setSelectedTab] = useState("info1");
    const [isEditing, setIsEditing] = useState(false);
    const [name, setName] = useState(false);
    const [email, setEmail] = useState(false);

    const [fullName, setFullName] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState(false);
    const [address, setAddress] = useState(false);
    const [user_id, setUser_id] = useState(null);
    const [CustomerID, setCustomerID] = useState(null);

    const [isFormVisibleAdd, setIsFormVisibleAdd] = useState(false);
    const [isFormVisibleEdit, setIsFormVisibleEdit] = useState(false);

    // Mở modal chỉnh sửa
    const handleAddClick = () => setIsFormVisibleAdd(true);

    // Đóng modal
    const handleCloseModalAdd = () => setIsFormVisibleAdd(false);

    // Mở modal chỉnh sửa
    const handleEditClick = () => setIsFormVisibleEdit(true);

    // Đóng modal
    const handleCloseModalEdit = () => setIsFormVisibleEdit(false);

    useEffect(()=>{
        authUser.get_user_id()
            .then(response=>{
                setUser_id(response.data)
            })
            .catch(error=>{
                console.error('có lỗi trong quá trình lấy id')
            })
    })

    useEffect(()=>{
        if(user_id!==null){
            userApi.getById(user_id)
            .then(response=>{
                setName(response.data.name);
                setEmail(response.data.email);
            })
            .catch(error=>{
                console.error('có lỗi trong quá trình lấy ra thông tin người dùng')
            })
            HandleGetCustomer();
        }
    },[user_id])

    function HandleGetCustomer(){
        customerApi.getByIdUser()
            .then(response=>{
                setFullName(response.data.FullName);
                setPhoneNumber(response.data.PhoneNumber);
                setAddress(response.data.Address);
                setCustomerID(response.data.CustomerID)
            })
            .catch(error=>{
                console.error('có lỗi trong quá trình lấy ra thông tin người dùng')
            })
    }

    return (
        <div className='container-fluid w-100' style={{ background: '#10302c', padding: '80px 0 0 0' }}>
            <div className='container-fluid p-0' style={{ height: '50px', background: '#000' }}>
                <div className='container h-100 d-flex align-items-center'>
                    <p className='m-0' style={{ color: '#fff' }}>Trang chủ / </p>
                    <p className='m-0' style={{ color: '#d69c52' }}> Thông tin cá nhân</p>
                </div>
            </div>
            <div className='container pb-5  mt-5 text-white ' style={{ minHeight: '350px' }}>
                <div className='row'>
                    <div className='col-md-3' style={{ borderRight: '1px solid #fff' }}>
                        <p className={` ${selectedTab === "info1" ? "text-danger" : "text-white"
                            }`}
                            onClick={() => setSelectedTab("info1")}>
                            Thông tin tài khoản
                        </p>
                        <p className={` ${selectedTab === "info2" ? "text-danger" : "text-white"
                            }`}
                            onClick={() => setSelectedTab("info2")}>
                            Thông tin đặt bàn
                        </p>
                    </div>
                    <div className='col-md-6'>
                        {selectedTab === "info1" &&
                            <div className=''>
                                <h5 style={{ color: '#d69c52' }}>Thông tin tài khoản</h5>
                                <p>
                                    <span>Tên đăng nhập:</span>
                                    <span>{name}</span>
                                </p>
                                <p>
                                    <span>Email:</span>
                                    <span>{email}</span>
                                </p>
                                <button style={{ height: '40px', width: '150px', borderRadius: '5px', color: '#fff', background: '#d69c52', border: 'none' }} >Đổi mật khẩu</button>

                            </div>
                        }
                        {selectedTab === "info2" &&
                            <div>
                                <h5 style={{ color: '#d69c52' }}>Thông tin đặt bàn</h5>
                                {fullName ? 
                                <>
                                <p>
                                    <span>Tên khách hàng:</span>
                                    <span>{fullName}</span>
                                </p>
                                <p>
                                    <span>Số điện thoại:</span>
                                    <span>{phoneNumber}</span>
                                </p>
                                <p>
                                    <span>Địa chỉ :</span>
                                    <span>{address}</span>
                                </p>
                                <button
                                    onClick={handleEditClick}
                                    style={{ height: '40px', width: '100px', borderRadius: '5px', color: '#fff', background: '#d69c52', border: 'none' }} 
                                    >
                                        Chỉnh sửa
                                </button>
                                {isFormVisibleEdit && (
                                    <>
                                    {/* <div className="overlay"></div> */}
                                    <EditCustomer 
                                    onUpdate={HandleGetCustomer} 
                                    onClose={handleCloseModalEdit} 
                                    user_id={user_id}
                                    data={{fullName,phoneNumber,address,CustomerID}}
                                    />
                                    </>
                                )}
                                </>
                                :
                                <>
                                <p>Vui lòng tạo người đặt hàng !</p>
                                <button
                                    onClick={(e)=>{handleAddClick()}}
                                    style={{ height: '40px', width: '100px', borderRadius: '5px', color: '#fff', background: '#d69c52', border: 'none' }} 
                                    >
                                        Thêm
                                </button>
                                {isFormVisibleAdd && (
                                    <>
                                    {/* <div className="overlay"></div> */}
                                    <AddCustomer 
                                    onUpdate={HandleGetCustomer} 
                                    onClose={handleCloseModalAdd} 
                                    user_id={user_id}
                                    />
                                    </>
                                )}
                                </>
                                }
                            </div>
                        }
                    </div>
                </div>
            </div>

        </div>
    )
}

export default PersonalIn4