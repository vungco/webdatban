import React, { useState } from "react";
import Login from "../../../../pages/User/Login";
import { Link } from 'react-router-dom'
import Zalo from '../../../shared/Zalo/Zalo'
import { useNavigate } from 'react-router-dom';


function Header() {
    const navigate = useNavigate();

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const [showLogin, setShowLogin] = useState(false);
    const handleLogin = () => {
        // setShowLogin(true);
        setIsOpen(false);

        navigate('/Login')
    };

    const handleLogout = () => {
        // setShowLogin(true);
        localStorage.clear();
        setIsOpen(false);
        navigate('/Login')

    };

    const handleClose = () => {
        setShowLogin(false);
    };
    const handleScroll = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({
                behavior: 'smooth', // trượt mượt mà
                block: 'start',     // căn lề phía trên
            });
        }
    };
    return (
        <>
            {/* <Login isVisible={showLogin} onClose={handleClose} /> */}
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
                                        <li onClick={() => handleScroll('thucdon')}><Link to='/'>Thực đơn</Link></li>
                                        <li onClick={() => handleScroll('gioithieu')}><Link to='/'>Giới thiệu</Link></li>
                                        <li onClick={() => handleScroll('tintuc')}><Link to='/'>Tin tức</Link></li>
                                        <li><Link to='/Feedback'>Phản hồi</Link></li>
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
                                            <button onClick={handleLogin}>Đăng nhập | Đăng ký</button>
                                            <div className='d-flex flex-column' style={{ color: '#bd8133' }}>
                                                <p className='m-0'>Xin chào Lâm!</p>
                                                <Link to='/Show_booking'
                                                    onClick={() => setIsOpen(false)}
                                                >
                                                    Xem lượt đặt</Link>
                                                <Link to='/PersonalIn4'
                                                    onClick={() => setIsOpen(false)}
                                                >
                                                    Thông tin cá nhân</Link>
                                            </div>
                                            <button onClick={handleLogout}>Đăng xuất</button>
                                        </div>)}
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