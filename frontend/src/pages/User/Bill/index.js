
import React, { useState, useEffect } from "react";

function Bill() {
    const [timeLeft, setTimeLeft] = useState(3600);
    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev <= 1) {
                    clearInterval(timer); // Dừng đếm ngược khi hết giờ
                    return 0;
                }
                return prev - 1; // Giảm 1 giây mỗi lần
            });
        }, 1000);

        return () => clearInterval(timer); // Dọn sạch bộ đếm nếu component unmount
    }, []);
    const formatTime = (seconds) => {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;
        return `${hours.toString().padStart(2, "0")}:${minutes
            .toString()
            .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
    };
    return (
        <div className='container-fluid w-100' style={{ background: '#10302c', padding: '80px 0 0 0' }}>
            <div className='container-fluid p-0' style={{ height: '50px', background: '#000' }}>
                <div className='container h-100 d-flex align-items-center'>
                    <p className='m-0' style={{ color: '#fff' }}>Trang chủ / </p>
                    <p className='m-0' style={{ color: '#d69c52' }}>  Thông tin đặt bàn</p>
                </div>
            </div>
            <div className='container text-white pb-3 mt-5'>
                <div className='d-flex align-items-center'>
                    <h4>Trạng thái:</h4>
                    <p className='m-0' style={{ color: ' #bd8133', paddingLeft: '12px' }}>Chờ xác nhận</p>
                </div>
                <div className='row'>
                    <div className='col-md-8 '>
                        <h5>Thông tin bàn</h5>
                        <div className='row'>
                            <div className='col-md-4'>
                                <p>
                                    <span>Khách hàng:</span>
                                    <span>Hứa Tùng Lâm</span>
                                </p>
                                <p>
                                    <span>Số điện thoại:</span>
                                    <span>0328443736</span>
                                </p>
                                <p>
                                    <span>Thời gian:</span>
                                    <span>1-3-2025  21:00</span>
                                </p>
                                <p>
                                    <span>Số người:</span>
                                    <span>6</span>
                                </p>
                            </div>
                            <div className='col-md-8'>
                                <div style={{ border: '1px solid #fff' }}>
                                    <div className='row p-2'>
                                        <div className='col-md-9'>Sản phẩm</div>
                                        <div className='col-md-3'>Đơn giá</div>
                                    </div>
                                    <div className='row p-2 w-100 m-0 align-items-center' style={{ borderTop: '1px solid #fff' }} >
                                        <div className='col-md-9 d-flex align-items-center'>
                                            <img style={{ width: '108px' }} src='https://bizweb.dktcdn.net/thumb/compact/100/469/097/products/untitled1bb4fdbb3bd7845448a799-a1c5a559-3505-435f-9278-d7ba29e9c529.jpg' />
                                            <div style={{ marginLeft: '8px' }}>
                                                <p>Salad rau màu sốt mác mác</p>
                                                <button style={{ border: 'none', color: '#c8760b', background: 'none' }}>Xóa</button>
                                            </div>
                                        </div>
                                        <div className='col-md-3' style={{ color: '#c8760b' }}>68.000đ</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='col-md-4'>
                        <h5>Hóa đơn</h5>
                        <div className='mt-2' style={{ borderBottom: '1px solid #fff' }}>
                            <div className='d-flex align-items-center justify-content-between '>
                                <p className='d-flex align-items-center'>
                                    <span>Đặt cọc bàn</span>
                                    <span style={{ color: 'red' }}>(10%)</span>
                                </p>
                                <p>100.000đ</p>
                            </div>

                        </div>
                        <div className=' mt-2 d-flex align-items-center justify-content-center flex-column'>
                            <p style={{ color: '#c8760b', padding: '8px', border: '1px solid #c8760b', borderRadius: '5px' }}>Quý khách vui lòng đặt cọc để được xác nhận . Bố cảm ơn nha!!!</p>
                            <img style={{ width: '200px' }} src='qr.jpg' />
                            <div style={{ textAlign: "center", fontSize: "24px", marginTop: "20px" }}>
                                <h5>Vui lòng thanh toán trong : </h5>
                                <div style={{ fontWeight: "bold", color: "red" }}>{formatTime(timeLeft)}</div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Bill