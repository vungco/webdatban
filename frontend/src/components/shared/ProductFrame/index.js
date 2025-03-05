import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import Quikly from '../Quikly/Quikly';
import Notification from '../Notification';
import { apiUrl } from '../../../config';

const ProductFrame = ({ products }) => {

    const getImagePath = (productImg) => {
                try {
                  return `${apiUrl}/uploads/Categories/${productImg}`;
                } catch (error) {
                  console.error('Error loading image:', error);
                  return null; // Hoặc có thể trả về một hình ảnh mặc định
                }
              };

    return (
        <>
            <div className='row' >
                {products?.map((product) => (
                    <div className="col-md-2 text-center pro-item p-1 position-relative" key={product.id} style={{ background: '#908f8f', marginBottom: '24px' }}>
                        <div className='pro-item_child' style={{ width: '100%', height: '100%', position: 'absolute', background: '#fff', top: '1%', padding: '8px' }}>
                            <img
                                src={getImagePath(product.ImageURL)}
                                alt={product.name}
                                className="w-100 mb-2"
                            />
                            <h5>{product.Name}</h5>
                            <p className="text-danger">{product.Price}</p>
    
                        </div>
                        <Link to='/ProductDetails'><button style={{ position: 'absolute', bottom: '-5%', left: '30%', border: 'none', borderRadius: '5px', background: '#bd8133', color: '#fff', padding: '5px' }}>Xem chi tiết</button></Link>
                    </div>
                ))}
            </div>
        </>
    )
}

export default ProductFrame