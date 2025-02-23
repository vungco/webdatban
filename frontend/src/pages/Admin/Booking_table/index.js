import React, { useEffect, useState } from "react";
import booking_tableApi from '../../../api/booking_tableApi'
import CreateForm from "./create";
import EditForm from "./edit";
import { useParams } from 'react-router-dom';


function Booking_table() {
    const {BookingID,CustomerID} = useParams();

    const [Booking_tables, setBooking_tables] = useState(null);
    const [isShowFormCreate, setisShowFormCreate] = useState(false);
    const [isShowFormEdit, setisShowFormEdit] = useState(false);

    useEffect(()=>{
        GetBooking_tables();
    },[])

    function GetBooking_tables(){
        booking_tableApi.getAllOfBooking(BookingID)
        .then(response=>{
            setBooking_tables(response.data);
        })
        .catch(error=>{
            console.error('có lỗi trong quá trình lấy dl: '+error);
            setBooking_tables([])
        })
    }

    function Deletebooking_table(id){
        let getconfirm = window.confirm('bạn có thực sự muốn xóa các bàn thuộc lượt đặt này không ?');
        if(getconfirm){
            booking_tableApi.delete(id)
            .then(response=>{
                alert('bạn đã xóa các bàn đã đặt thành công');
                GetBooking_tables();
                
            })
            .catch(error=>{
                console.error('có lỗi trong quá trình xóa dl: '+error);
            })
        }
    }
    
    return (
        
        <div className="container mt-3 ">
            <div className="d-flex justify-content-between mb-3">
                <button className="btn btn-primary" 
                onClick={()=>setisShowFormCreate(true)}
                >
                    <i className="fa fa-plus"></i> Thêm
                </button>
                    {isShowFormCreate?
                    <CreateForm
                    setisShowFormCreate={setisShowFormCreate}
                    GetBooking_tables={GetBooking_tables}
                    BookingID={BookingID}
                    />
                    :
                    ''
                    }
                <button
                    className="btn btn-danger btn-sm"
                    onClick={() => Deletebooking_table(BookingID)}
                >
                    <i className="fa fa-trash"></i> Xóa
                </button>
            </div>
            <table className="table table-bordered table-hover">
                <thead className="table-dark">
                    <tr>
                        <th>Tên bàn</th>
                    
                    </tr>
                </thead>
                <tbody>
                    {Booking_tables?.map((booking_table) => (
                        <tr 
                        key={booking_table.TableID}
                        >
                            <td>{booking_table.table.TableNumber}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Booking_table