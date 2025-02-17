
import React, { useState, useEffect } from "react";
import { formatNumber } from "../../../components/utils/format_number";
import VoucherShop from "./show_voucher";
import bankingApi from "../../../api/bankingApi";
import table_bookingApi from "../../../api/table_bookingApi";
import booking_tableApi from "../../../api/booking_tableApi";
import orderApi from "../../../api/orderApi";
import order_detailApi from "../../../api/order_detailApi";
import { useNavigate } from 'react-router-dom';


function Bill() {
    const [timeLeft, setTimeLeft] = useState(3600);
    const [CustomerID, setCustomerID] = useState(null);
    const [menu_items, setmenu_items] = useState();
    const [table_bookings, settable_bookings] = useState();
    const [tables, settables] = useState();
    const [total_price, settotal_price] = useState(0);
    const [show_formVoucher, setshow_formVoucher] = useState(false);
    const [Promotion, setPromotion] = useState(null);
    const navigate = useNavigate();

    function HandleCheckBanking(){
        alert('vui lòng đợi hệ thống đang kiểm tra');
        bankingApi.check()
            .then(response=>{
                //1.    tiến hành tạo table đặt 
                createTableBooking()
            })
            .catch(error=>{
                console.error('có lỗi trong quá trình xác thực chuyển khoản: ',error)
            })
    }

    function createTableBooking(){
        table_bookingApi.create(table_bookings)
            .then(response=>{
                createTable(response.data.BookingID);
                createOrder(response.data.BookingID);
            })
            .catch(error=>{
                console.error('có lỗi trong quá trình tạo lượt đặt: ',error)
            })
    }

    function createTable(BookingID){
        tables.forEach(table=>{
            let data = {
                BookingID,
                TableID: table.TableID,
            }
            booking_tableApi.create(data)
            .then(response=>{
                //tiến hành đặt bàn
            })
            .catch(error=>{
                console.error('có lỗi trong quá trình tạo lượt đặt: ',error)
            })
        })
    }

    function createOrder(BookingID){
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0'); // Lấy giờ (00-23)
        const minutes = now.getMinutes().toString().padStart(2, '0'); // Lấy phút (00-59)

        const timeString = `${hours}:${minutes}`;

        const order = {
            BookingID : BookingID,
            CustomerID : table_bookings.CustomerID,
            PromotionID: Promotion==null?Promotion:'',
            OrderDate: timeString,
            TotalAmount: total_price,
        }

        orderApi.create(order)
            .then(response=>{
                createOrderDetail(response.data.OrderID);
            })
            .catch(error=>{
                console.error('có lỗi trong quá trình tạo đơn hàng: ',error)
            })
    }

    function createOrderDetail(OrderID){
        menu_items.forEach(menu_item=>{
            let data = {
                OrderID,
                MenuItemID: menu_item.MenuItemID,
                Quantity: menu_item.Quantity?menu_item.Quantity:1,
                Price:menu_item.Price,
            }
            order_detailApi.create(data)
            .then(response=>{
                //tiến hành đặt bàn
                
            })
            .catch(error=>{
                console.error('có lỗi trong quá trình tạo đơn hàng chi tiết: ',error)
            })
        })
        HandleClean();
    }

    function HandleClean(){
        setTimeout(()=>{
            sessionStorage.clear();
            navigate('/Thanks')
        },3000)
    }

    const onCloseFormVoucher = () => {
        setshow_formVoucher(false);
    }

    useEffect(() => {
        const parTables = JSON.parse(sessionStorage.getItem('tables'));
        const parTableBookings = JSON.parse(sessionStorage.getItem('table_bookings'));
        const parMenuItems = JSON.parse(sessionStorage.getItem('menu_items'));
        const parTotal_price = JSON.parse(sessionStorage.getItem('total_price'));

        setmenu_items(parMenuItems);
        settable_bookings(parTableBookings);
        settables(parTables);
        settotal_price(parTotal_price);
    }, []);

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev <= 1) {
                    clearInterval(timer); // Dừng đếm ngược khi hết giờ
                    return 0;
                }
                return prev - 1; // Giảm 1 giây mỗi lần
            });
        }, 1000);

        return () => clearInterval(timer); // Dọn sạch bộ đếm nếu component unmount
    }, []);
    const formatTime = (seconds) => {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;
        return `${hours.toString().padStart(2, "0")}:${minutes
            .toString()
            .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
    };
    return (
        <div className='container-fluid w-100' style={{ background: '#10302c', padding: '80px 0 0 0' }}>
            <div className='container-fluid p-0' style={{ height: '50px', background: '#000' }}>
                <div className='container h-100 d-flex align-items-center'>
                    <p className='m-0' style={{ color: '#fff' }}>Trang chủ / </p>
                    <p className='m-0' style={{ color: '#d69c52' }}>  Thông tin đặt bàn</p>
                </div>
            </div>
            <div className='container text-white pb-3 mt-5'>
                <div className='d-flex align-items-center'>
                    <h4>Trạng thái:</h4>
                    <p className='m-0' style={{ color: ' #bd8133', paddingLeft: '12px' }}>Chờ xác nhận</p>
                </div>
                <div className='row'>
                    <div className='col-md-8 '>
                        <h5>Thông tin bàn</h5>
                        <div className='row'>
                            <div className='col-md-4'>
                                <p>
                                    <span>Khách hàng:</span>
                                    <span>{table_bookings?.FullName}</span>
                                </p>
                                <p>
                                    <span>Số điện thoại:</span>
                                    <span>{table_bookings?.PhoneNumber}</span>
                                </p>
                                <p>
                                    <span>Thời gian:</span>
                                    <span>{table_bookings?.BookingTime}</span>
                                </p>
                            </div>
                            <div className='col-md-8'>
                                <div style={{ border: '1px solid #fff' }}>
                                        <div className='row p-2'>
                                        <div className='col-md-9'>Sản phẩm</div>
                                        <div className='col-md-3'>Đơn giá</div>
                                    </div>
                                    {menu_items?.map((menu_item)=>(
                                    <>
                                    <div className='row p-2 w-100 m-0 align-items-center' style={{ borderTop: '1px solid #fff' }} >
                                        <div className='col-md-9 d-flex align-items-center'>
                                            <img style={{ width: '108px' }} src={menu_item.ImageURL} />
                                            <div style={{ marginLeft: '8px' }}>
                                                <p>{menu_item.Name}</p>
                                                {/* <button style={{ border: 'none', color: '#c8760b', background: 'none' }}>Xóa</button> */}
                                            </div>
                                        </div>
                                        <div className='col-md-3' style={{ color: '#c8760b' }}>{formatNumber(menu_item.Price)}</div>
                                    </div>
                                    </>
                                    ))}
                                    {/* <div className='row p-2 w-100 m-0 align-items-center' style={{ borderTop: '1px solid #fff' }} >
                                        <div className='col-md-9 d-flex align-items-center'>
                                            <span style={{ width: '108px' }}>Tổng tiền: </span>
                                            <div style={{ marginLeft: '8px' }}>
                                                
                                            </div>
                                        </div>
                                        <span className='col-md-3' style={{ color: '#c8760b' }}>{formatNumber(total_price)}</span>
                                    </div> */}
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='col-md-4'>
                        <h5>Hóa đơn</h5>
                        <button onClick={()=>setshow_formVoucher(true)}>Voucher Shop </button>
                        {show_formVoucher && (
                        <VoucherShop 
                            setPromotion= {setPromotion}
                            onClose={onCloseFormVoucher}
                            Promotion={Promotion}
                        />
                        )
                        }
                        
                        <div className='mt-2' style={{ borderBottom: '1px solid #fff' }}>
                            <div className='d-flex align-items-center justify-content-between '>
                                <p className='d-flex align-items-center'>
                                    <span>Tổng tiền: </span>
                                    <span style={{ color: 'red' }}>(100%)</span>
                                </p>
                                <p>{formatNumber(total_price)}</p>
                            </div>
                        {Promotion? 
                        <>
                        <div className='d-flex align-items-center justify-content-between '>
                            <p className='d-flex align-items-center'>
                                <span>Giảm giá: </span>
                            </p>
                            <p>{formatNumber(Promotion.Discount)}</p>
                        </div>

                        <div className='d-flex align-items-center justify-content-between '>
                        <p className='d-flex align-items-center'>
                            <span>Thanh toán: </span>
                        </p>
                        <p>{formatNumber(total_price-Promotion.Discount)}</p>
                        </div>
                        </>
                        :''}
                            

                        </div>
                        <div className=' mt-2 d-flex align-items-center justify-content-center flex-column'>
                            <p style={{ color: '#c8760b', padding: '8px', border: '1px solid #c8760b', borderRadius: '5px' }}>
                                Quý khách vui lòng chuyển khoản với nd : Tên khách hàng-số điện thoại
                            </p>
                            <p style={{ color: '#c8760b', padding: '8px', border: '1px solid #c8760b', borderRadius: '5px' }}>
                                Hệ thống sẽ check lại trong vòng vài phút và phản hồi vào phần đặt hàng của quý khách ạ.
                            </p>
                            <img style={{ width: '200px' }} src='qr.jpg' />
                            <div style={{ textAlign: "center", fontSize: "24px", marginTop: "20px" }}>
                                <h5>Vui lòng thanh toán trong : </h5>
                                <div style={{ fontWeight: "bold", color: "red" }}>{formatTime(timeLeft)}</div>
                            </div>
                            <div style={{ color: '#c8760b', padding: '8px', border: '1px solid #c8760b', borderRadius: '5px' }}>
                                <button
                                    style={{backgroundColor:'#198754',color:'white',fontSize:'22px'}}
                                    onClick={()=>{HandleCheckBanking()}}
                                >
                                    Đã thanh toán</button>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Bill