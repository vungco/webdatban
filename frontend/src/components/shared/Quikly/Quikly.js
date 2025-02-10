import { Link } from 'react-router-dom';
import { useState } from 'react';
import Notification from '../Notification';
const Quikly = ({ onClose }) => {
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
                        <img src='https://bizweb.dktcdn.net/thumb/large/100/469/097/products/1cdb6151948324e7bb3b83f1b9f4cb.jpg?v=1667882448253' style={{ width: '90%' }} />

                    </div>
                    <div className='col-md-6 detail'>
                        <p style={{ fontSize: '18px' }}>Gỏi cuốn</p>
                        <p style={{ color: 'red' }}>25.000đ</p>
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
                        <button onClick={(e) => {
                            e.stopPropagation();
                            handleAddToCart();
                        }} style={{ width: '150px', backgroundColor: '#bd8133', height: '40px', color: '#fff', border: 'none', borderRadius: '20px', marginTop: '16px' }}>Thêm vào giỏ hàng</button>
                        <Notification message={notification.message} type={notification.type} />
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Quikly