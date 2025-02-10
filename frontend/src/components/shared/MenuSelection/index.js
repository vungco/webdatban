import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MenuSelection = ({ isVisible, onClose }) => {
    const navigate = useNavigate();

    const [activeCategory, setActiveCategory] = useState('khaiVi');
    if (!isVisible) {
        return null;
    }

    const handleCategoryClick = (category) => {
        setActiveCategory(category);
    };
    const handleToBill = () => {
        navigate('/Bill');
    };
    const products = {
        "khaiVi": [
            { id: 1, name: "Gỏi Cuốn", price: "25,000đ", image: "https://bizweb.dktcdn.net/thumb/large/100/469/097/products/1cdb6151948324e7bb3b83f1b9f4cb.jpg?v=1667882448253" },
            { id: 2, name: "Súp Cua", price: "30,000đ", image: "https://bizweb.dktcdn.net/thumb/large/100/469/097/products/1cdb6151948324e7bb3b83f1b9f4cb.jpg?v=1667882448253" },
            { id: 20, name: "Gỏi Cuốn", price: "25,000đ", image: "https://bizweb.dktcdn.net/thumb/large/100/469/097/products/1cdb6151948324e7bb3b83f1b9f4cb.jpg?v=1667882448253" },
            { id: 21, name: "Súp Cua", price: "30,000đ", image: "https://bizweb.dktcdn.net/thumb/large/100/469/097/products/1cdb6151948324e7bb3b83f1b9f4cb.jpg?v=1667882448253" },
            { id: 22, name: "Gỏi Cuốn", price: "25,000đ", image: "https://bizweb.dktcdn.net/thumb/large/100/469/097/products/1cdb6151948324e7bb3b83f1b9f4cb.jpg?v=1667882448253" },
            { id: 23, name: "Súp Cua", price: "30,000đ", image: "https://bizweb.dktcdn.net/thumb/large/100/469/097/products/1cdb6151948324e7bb3b83f1b9f4cb.jpg?v=1667882448253" },
        ],
        "monChinh": [
            { id: 3, name: "Cơm Tấm", price: "50,000đ", image: "https://bizweb.dktcdn.net/thumb/large/100/469/097/products/1cdb6151948324e7bb3b83f1b9f4cb.jpg?v=1667882448253" },
            { id: 4, name: "Bún Bò Huế", price: "55,000đ", image: "https://bizweb.dktcdn.net/thumb/large/100/469/097/products/1cdb6151948324e7bb3b83f1b9f4cb.jpg?v=1667882448253" },
        ],
        "Canh": [
            { id: 5, name: "Canh Chua Cá", price: "40,000đ", image: "https://bizweb.dktcdn.net/thumb/large/100/469/097/products/1cdb6151948324e7bb3b83f1b9f4cb.jpg?v=1667882448253" },
            { id: 6, name: "Canh Rau Dền", price: "20,000đ", image: "https://bizweb.dktcdn.net/thumb/large/100/469/097/products/1cdb6151948324e7bb3b83f1b9f4cb.jpg?v=1667882448253" },
        ],
        "Com": [
            { id: 7, name: "Cơm Chiên Dương Châu", price: "45,000đ", image: "https://bizweb.dktcdn.net/thumb/large/100/469/097/products/1cdb6151948324e7bb3b83f1b9f4cb.jpg?v=1667882448253" },
            { id: 8, name: "Cơm Rang Hải Sản", price: "60,000đ", image: "https://bizweb.dktcdn.net/thumb/large/100/469/097/products/1cdb6151948324e7bb3b83f1b9f4cb.jpg?v=1667882448253" },
        ],
        "Trangmieng": [
            { id: 9, name: "Chè Thái", price: "25,000đ", image: "https://bizweb.dktcdn.net/thumb/large/100/469/097/products/1cdb6151948324e7bb3b83f1b9f4cb.jpg?v=1667882448253" },
            { id: 10, name: "Kem Dừa", price: "30,000đ", image: "https://bizweb.dktcdn.net/thumb/large/100/469/097/products/1cdb6151948324e7bb3b83f1b9f4cb.jpg?v=1667882448253" },
        ],
        "Douong": [
            { id: 11, name: "Trà Đào", price: "20,000đ", image: "https://bizweb.dktcdn.net/thumb/large/100/469/097/products/1cdb6151948324e7bb3b83f1b9f4cb.jpg?v=1667882448253" },
            { id: 12, name: "Nước Ép Cam", price: "25,000đ", image: "https://bizweb.dktcdn.net/thumb/large/100/469/097/products/1cdb6151948324e7bb3b83f1b9f4cb.jpg?v=1667882448253" },
        ],
        "combo": [
            { id: 11, name: "Trà Đào", price: "20,000đ", image: "https://bizweb.dktcdn.net/thumb/large/100/469/097/products/1cdb6151948324e7bb3b83f1b9f4cb.jpg?v=1667882448253" },
            { id: 12, name: "Nước Ép Cam", price: "25,000đ", image: "https://bizweb.dktcdn.net/thumb/large/100/469/097/products/1cdb6151948324e7bb3b83f1b9f4cb.jpg?v=1667882448253" },
        ],
    };

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
                <h2>Chọn món</h2>

                <div className='container mt-3'>
                    <div className='row'>
                        <div className='col-md-8' style={{ border: '1px solid rgb(195, 194, 194)' }}>
                            <div className='p-1' style={{ height: '400px', overflowY: 'auto' }}>
                                <ul className='d-flex p-0'>
                                    <li
                                        className={` ${activeCategory === "khaiVi" ? "menu_active" : ""}`}
                                        onClick={() => handleCategoryClick("khaiVi")}>Khai vị</li>
                                    <li
                                        className={` ${activeCategory === "monChinh" ? "menu_active" : ""}`}
                                        onClick={() => handleCategoryClick("monChinh")}>Món chính</li>
                                    <li
                                        className={` ${activeCategory === "Canh" ? "menu_active" : ""}`}
                                        onClick={() => handleCategoryClick("Canh")}>Canh - Súp</li>
                                    <li
                                        className={` ${activeCategory === "Com" ? "menu_active" : ""}`}
                                        onClick={() => handleCategoryClick("Com")}>Cơm - Mì</li>
                                    <li
                                        className={` ${activeCategory === "Trangmieng" ? "menu_active" : ""}`}
                                        onClick={() => handleCategoryClick("Trangmieng")}>Tráng miệng</li>
                                    <li
                                        className={` ${activeCategory === "Douong" ? "menu_active" : ""}`}
                                        onClick={() => handleCategoryClick("Douong")}>Đồ uống</li>
                                    <li
                                        className={` ${activeCategory === "combo" ? "menu_active" : ""}`}
                                        onClick={() => handleCategoryClick("combo")}>Combo</li>
                                </ul>

                                <div className='row' style={{ marginTop: '80px' }}>
                                    {products[activeCategory].map((product) => (
                                        <div className="col-md-5 text-center pro-item p-1 position-relative" key={product.id} style={{ background: '#908f8f', marginBottom: '24px', height: '290px' }}>
                                            <div className='pro-item_child' style={{ width: '100%', height: '100%', position: 'absolute', background: '#fff', top: '1%', padding: '8px' }}>
                                                <img
                                                    src={product.image}
                                                    alt={product.name}
                                                    className="w-100 mb-2"
                                                />
                                                <h5>{product.name}</h5>
                                                <p className="text-danger">{product.price}</p>
                                            </div>
                                            <button style={{ position: 'absolute', bottom: '-10%', left: '25%', border: 'none', borderRadius: '5px', background: '#bd8133', color: '#fff', padding: '5px' }}>Chọn món</button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4 '>
                            <div className='p-1' style={{ border: '1px solid rgb(195, 194, 194)', background: '#fff', height: '400px', overflowY: 'auto' }}>
                                <h5>Các món đã chọn</h5>
                                <div className='d-flex align-items-center justify-content-between mt-3 pb-3' style={{ borderBottom: '1px solid #fff' }}>
                                    <div className='d-flex align-items-center position-relative mt-2'>
                                        <img style={{ width: '50px', height: '50px', borderRadius: '5px' }} src='https://bizweb.dktcdn.net/thumb/thumb/100/469/097/products/untitled1bb4fdbb3bd7845448a799-a1c5a559-3505-435f-9278-d7ba29e9c529.jpg?v=1667882632337' />
                                        <p style={{ marginLeft: '4px', fontSize: '12px' }}>Salad rau mùa sốt mác mác</p>
                                    </div>
                                    <div className='d-flex align-items-center justify-content-center flex-column'>
                                        <p style={{ color: '#d69c52', fontSize: '12px', margin: '0' }}>68.000đ</p>
                                        <button className='d-flex align-items-center justify-content-center' style={{ color: '#fff', fontSize: '12px', background: 'red', height: '20px', border: 'none' }}>Xóa</button>
                                    </div>


                                </div>
                            </div>

                        </div>
                    </div>
                </div>



                <div className='menu-bt'>
                    <button onClick={handleToBill}>
                        Xác nhận
                    </button>
                    <button onClick={onClose}>
                        Hủy
                    </button>
                </div>

            </div>
        </div>
    );
};

export default MenuSelection;