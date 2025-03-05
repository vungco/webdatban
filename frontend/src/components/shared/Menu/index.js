
import React, { useState,useEffect } from 'react';
import ProductFrame from '../ProductFrame';
import menu_itemApi from '../../../api/menu_itemApi';
import menu_categoryApi from '../../../api/menu_categoryApi';

const Menu = () => {
    const [activeCategory, setActiveCategory] = useState(null);
    const [Menu_categorys, setMenu_categorys] = useState();
    const [Menu_items, setMenu_items] = useState(null);
    const [Menu_itemsOfactiveCategory, setMenu_itemsOfactiveCategory] = useState();
    
    
    const handleCategoryClick = (CategoryID) => {
        setActiveCategory(CategoryID);
    };

    useEffect(()=>{
        menu_itemApi.getAll()
            .then(response=>{
                setMenu_items(response.data)
            })
            .catch(console.error('co loi trong qua trinh lay menu_items')
            )

        menu_categoryApi.getAll()
            .then(response=>{
                setMenu_categorys(response.data)
                setActiveCategory(response.data[0].CategoryID)
            })
            .catch(console.error('co loi trong qua trinh lay menu_categorys')
            )
    },[]);

    useEffect(()=>{
            if(Menu_items){
                const filteredItems = Menu_items.filter((item) => item.CategoryID === activeCategory);
                setMenu_itemsOfactiveCategory(filteredItems);
            }
    },[activeCategory]);

    return (
        <div>
            <div className='d-flex align-items-center justify-content-center menu mt-3'>
                <ul className='d-flex'>
                    {Menu_categorys?.map((menu_category)=>(
                            <li
                            className={` ${activeCategory === menu_category.CategoryID ? "menu_active" : ""}`}
                            onClick={() => handleCategoryClick(menu_category.CategoryID)}
                            >
                                {menu_category.CategoryName}
                        </li>
                    ))}
                </ul>
            </div>
            <div className='mt-3' style={{ marginLeft: '50px' }}>
                <ProductFrame products={Menu_itemsOfactiveCategory} />
            </div>
        </div>
    )
}

export default Menu