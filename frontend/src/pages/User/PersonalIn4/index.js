import React, { useState } from 'react';

function PersonalIn4() {
    const [selectedTab, setSelectedTab] = useState("info1");
    const [isEditing, setIsEditing] = useState(false);
    // Mở modal chỉnh sửa
    const handleEditClick = () => setIsEditing(true);

    // Đóng modal
    const handleCloseModal = () => setIsEditing(false);

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
                                    <span>Hứa Tùng Lâm</span>
                                </p>
                                <p>
                                    <span>Mật khẩu:</span>
                                    <span>*******</span>
                                </p>
                                <button style={{ height: '40px', width: '150px', borderRadius: '5px', color: '#fff', background: '#d69c52', border: 'none' }} >Đổi mật khẩu</button>

                            </div>
                        }
                        {selectedTab === "info2" &&
                            <div>
                                <h5 style={{ color: '#d69c52' }}>Thông tin đặt bàn</h5>
                                <p>
                                    <span>Tên khách hàng:</span>
                                    <span>Hứa Tùng Lâm</span>
                                </p>
                                <p>
                                    <span>Số điện thoại:</span>
                                    <span>0328443736</span>
                                </p>
                                <p>
                                    <span>Email :</span>
                                    <span>huatunglam1205@gmail.com</span>
                                </p>
                                <button
                                    onClick={handleEditClick}
                                    style={{ height: '40px', width: '100px', borderRadius: '5px', color: '#fff', background: '#d69c52', border: 'none' }} >Chỉnh sửa</button>

                            </div>
                        }
                    </div>
                    {isEditing && (
                        <div className=" col-md-3">
                            <h5 className="mb-4">Chỉnh sửa thông tin bàn</h5>
                            <div className='d-flex align-items-center justify-content-between mt-2'>
                                <label className="mb-2">Họ tên</label>
                                <input type="text" name="name"
                                    style={{
                                        outline: 'none',
                                    }}
                                />
                            </div>
                            <div className='d-flex align-items-center justify-content-between mt-2'>
                                <label className="mb-2">Số điện thoại</label>
                                <input type="text" name="name"
                                    style={{
                                        outline: 'none',
                                    }}
                                />
                            </div>
                            <div className='d-flex align-items-center justify-content-between mt-2'>
                                <label className="mb-2">Email</label>
                                <input type="text" name="name"
                                    style={{
                                        outline: 'none',
                                    }}
                                />
                            </div>
                            {/* Nút lưu và đóng */}
                            <div className="d-flex mt-3 justify-content-evenly">
                                <button onClick={handleCloseModal}
                                    style={{ height: '40px', width: '100px', borderRadius: '5px', color: '#fff', background: '#d69c52', border: 'none' }}>
                                    Hủy
                                </button>
                                <button onClick={handleCloseModal}
                                    style={{ height: '40px', width: '100px', borderRadius: '5px', color: '#fff', background: '#d69c52', border: 'none' }}>
                                    Lưu
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>

        </div>
    )
}

export default PersonalIn4