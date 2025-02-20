import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import booking_tableApi from '../../../api/booking_tableApi';

function Show_bookingTable() {
    const navigate = useNavigate();
    const [tables,settables] = useState(null);
    const BookingID = useParams().BookingID;

    const handleToOrder = () => {
        navigate('/Order'); // Chuyển đến trang Pay
    };

    const handleToTable = () => {
        navigate('/OrderDetails'); // Chuyển đến trang Pay
    };

    useEffect(()=>{
        booking_tableApi.getAllOfBooking(BookingID)
            .then(response=>{
                settables(response.data)
            })
            .catch(error=>{
                console.error('có lỗi trong quá trình lấy id')
            })
    },[])

    return (
        <div className='container-fluid w-100' style={{ background: '#10302c', padding: '80px 0 0 0' }}>
            <div className='container-fluid p-0' style={{ height: '50px', background: '#000' }}>
                <div className='container h-100 d-flex align-items-center'>
                    <p className='m-0' style={{ color: '#fff' }}>Trang chủ / </p>
                    <p className='m-0' style={{ color: '#d69c52' }}>  Các lượt đặt bàn của tôi</p>
                </div>
            </div>
            <div className='container order'>
                <div className='container  pb-3 mt-5'>
                    <table className="w-100 " style={{
                    }}>
                        <thead>
                            <tr style={{ background: '#135b50', color: 'white' }}>
                                <th scope="col">Tên bàn</th>
                                <th scope="col">Kích thước</th>
                                <th scope="col">Trạng thái</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tables?.map(table=>(
                                <tr style={{ background: '#135b50', color: 'white' }}>

                                <td>{table.table.TableNumber}</td>
                                <td>{table.table.Capacity}</td>
                                <td>{table.table.Status==0?'còn trống':'hết bàn'}</td>
                                </tr>
                            ))}
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Show_bookingTable