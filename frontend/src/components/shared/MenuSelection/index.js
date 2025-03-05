import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import menu_itemApi from '../../../api/menu_itemApi';
import menu_categoryApi from '../../../api/menu_categoryApi';
import { apiUrl } from '../../../config';

const MenuSelection = ({ isVisible, onClose }) => {
    const navigate = useNavigate();

    const [activeCategory, setActiveCategory] = useState(null);
    const [Menu_items, setMenu_items] = useState(null);
    const [Menu_itemsOfactiveCategory, setMenu_itemsOfactiveCategory] = useState(null);
    const [Menu_categorys, setMenu_categorys] = useState(null);
    const [Select_menuItems, setSelect_menuItems] = useState([]);
    const [TotalPrice, setTotalPrice] = useState(0);

    const formatNumber = (number) => {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    };
    
    function HandleAddSelectMenuItems(menu_item) {
        setSelect_menuItems((prevTables) => {
          // Kiểm tra xem có table nào có TableID giống với table.TableID không
          const isAlreadySelected = prevTables.some(t => t.MenuItemID === menu_item.MenuItemID);
      
          if (isAlreadySelected) {
            // Nếu đã có trong mảng, xóa bỏ table
            return prevTables.filter((t) => t.MenuItemID !== menu_item.MenuItemID);
          } else {
            // Nếu chưa có, thêm vào mảng
            return [...prevTables, menu_item];
          }
        });
      }

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

    useEffect(() => {
        if (Menu_items !== null) {
            if(!Menu_items[0]?.Quantity){
                const updatedItems = Menu_items.map(menu_item => ({
                    ...menu_item,
                    Quantity: 1, // Thêm cột Quantity mặc định là 1
                }));
                setMenu_items(updatedItems);
                GetMenuItemOfCategory(updatedItems);

            }
        GetMenuItemOfCategory(Menu_items);
        }
    }, [Menu_items]);

    function GetMenuItemOfCategory(data){
        const filteredItems = data.filter((item) => item.CategoryID === activeCategory);
        setMenu_itemsOfactiveCategory(filteredItems);
    }

    const handleToBill = () => {
        sessionStorage.setItem('menu_items',JSON.stringify(Select_menuItems));
        sessionStorage.setItem('total_price',JSON.stringify(TotalPrice));
        navigate('/Bill');
    };

    const calculateTotalPrice = (menu_items) => {
        return menu_items.reduce((total, item) => total + (item.Price || 0), 0);
    };

    const getImagePath = (productImg) => {
            try {
              return `${apiUrl}/uploads/Categories/${productImg}`;
            } catch (error) {
              console.error('Error loading image:', error);
              return null; // Hoặc có thể trả về một hình ảnh mặc định
            }
          };

        const updateQuantity = (id, amount) => {
          setMenu_items(prevItems =>
            prevItems.map(item =>
                item.MenuItemID == id ? 
                { ...item, Quantity : item.Quantity+amount } // Không cho xuống dưới 1
                : item
            )
          );
        };
        

    useEffect(()=>{
        if(Select_menuItems){
            const sumPrice = Select_menuItems.reduce((total, item) => total + (item.Price || 0), 0);
            setTotalPrice(sumPrice);
        }
    },[Select_menuItems]);

    if (!isVisible) {
        return null;
    }

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
                                    {Menu_categorys?.map((menu_category)=>(
                                        <li
                                        className={` ${activeCategory === menu_category.CategoryID ? "menu_active" : ""}`}
                                        onClick={() => handleCategoryClick(menu_category.CategoryID)}
                                        >
                                            {menu_category.CategoryName}
                                    </li>
                                    ))}
                                    
                                </ul>

                                <div className='row' style={{ marginTop: '80px' }}>
                                    {Menu_itemsOfactiveCategory?.map((product) => (
                                        <div className="col-md-5 text-center pro-item p-1 position-relative" key={product.MenuItemID} style={{ background: '#908f8f', marginBottom: '24px', height: '290px' }}>
                                            <div className='pro-item_child' style={{ width: '100%', height: '100%', position: 'absolute', background: '#fff', top: '1%', padding: '8px' }}>
                                                <img
                                                    src={getImagePath(product.ImageURL)}
                                                    alt={product.Name}
                                                    className="w-100 mb-2"
                                                />
                                                <h5>{product.Name}</h5>
                                                <p className="text-danger">{formatNumber(product.Price)}</p>
                                                <div className='d-flex' style={{ width: '100%', height: '30px' }}>
                                                <button
                                                    className='border-0' style={{ width: '50px', backgroundColor: '#d69c52', marginRight: '8px', borderRadius: '5px',height:'100%'}}
                                                    onClick={() => updateQuantity(product.MenuItemID, -1)}
                                                >-</button>
                                                <input className='w-100 border-0' type="number"
                                                    style={{ borderRadius: '5px', textAlign: "center"
                                                    }}
                                                    value={product.Quantity}
                                                    readOnly></input>
                                                <button
                                                    className='border-0' style={{ width: '50px', backgroundColor: '#d69c52', marginLeft: '8px', borderRadius: '5px',height:'100%' }}
                                                    onClick={() => updateQuantity(product.MenuItemID, 1)}
                                                >+</button>
                                                </div>
                                            </div>
                                            
                                            {product.Status ?
                                            <button 
                                            style={{ position: 'absolute', bottom: '-10%', left: '25%', border: 'none', 
                                            borderRadius: '5px', background: '#bd8133', color: '#fff', padding: '5px' }}
                                            onClick={()=>HandleAddSelectMenuItems(product)}
                                            >
                                                {Select_menuItems.some(t => t.MenuItemID === product.MenuItemID) ? 'Bỏ chọn' : 'Chọn món'}
                                            </button>
                                            :''
                                            }
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4 '>
                            <div className='p-1' style={{ border: '1px solid rgb(195, 194, 194)', background: '#fff', height: '400px',position:'relative' }}>
                                <div style={{height:'90%',overflowY: 'auto'}}>
                                    <h5>Các món đã chọn</h5>
                                    {Select_menuItems?.map((select_menuItem)=>(
                                    <div className='d-flex align-items-center justify-content-between mt-3 pb-3' style={{ borderBottom: '1px solid #fff',height:'100px' }}>
                                        <div className='d-flex align-items-center position-relative mt-2'>
                                            <img style={{ width: '50px', height: '50px', borderRadius: '5px' }} src={getImagePath(select_menuItem.ImageURL)} />
                                            <div >
                                                <p style={{ marginLeft: '4px', fontSize: '12px' }}>{select_menuItem.Name}</p>
                                                <p style={{ marginLeft: '4px', fontSize: '12px' }}>Số lượng: {select_menuItem.Quantity}</p>
                                            </div>
                                            
                                        </div>
                                        
                                        <div className='d-flex align-items-center justify-content-center flex-column'>
                                            <p style={{ color: '#d69c52', fontSize: '12px', margin: '0' }}>{formatNumber(select_menuItem.Price)}</p>
                                            <button className='d-flex align-items-center justify-content-center' style={{ color: '#fff', fontSize: '12px', background: 'red', height: '20px', border: 'none' }}
                                            onClick={()=>HandleAddSelectMenuItems(select_menuItem)}
                                            >
                                                Xóa</button>
                                        </div>


                                    </div>
                                    ))}
                                </div>
                                <div style={{position:'absolute',button:'1px',fontSize:'20px',width:'100%',overflowX: 'auto'}}>
                                    <span>Tổng:</span>
                                    <span>{formatNumber(TotalPrice)}</span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>



                <div className='menu-bt'>
                    <button onClick={()=>handleToBill()}>
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