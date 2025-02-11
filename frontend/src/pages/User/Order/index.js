import React from 'react'
import { useNavigate } from 'react-router-dom';

function Order() {
    const navigate = useNavigate();

    const handleToOrderDetails = () => {
        navigate('/OrderDetails'); // Chuyển đến trang Pay
    };
    return (
        <div className='container-fluid w-100' style={{ background: '#10302c', padding: '80px 0 0 0' }}>
            <div className='container-fluid p-0' style={{ height: '50px', background: '#000' }}>
                <div className='container h-100 d-flex align-items-center'>
                    <p className='m-0' style={{ color: '#fff' }}>Trang chủ / </p>
                    <p className='m-0' style={{ color: '#d69c52' }}>  Đơn hàng của tôi</p>
                </div>
            </div>
            <div className='container order'>
                <div className='container  pb-3 mt-5'>
                    <table className="w-100 " style={{
                    }}>
                        <thead>
                            <tr style={{ background: '#135b50', color: 'white' }}>
                                <th scope="col">STT</th>
                                <th scope="col">Mã đơn hàng</th>
                                <th scope="col">Ngày đặt</th>

                                <th scope="col">Trạng thái đơn hàng</th>
                                <th scope="col">Chi tiết đơn hàng</th>
                                <th scope="col" />
                            </tr>
                        </thead>
                        <tbody>
                            <tr style={{ background: '#135b50', color: 'white' }}>

                                <td>1</td>
                                <td>1</td>
                                <td>1</td>
                                <td>1</td>

                                <td><i className="fa-solid fa-eye" onClick={handleToOrderDetails} /></td>
                                <td style={{ color: 'red' }}>xóa</td>
                            </tr>
                        </tbody>
                    </table>

                </div>
            </div>
        </div>
    )
}

export default Order