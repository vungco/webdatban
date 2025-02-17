import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MenuSelection from '../../../components/shared/MenuSelection'
import tableApi from '../../../api/tableApi';


const BookingTable = ({ isVisible, onClose }) => {
    const [showMenuModal, setShowMenuModal] = useState(false);
    const [Select_tables, setSelect_tables] = useState([]);
    const [tables, settables] = useState(null);
    
    const handleBooking = (e) => {
        e.preventDefault()
        const userConfirmation = window.confirm("Bạn có muốn đặt món luôn không?");
        if (userConfirmation) {
            sessionStorage.setItem('tables',JSON.stringify(Select_tables));
            setShowMenuModal(true); // Hiển thị khung chọn bàn
        }
    };

    const handleCloseMenu = () => {
        setShowMenuModal(false); // Đóng khung chọn bàn
    };
    
    useEffect(()=>{
        tableApi.getAll()
            .then(response=>{
                settables(response.data)
            })
            .catch(console.error('co loi trong qua trinh lay tables')
            )
    },[]);

    const handleCategoryClick = (category) => {
        setActiveCategory(category);
    };

    function HandleAddSelectTables(table) {
        setSelect_tables((prevTables) => {
          // Kiểm tra xem có table nào có TableID giống với table.TableID không
          const isAlreadySelected = prevTables.some(t => t.TableID === table.TableID);
      
          if (isAlreadySelected) {
            // Nếu đã có trong mảng, xóa bỏ table
            return prevTables.filter((t) => t.TableID !== table.TableID);
          } else {
            // Nếu chưa có, thêm vào mảng
            return [...prevTables, table];
          }
        });
      }
      
      

    const [activeCategory, setActiveCategory] = useState('khaiVi');
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
                <h2>Chọn bàn</h2>

                <div className='container mt-3'>
                    <div className='row'>
                        <div className='col-md-8' style={{ border: '1px solid rgb(195, 194, 194)' }}>
                            <div className='p-1' style={{ height: '400px', overflowY: 'auto' }}>

                                <div className='row'>
                                    {tables.map((table) => (
                                        <div className="col-md-5 text-center pro-item p-1 position-relative" 
                                        key={table.TableID} 
                                        style={{ background: '#908f8f', marginBottom: '24px', height: '270px' }}>

                                            <div className='pro-item_child' 
                                            style={{ width: '100%', height: '100%', position: 'absolute', 
                                            background: '#fff', top: '1%', padding: '8px' }}>

                                                <img
                                                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWkGaBTTgKm42knmF4IpjngpCM0YLDHxBZYg&s'
                                                    alt={table.TableNumber}
                                                    className="w-100 mb-2"
                                                />
                                                <h5>{table.TableNumber}</h5>
                                                <p className="text-danger">Kích thước: {table.Capacity}</p>
                                                <p className="text-danger">{table.Status == 1 ?'đã được đặt':''}</p>
                                            </div>
                                            {table.Status == 1 ?'':
                                            <button 
                                            style={{ position: 'absolute', bottom: '-10%', left: '25%', border: 'none', 
                                                borderRadius: '5px', background: '#bd8133', color: '#fff', padding: '5px' }}
                                                onClick={()=>HandleAddSelectTables(table)}
                                                >
                                                    {Select_tables.some(t => t.TableID === table.TableID) ? 'Bỏ chọn' : 'Chọn bàn'}
                                            </button>   
                                            }
                                            
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4 '>
                            <div className='p-1' style={{ border: '1px solid rgb(195, 194, 194)', background: '#fff', height: '400px', overflowY: 'auto' }}>
                                <h5>Các bàn đã được chọn</h5>
                                {Select_tables?.map((select_table)=>(
                                <div className='d-flex align-items-center justify-content-between mt-3 pb-3' style={{ borderBottom: '1px solid #fff' }}>
                                    <div className='d-flex align-items-center position-relative mt-2'>
                                        <img style={{ width: '50px', height: '50px', borderRadius: '5px' }} src='https://images.pexels.com/photos/460537/pexels-photo-460537.jpeg?cs=srgb&dl=pexels-pixabay-460537.jpg&fm=jpg' />
                                        <p style={{ marginLeft: '4px', fontSize: '12px' }}>Bàn : {select_table.TableNumber}</p>
                                    </div>
                                    <div className='d-flex align-items-center justify-content-center flex-column'>
                                        <button className='d-flex align-items-center justify-content-center' 
                                        style={{ color: '#fff', fontSize: '12px', background: 'red', height: '20px', border: 'none' }}
                                        onClick={()=>HandleAddSelectTables(select_table)}
                                        >
                                            Xóa
                                        </button>
                                    </div>
                                </div>
                                ))}
                            </div>

                        </div>
                    </div>
                </div>



                <div className='menu-bt'>
                    <button onClick={(e)=>handleBooking(e)}>
                        Tiến hành đặt món
                    </button>
                        <MenuSelection isVisible={showMenuModal} onClose={handleCloseMenu} />
                    <button onClick={()=>onClose()}>
                        Hủy
                    </button>
                </div>

            </div>
        </div>
    );
};

export default BookingTable;