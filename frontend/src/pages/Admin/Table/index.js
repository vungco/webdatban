import React, { useEffect, useState } from "react";
import tableApi from '../../../api/tableApi'
import CreateForm from "./create";
import EditForm from "./edit";

function Table() {
    const [Tables, setTables] = useState(null);
    const [isShowFormCreate, setisShowFormCreate] = useState(false);
    const [isShowFormEdit, setisShowFormEdit] = useState(false);

    useEffect(()=>{
        GetTables();
    },[])

    function GetTables(){
        tableApi.getAll()
        .then(response=>{
            setTables(response.data);
        })
        .catch(error=>{
            console.error('có lỗi trong quá trình lấy dl: '+error);
        })
    }

    function Deletetable(id){
        let getconfirm = window.confirm('bạn có thực sự muốn xóa bàn này không ?');
        if(getconfirm){
            tableApi.delete(id)
            .then(response=>{
                alert('bạn đã xóa bàn thành công');
                GetTables();
                
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
                    GetTables={GetTables}
                    />
                    :
                    ''
                    }
            </div>
            <table className="table table-bordered table-hover">
                <thead className="table-dark">
                    <tr>
                        <th>Tên bàn</th>
                        <th>Kích thước bàn</th>
                        <th>Trạng thái</th>                        
        
                        <th>Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    {Tables?.map((table) => (
                        <tr 
                        key={table.TableID}
                        >
                            <td>{table.TableNumber}</td>
                            <td>{table.Capacity}</td>
                            <td>{table.Status==0?'còn bàn':'đã đặt'}</td>
                            <td>
                                <button
                                    className="btn btn-warning btn-sm me-2"
                                    onClick={() => setisShowFormEdit(table)}
                                >
                                    <i className="fa fa-edit"></i> Sửa
                                </button>
                                {isShowFormEdit.TableID ==table.TableID ?
                                <EditForm
                                setisShowFormEdit={setisShowFormEdit}
                                GetTables={GetTables}
                                data={{ TableNumber: table.TableNumber,
                                     Capacity: table.Capacity, 
                                     Status: table.Status, 
                                    }}
                                id={table.TableID}
                                />
                                :
                                ''
                                }
                                <button
                                    className="btn btn-danger btn-sm"
                                    onClick={() => Deletetable(table.TableID)}
                                >
                                    <i className="fa fa-trash"></i> Xóa
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Table