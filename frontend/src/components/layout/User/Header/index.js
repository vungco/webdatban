import React, { useState } from "react";
import Login from "../../../../pages/User/Login";
import { Link } from 'react-router-dom'
import Zalo from '../../../shared/Zalo/Zalo'


function Header() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const [showLogin, setShowLogin] = useState(false);
    const handleLogin = () => {
        setShowLogin(true);

    };

    const handleClose = () => {
        setShowLogin(false);
    };
    return (
        <><Login isVisible={showLogin} onClose={handleClose} />
            <Zalo></Zalo>
            <div className='p-0' id='header'>
                <div className='container-fluid header p-0'>
                    <div className='container h-100'>
                        <div className='row d-flex align-items-center h-100'>
                            <div className='col-md-2'>
                                <img className='w-75' src='https://bizweb.dktcdn.net/100/469/097/themes/882205/assets/logo.png?1705898809027' />
                            </div>
                            <div className='col-md-6'>
                                <nav className='header-nav'>
                                    <ul className='item_big m-0 d-flex align-items-center justify-content-between'>
                                        <li><Link to='/'>Trang chủ</Link></li>
                                        <li><Link to='/'>Thực đơn</Link></li>
                                        <li><Link to='/'>Giới thiệu</Link></li>
                                        <li><Link to='/'>Tin tức</Link></li>
                                        <li><Link to='/'>Liên hệ</Link></li>
                                    </ul>
                                </nav>
                            </div>
                            <div className='col-md-2'></div>
                            <div className='col-md-2 text-white'>
                                <div className='row align-items-center justify-content-center'>
                                    <div className='col-md-2 user-container'>
                                        <i className="fas fa-search"></i>
                                        <div className='search-dropdown'>

                                            <div className='d-flex' style={{ color: '#bd8133' }}>
                                                <input type="text" placeholder="Nhập từ khóa" />
                                                <button>Tìm kiếm</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-md-2 user-container'>
                                        <i className="fas fa-user" onClick={toggleMenu}></i>
                                        {isOpen && (<div className='user-dropdown'>
                                            <button onClick={handleLogin}>Đăng nhập</button>
                                            <div className='d-flex flex-column' style={{ color: '#bd8133' }}>
                                                <p className='m-0'>Xin chào Lâm!</p>
                                                <Link to=''>Đơn hàng</Link>
                                                <Link to=''>Thông tin cá nhân</Link>
                                                <Link to=''>Đăng xuất</Link>
                                            </div>
                                        </div>)}
                                    </div>
                                    <div className='col-md-2'>
                                        <Link to='/Cart'><i className="fas fa-shopping-cart"></i></Link>
                                    </div>
                                    <div className='col-md-6'>
                                        <Link to='/Bookings'><button className='bt-booking w-100'>Đặt bàn</button> </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </>


    )
}

export default Header