import React from 'react'
import { Link } from 'react-router-dom'
import Input from '../../../components/shared/Input'
import Select from '../../../components/shared/Select'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Pay() {
    const navigate = useNavigate();

    const handleToThanks = () => {
        navigate('/Thanks'); // Chuyển đến trang Pay
    };
    return (
        <div className='container-fluid w-100' style={{ background: '#10302c', padding: '80px 0 0 0' }}>
            <div className='container-fluid p-0' style={{ height: '50px', background: '#000' }}>
                <div className='container h-100 d-flex align-items-center'>
                    <p className='m-0' style={{ color: '#fff' }}>Trang chủ / </p>
                    <p className='m-0' style={{ color: '#d69c52' }}>Thông tin nhận hàng</p>
                </div>
            </div>
            <div className='container text-white pt-5 pb-5'>
                <div className='row'>
                    <div className='col-md-4'>
                        <h5>Thông tin nhận hàng</h5>
                        <div className='mt-3'>
                            <Input
                                title='Email'></Input>
                            <Input
                                title='Họ và tên'></Input>
                            <Input
                                title='Số điện thoại'></Input>
                            <Input
                                title='Địa chỉ'></Input>
                            <Select
                                title='Tỉnh/Thành phố'></Select>
                            <Select
                                title='Quận/Huyện'></Select>
                            <Select
                                title='Xã/Phường'></Select>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <h5>Thanh toán</h5>
                        <div className='d-flex align-items-center justify-content-center mt-3' style={{ border: '1px solid #fff', width: '80%', height: '50px', borderRadius: '5px' }}>
                            <p className='m-0'>Thanh toán khi nhận hàng</p>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <h5>Đơn hàng</h5>
                        <div className='d-flex align-items-center justify-content-between mt-3 pb-3' style={{ borderBottom: '1px solid #fff' }}>
                            <div className='d-flex align-items-center position-relative mt-2'>
                                <img style={{ width: '50px', height: '50px', borderRadius: '5px' }} src='https://bizweb.dktcdn.net/thumb/thumb/100/469/097/products/untitled1bb4fdbb3bd7845448a799-a1c5a559-3505-435f-9278-d7ba29e9c529.jpg?v=1667882632337' />
                                <div style={{ position: 'absolute', width: '30px', height: '30px', borderRadius: '50%', background: '#d69c52', textAlign: 'center', top: '-15%', left: '15%' }}>1</div>
                                <p style={{ marginLeft: '24px' }}>Salad rau mùa sốt mác mác</p>
                            </div>
                            <p style={{ color: '#d69c52' }}>68.000đ</p>

                        </div>
                        <div className='mt-2' style={{ borderBottom: '1px solid #fff' }}>
                            <div className='d-flex align-items-center justify-content-between '>
                                <p>Tạm tính</p>
                                <p>100.000đ</p>
                            </div>
                            <div className='d-flex align-items-center justify-content-between'>
                                <p>Phí vận chuyển</p>
                                <p>40.000đ</p>
                            </div>
                        </div>
                        <div className='d-flex align-items-center justify-content-between mt-2'>
                            <p>Tổng cộng</p>
                            <p style={{ color: '#d69c52', fontSize: '24px' }}>140.000đ</p>
                        </div>
                        <div className='d-flex align-items-center justify-content-between mt-2'>
                            <Link to='' style={{ color: '#d69c52' }}> Quay về giỏ hàng</Link>
                            <button onClick={handleToThanks} style={{ width: '100px', height: '40px', borderRadius: '5px', border: 'none', background: '#d69c52', color: '#fff' }}>Đặt hàng</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pay