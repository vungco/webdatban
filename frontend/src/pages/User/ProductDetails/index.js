import React from 'react'
import { useState } from 'react';
import Title from '../../../components/shared/Title';

function ProductDetails() {
  const [quantity, setQuantity] = useState(1);
  return (
    <div className='container-fluid w-100' style={{ background: '#10302c', padding: '80px 0 0 0' }}>
      <div className='container-fluid p-0' style={{ height: '50px', background: '#000' }}>
        <div className='container h-100 d-flex align-items-center'>
          <p className='m-0' style={{ color: '#fff' }}>Trang chủ / </p>
          <p className='m-0' style={{ color: '#d69c52' }}>Salad rau mùa sốt mác mác</p>
        </div>
      </div>
      <div className='container mt-5 pb-5'>
        <div className='row'>
          <div className='col-md-9'>
            <div className='row'>
              <div className='col-md-5'>
                <img className='w-100' src='https://bizweb.dktcdn.net/thumb/large/100/469/097/products/untitled1bb4fdbb3bd7845448a799-a1c5a559-3505-435f-9278-d7ba29e9c529.jpg?v=1667882632337' />
              </div>
              <div className='col-md-7'>
                <p style={{ fontFamily: " 'Dancing Script', cursive ", fontSize: '50px', color: '#fff' }}>Salad rau mùa sốt mác mác</p>
                <p style={{ color: 'red', fontSize: '30px' }}>68.000đ</p>
                <p style={{ color: '#fff', fontSize: '20px' }}>Số lượng :</p>
                <div className='d-flex' style={{ width: '100px', height: '30px' }}>
                  <button
                    className='border-0' style={{ width: '50px', backgroundColor: '#d69c52', marginRight: '8px', borderRadius: '5px' }}>-</button>
                  <input className='w-100 border-0' type="number"
                    style={{ borderRadius: '5px' }}
                    value={quantity}
                    readOnly></input>
                  <button
                    className='border-0' style={{ width: '50px', backgroundColor: '#d69c52', marginLeft: '8px', borderRadius: '5px' }}>+</button>
                </div>
                <button className='bt-booking mt-4' style={{ width: '180px' }}>Thêm vào giỏ hàng</button>
              </div>
            </div>
            {/* mo ta */}
            <div className='mt-3 text-white'>
              <Title
                title='Mô tả món ăn'></Title>
              <p className='mt-3'>
                Salad rau mùa sốt mác mác được lựa chọn từ những loại rau củ ẩm thực phương Tây như xà lách lolo,
                xà lách carron, dầu oliu, kết hợp với hương đồng cỏ nội trong văn hoá ẩm thực Việt Nam là củ dền,
                táo đỏ, táo xanh, chanh dây và rau quế. Tất cả được hòa quyện dưới lớp sốt mác mác rau mùi được cấu
                thành bởi 3 thành phần chính là chanh dây, rau mùi và mayonaise, đem đến hương vị độc đáo, giàu vitamin C và chất xơ.
              </p>
              <h4>Thành phần :</h4>
              <p>Táo đỏ, táo xanh, củ dền, cà rốt, xà lách lolo, xà lách carron, chanh dây, dầu oliu, rau quế, mayonaise,...</p>
              <h4>Khẩu phần :</h4>
              <p>1 người</p>
              <h4>Năng lượng :</h4>
              <p>Protein: 2.2, Carbs: 14.4, Fat: 12.2, Total Kcal: 157.8</p>
            </div>
          </div>
          <div className='col-md-3 p-2'>
            <div className='' style={{ border: '1px solid #d69c52', borderRadius: '10px', background: '#d69c52', width: '100%', height: '440px', }}>
              <p style={{ color: '#fff', fontSize: '20px', textAlign: 'center', paddingTop: '8px' }}>Có thể bạn đang tìm</p>
              <div style={{ background: '#10302c', width: '100%', height: '87.5%', border: 'none', borderRadius: '0 0 10px 10px' }}>
                <div className='row p-2'>
                  <div className="col-md-5">
                    <img className='w-100' style={{ borderRadius: '5px' }} src='https://bizweb.dktcdn.net/thumb/medium/100/469/097/products/1c8da310231574e189b9012e3125a3.jpg?v=1667881665957' />
                  </div>
                  <div className="col-md-7 d-flex flex-column  justify-content-center">
                    <p style={{ color: '#fff' }}>Dương cam chi lộ</p>
                    <p style={{ color: 'red' }}>55.000đ</p>
                    <button style={{ width: '100px', color: '#fff', height: '30px', background: '#d69c52', border: 'none', borderRadius: '5px' }}>Đặt món</button>
                  </div>
                </div>

                <div className='row p-2'>
                  <div className="col-md-5">
                    <img className='w-100' style={{ borderRadius: '5px' }} src='https://bizweb.dktcdn.net/thumb/medium/100/469/097/products/19fe207c1918443c493a8ffc37de05.jpg?v=1667881644533' />
                  </div>
                  <div className="col-md-7 d-flex flex-column  justify-content-center">
                    <p style={{ color: '#fff' }}>Trà nhài nhãn</p>
                    <p style={{ color: 'red' }}>48.000đ</p>
                    <button style={{ width: '100px', color: '#fff', height: '30px', background: '#d69c52', border: 'none', borderRadius: '5px' }}>Đặt món</button>
                  </div>
                </div>

                <div className='row p-2'>
                  <div className="col-md-5">
                    <img className='w-100' style={{ borderRadius: '5px' }} src='https://bizweb.dktcdn.net/thumb/medium/100/469/097/products/1f8b8eb2049ed4362bd32f0899192c.jpg?v=1667881453383' />
                  </div>
                  <div className="col-md-7 d-flex flex-column  justify-content-center">
                    <p style={{ color: '#fff' }}>Trà sữa ô long</p>
                    <p style={{ color: 'red' }}>45.000đ</p>
                    <button style={{ width: '100px', color: '#fff', height: '30px', background: '#d69c52', border: 'none', borderRadius: '5px' }}>Đặt món</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default ProductDetails