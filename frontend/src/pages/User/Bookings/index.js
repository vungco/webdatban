import React, { useState } from "react";
import Title from '../../../components/shared/Title'
import MenuSelection from '../../../components/shared/MenuSelection'

function Bookings() {
    const [showMenuModal, setShowMenuModal] = useState(false);
    const handleBooking = () => {
        const userConfirmation = window.confirm("Bạn có muốn đặt món luôn không?");
        if (userConfirmation) {
            setShowMenuModal(true); // Hiển thị khung chọn món
        }
    };

    const handleCloseMenu = () => {
        setShowMenuModal(false); // Đóng khung chọn món
    };
    return (
        <div className='container-fluid w-100 pb-5' style={{ background: '#10302c', padding: '80px 0 0 0' }}>
            <div className='container-fluid p-0' style={{ height: '50px', background: '#000' }}>
                <div className='container h-100 d-flex align-items-center'>
                    <p className='m-0' style={{ color: '#fff' }}>Trang chủ / </p>
                    <p className='m-0' style={{ color: '#d69c52' }}>Đặt bàn</p>
                </div>
            </div>
            <div className='container mt-5 d-flex align-items-center justify-content-center' style={{ height: '574px', borderRadius: '10px', background: "url('https://bizweb.dktcdn.net/100/469/097/themes/882205/assets/datban.jpg?1705898785025')" }}>
                <div style={{ width: '600px', height: '450px', borderRadius: '10px', background: '#10302c' }}>
                    <Title
                        title='Liên hệ đặt bàn'></Title>
                    <form>
                        <div className='row text-white p-3'>
                            <div className='col-md-6'>
                                <label style={{ marginTop: '12px' }}>Tên của bạn:</label>
                                <input type='text' required placeholder='Tên của bạn' style={{ marginTop: '8px', width: '100%', height: '35px', outline: 'none', borderRadius: '5px' }}></input>

                                <label style={{ marginTop: '12px' }}>Số điện thoại của bạn:</label>
                                <input type='text' required placeholder='Số điện thoại' style={{ marginTop: '8px', width: '100%', height: '35px', outline: 'none', borderRadius: '5px' }}></input>

                                <label style={{ marginTop: '12px' }}>Bạn đi mấy người:</label>
                                <input type='text' required placeholder='Số người' style={{ marginTop: '8px', width: '100%', height: '35px', outline: 'none', borderRadius: '5px' }}></input>

                            </div>
                            <div className='col-md-6'>
                                <label style={{ marginTop: '12px' }}>Email của bạn:</label>
                                <input type='text' required placeholder='Email' style={{ marginTop: '8px', width: '100%', height: '35px', outline: 'none', borderRadius: '5px' }}></input>

                                <label style={{ marginTop: '12px' }}>Bạn có thể đến dùng ngày nào?</label>
                                <input type='date' required placeholder='Chọn ngày' style={{ marginTop: '8px', width: '100%', height: '35px', outline: 'none', borderRadius: '5px' }}></input>

                                <label style={{ marginTop: '12px' }}>Thời gian bạn đến?</label>
                                <input type='time' required style={{ marginTop: '8px', width: '100%', height: '35px', outline: 'none', borderRadius: '5px' }}></input>
                            </div>
                        </div>
                        <div className='d-flex align-items-center justify-content-center mt-2'>
                            <button type="submit" onClick={handleBooking} style={{ width: '150px', height: '45px', borderRadius: '5px', border: 'none', background: '#d69c52', color: '#fff' }}>Đặt bàn ngay</button>
                        </div>
                    </form>
                    <MenuSelection isVisible={showMenuModal} onClose={handleCloseMenu} />

                </div>
            </div>
        </div>
    )
}

export default Bookings