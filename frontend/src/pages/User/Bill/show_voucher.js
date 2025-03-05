import React, { useState ,useEffect } from 'react';
import promotionApi from '../../../api/promotionApi';
import { formatNumber } from '../../../components/utils/format_number';

const VoucherShop =({setPromotion , onClose,Promotion}) =>{
    
    const [Promotions, setPromotions] = useState([]);
    const [VoucherSelected, setVoucherSelected] = useState([]);

    function handleSaveVoucher(){
        if(VoucherSelected.length>0){
            setPromotion(VoucherSelected[0]);
            onClose();
        }else{
            alert('vui lòng chọn 1 voucher để áp dụng hoặc ấn đóng để hủy');
        }
    }

    const toggleVoucher = (voucher) => {
        setVoucherSelected((prev) => {
          const exists = prev.some((item) => item.PromotionID === voucher.PromotionID);
      
          if (exists) {
            return []
          } else {
            return [voucher];
          }
        });
      };
      

    useEffect(()=>{
        promotionApi.getAll()
            .then(response=>{
                setPromotions(response.data)
                console.log(response.data)
            })
            .catch(error=>{
                console.error('có lỗi trong quá trình lấy mã giảm giá: ',error)
            })
        if(Promotion!=null){
            VoucherSelected.push(Promotion);
        }
    },[])

    return ( 
        <div className="modal-overlay">
            <div className="modal-content">
                <h4 style={{color:'black'}}> Chọn voucher</h4>
                            {Promotions.length>0 ? Promotions.map(promiton=>(
                                <div className='row' 
                            style={{ border: '1px solid', alignItems: 'center', marginBottom: '12px',cursor:'pointer' }} 
                            // key={}
                            onClick={() => toggleVoucher(promiton)}
                            >
                                <div className='col-md-4 col-4'>
                                    <img style={{ width: '80%', height: '80%' }} src={`https://static.vecteezy.com/system/resources/previews/048/732/641/non_2x/gift-voucher-neon-sign-with-brick-wall-background-free-vector.jpg`} alt={`Voucher shop`} />
                                </div>
                                <div className='col-md-7 col-7'>
                                    <p style={{color:'black'}}>Giảm {formatNumber(promiton.Discount)} VNĐ</p>
                                </div>
                                <div className='col-md-1 col-1'>
                                    <input 
                                        type='radio' name='selectVoucherShip'
                                        checked={VoucherSelected.some(voucher => voucher?.PromotionID==promiton?.PromotionID)}
                                         // Hàm xử lý sự kiện khi checkbox thay đổi
                                    />
                                </div>
                            </div>
                            ))
                        :
                            <p style={{color:'black'}}>Không có voucher nào cả</p>
                            }
                            
                <div style={{position:'absolute',bottom:'4%',right:'4%'}}>
                    <button type="submit" className="btn btn-primary" 
                    onClick={() => handleSaveVoucher()}
                    >Lưu</button>
                    <button type="button" className="btn btn-secondary"  
                    style={{marginLeft:'10px'}}
                    onClick={()=>onClose()}
                        >Đóng</button>
                </div> 
            </div>
        </div>
     );
}

export default VoucherShop;