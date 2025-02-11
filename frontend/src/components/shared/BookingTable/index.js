import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MenuSelection from '../../../components/shared/MenuSelection'


const BookingTable = ({ isVisible, onClose }) => {
    const [showMenuModal, setShowMenuModal] = useState(false);
    
    const handleBooking = () => {
        const userConfirmation = window.confirm("Bạn có muốn đặt món luôn không?");
        if (userConfirmation) {
            setShowMenuModal(true); // Hiển thị khung chọn bàn
        }
    };

    const handleCloseMenu = () => {
        setShowMenuModal(false); // Đóng khung chọn bàn
    };

    const [activeCategory, setActiveCategory] = useState('khaiVi');
    if (!isVisible) {
        return null;
    }

    const handleCategoryClick = (category) => {
        setActiveCategory(category);
    };
    // const handleToBill = () => {
    //     navigate('/Bill');
    // };
    const tables = [
            { id: 1, name: "T01-B01", status: "còn bàn", image: "https://images.pexels.com/photos/460537/pexels-photo-460537.jpeg?cs=srgb&dl=pexels-pixabay-460537.jpg&fm=jpg" },
            { id: 2, name: "T01-B02", status: "đã đặt", image: "https://images.pexels.com/photos/460537/pexels-photo-460537.jpeg?cs=srgb&dl=pexels-pixabay-460537.jpg&fm=jpg" },
            { id: 20, name: "T01-B03", status: "còn bàn", image: "https://images.pexels.com/photos/460537/pexels-photo-460537.jpeg?cs=srgb&dl=pexels-pixabay-460537.jpg&fm=jpg" },
            { id: 21, name: "T01-B04", status: "đã đặt", image: "https://images.pexels.com/photos/460537/pexels-photo-460537.jpeg?cs=srgb&dl=pexels-pixabay-460537.jpg&fm=jpg" },
            { id: 22, name: "T01-B05", status: "còn bàn", image: "https://images.pexels.com/photos/460537/pexels-photo-460537.jpeg?cs=srgb&dl=pexels-pixabay-460537.jpg&fm=jpg" },
            { id: 23, name: "T01-B06", status: "đã đặt", image: "https://images.pexels.com/photos/460537/pexels-photo-460537.jpeg?cs=srgb&dl=pexels-pixabay-460537.jpg&fm=jpg" },
        ];

    return (

        <div>
            {/* Lớp phủ mờ */}
            <div
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    zIndex: 100,
                }}
            // Đóng khi nhấn bên ngoài
            ></div>

            {/* Modal */}
            <div className='menu-select' style={{ background: '#ebe8e8' }}>
                <h2>Chọn bàn</h2>

                <div className='container mt-3'>
                    <div className='row'>
                        <div className='col-md-8' style={{ border: '1px solid rgb(195, 194, 194)' }}>
                            <div className='p-1' style={{ height: '400px', overflowY: 'auto' }}>

                                <div className='row'>
                                    {tables.map((table) => (
                                        <div className="col-md-5 text-center pro-item p-1 position-relative" key={table.id} style={{ background: '#908f8f', marginBottom: '24px', height: '250px' }}>
                                            <div className='pro-item_child' style={{ width: '100%', height: '100%', position: 'absolute', background: '#fff', top: '1%', padding: '8px' }}>
                                                <img
                                                    src={table.image}
                                                    alt={table.name}
                                                    className="w-100 mb-2"
                                                />
                                                <h5>{table.name}</h5>
                                                <p className="text-danger">{table.status}</p>
                                            </div>
                                            <button style={{ position: 'absolute', bottom: '-10%', left: '25%', border: 'none', borderRadius: '5px', background: '#bd8133', color: '#fff', padding: '5px' }}>Chọn bàn</button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4 '>
                            <div className='p-1' style={{ border: '1px solid rgb(195, 194, 194)', background: '#fff', height: '400px', overflowY: 'auto' }}>
                                <h5>Các bàn đã được chọn</h5>
                                <div className='d-flex align-items-center justify-content-between mt-3 pb-3' style={{ borderBottom: '1px solid #fff' }}>
                                    <div className='d-flex align-items-center position-relative mt-2'>
                                        <img style={{ width: '50px', height: '50px', borderRadius: '5px' }} src='https://images.pexels.com/photos/460537/pexels-photo-460537.jpeg?cs=srgb&dl=pexels-pixabay-460537.jpg&fm=jpg' />
                                        <p style={{ marginLeft: '4px', fontSize: '12px' }}>Bàn : T01-B01</p>
                                    </div>
                                    <div className='d-flex align-items-center justify-content-center flex-column'>
                                        <button className='d-flex align-items-center justify-content-center' style={{ color: '#fff', fontSize: '12px', background: 'red', height: '20px', border: 'none' }}>Xóa</button>
                                    </div>


                                </div>
                            </div>

                        </div>
                    </div>
                </div>



                <div className='menu-bt'>
                    <button onClick={handleBooking}>
                        Tiến hành đặt món
                    </button>
                        <MenuSelection isVisible={showMenuModal} onClose={handleCloseMenu} />
                    <button onClick={onClose}>
                        Hủy
                    </button>
                </div>

            </div>
        </div>
    );
};

export default BookingTable;