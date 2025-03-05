import { Link } from 'react-router-dom';
import { useState } from 'react';
import Notification from '../Notification';
import { formatNumber } from '../../utils/format_number';

const Quikly = ({ onClose,ImageURL,menu_item }) => {
    const [isVisible, setIsVisible] = useState(true);
    const [quantity, setQuantity] = useState(1);
    const [notification, setNotification] = useState({
        message: '',
        type: '',
    });
    const handleAddToCart = () => {
        // Hiển thị thông báo
        setNotification({
            message: 'Thêm vào giỏ hàng thành công!',
            type: 'success',
        });

        // Ẩn thông báo sau 3 giây
        setTimeout(() => {
            setNotification({ message: '', type: '' });
        }, 3000);
    };

    const handleClose = () => {
        setIsVisible(false);
        setTimeout(onClose, 2000); // Đợi 2s để hiển thị hiệu ứng ẩn trước khi gọi onClose
    };
    return (
        <div className=''>
            <div className={`p-0 form-popup ${isVisible ? "slide-in" : "slide-out"}`} onClick={handleClose}>
                <button onClick={onClose} style={{ height: '30px', width: '30px', borderRadius: '50%', position: 'absolute', top: '-2%', right: '-2%', zIndex: '1' }}>X</button>
                <div className="modal-content d-flex align-items-center" style={{ backgroundColor: '#bd8133', color: '#fff' }}>
                    <p className='p-1 m-0'>THÔNG TIN SẢN PHẨM</p>
                </div>
                <div className='row p-2'>
                    <div className='col-md-6'>
                        <img src={ImageURL} style={{ width: '90%' }} />

                    </div>
                    <div className='col-md-6 detail'>
                        <p style={{ fontSize: '18px' }}>{menu_item.Name}</p>
                        <p style={{ color: 'red' }}>{formatNumber(menu_item.Price)}</p>
                        <div className='d-flex align-items-center ju' style={{ borderBottom: '1px solid #969494', borderTop: '1px solid #969494', height: '40px' }}>
                            <p className='m-0'>Tại Dola Restaurant : </p>
                            <Link to='/' style={{ color: '#bd8133' }}>Liên hệ</Link>
                        </div>
                        <p style={{ fontSize: '14px' }}>Món ăn được chế tinh tế với hương vị đặc biệt nhất
                        </p>
                        <div className='d-flex' style={{ width: '100px', backgroundColor: '#888', height: '30px' }}>
                            <button onClick={(e) => {
                                e.stopPropagation(); // Ngăn sự kiện lan truyền

                            }} className='border-0' style={{ width: '50px' }}>-</button>
                            <input className='w-100 border-0' type="number"
                                value={quantity}
                                readOnly></input>
                            <button onClick={(e) => {
                                e.stopPropagation(); // Ngăn sự kiện lan truyền

                            }} className='border-0' style={{ width: '50px' }}>+</button>
                        </div>
                        
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Quikly