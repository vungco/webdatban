import React, { useState,useEffect } from "react";
import Title from '../../../components/shared/Title'
import MenuSelection from '../../../components/shared/MenuSelection'
import BookingTable from '../../../components/shared/BookingTable'
import customerApi from '../../../api/customerApi'
import authUser from '../../../api/authUser'

function Bookings() {
    const [showMenuModal, setShowMenuModal] = useState(false);
    const [showBookingTable, setShowBookingTable] = useState(false);
    const [Customer, setCustomer] = useState(null);
    const [User_id, setUser_id] = useState(null);
    const [BookingTime, setBookingTime] = useState(null);
    const [Status, setStatus] = useState(0);



    const handleBooking = (e) => {
        e.preventDefault();
        const userConfirmation = window.confirm("Bạn có muốn đặt bàn luôn không?");
        if (userConfirmation) {
            setShowBookingTable(true); // Hiển thị khung chọn bàn
            const table_booking = {
                CustomerID : Customer.CustomerID,
                BookingTime,
                Status,
                FullName : Customer.FullName,
                PhoneNumber : Customer.PhoneNumber, 
            } 
            sessionStorage.setItem('table_bookings',JSON.stringify(table_booking));
        }
    };

    const handleCloseMenu = () => {
        setShowBookingTable(false); // Đóng khung chọn bàn
    };

    useEffect(()=>{
        authUser.get_user_id()
            .then(response=>{
                setUser_id(response.data)
            })
            .catch(error=>console.error('có lỗi: '+error))
    },[])

    useEffect(()=>{
        customerApi.getByIdUser(User_id)
            .then(response=>{
                setCustomer(response.data)
            })
            .catch(error=>console.error('có lỗi: '+error))
    },[User_id])
    

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
                                <input 
                                type='text' required placeholder='Tên của bạn' 
                                style={{ marginTop: '8px', width: '100%', height: '35px', outline: 'none', 
                                borderRadius: '5px' }}
                                value={Customer?.FullName}
                                ></input>

                                <label style={{ marginTop: '12px' }}>Số điện thoại của bạn:</label>
                                <input type='text' required placeholder='Số điện thoại' style={{ marginTop: '8px', width: '100%', 
                                height: '35px', outline: 'none', borderRadius: '5px' }}
                                value={Customer?.PhoneNumber}
                                ></input>

                                

                            </div>
                            <div className='col-md-6'>
                                <label style={{ marginTop: '12px' }}>Địa chỉ của bạn:</label>
                                <input type='text' required placeholder='địa chỉ' style={{ marginTop: '8px', width: '100%', 
                                height: '35px', outline: 'none', borderRadius: '5px' }}
                                value={Customer?.Address}
                                
                                ></input>

                                <label style={{ marginTop: '12px' }}>Thời gian bạn đến trong ngày hôm nay ?</label>
                                <input type='time' required 
                                style={{ marginTop: '8px', width: '100%', height: '35px', outline: 'none', borderRadius: '5px' }}
                                value={BookingTime?BookingTime:''}
                                onChange={(e)=>setBookingTime(e.target.value)}
                                ></input>
                            </div>
                        </div>
                        <div className='d-flex align-items-center justify-content-center mt-2'>
                            <button type="" onClick={(e)=>handleBooking(e)} style={{ width: '150px', height: '45px', borderRadius: '5px', border: 'none', background: '#d69c52', color: '#fff' }}>Đặt bàn ngay</button>
                        </div>
                    </form>
                    <BookingTable isVisible={showBookingTable} onClose={handleCloseMenu} />

                </div>
            </div>
        </div>
    )
}

export default Bookings