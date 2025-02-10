
import React, { useState } from 'react';
import ProductFrame from '../ProductFrame';

const Menu = () => {
    const [activeCategory, setActiveCategory] = useState('khaiVi');
    const handleCategoryClick = (category) => {
        setActiveCategory(category);
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
            <div className='d-flex align-items-center justify-content-center menu mt-3'>
                <ul className='d-flex'>
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
            </div>
            <div className='mt-3' style={{ marginLeft: '50px' }}>
                <ProductFrame products={products[activeCategory]} />
            </div>
        </div>
    )
}

export default Menu