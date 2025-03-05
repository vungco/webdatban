import React, { useEffect, useState } from "react";
import feedbackApi from '../../../api/feedbackApi'
import CreateForm from "./create";
import EditForm from "./edit";

function Feedback() {
    const [Feedbacks, setFeedbacks] = useState(null);
    const [isShowFormCreate, setisShowFormCreate] = useState(false);
    const [isShowFormEdit, setisShowFormEdit] = useState(false);

    useEffect(()=>{
        GetFeedbacks();
    },[])

    function GetFeedbacks(){
        feedbackApi.getAllOfAdmin()
        .then(response=>{
            setFeedbacks(response.data);
        })
        .catch(error=>{
            console.error('có lỗi trong quá trình lấy dl: '+error);
        })
    }

    function Deletefeedback(id){
        let getconfirm = window.confirm('bạn có thực sự muốn xóa đánh giá này không ?');
        if(getconfirm){
            feedbackApi.delete(id)
            .then(response=>{
                alert('bạn đã xóa đánh giá thành công');
                GetFeedbacks();
                
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
                    GetFeedbacks={GetFeedbacks}
                    />
                    :
                    ''
                    }
            </div>
            <table className="table table-bordered table-hover">
                <thead className="table-dark">
                    <tr>
                        <th>Tên tài khoản</th>
                        <th>Nội dung</th>
                        <th>Ngày tạo</th>                        
                        
                        <th>Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    {Feedbacks?.map((feedback) => (
                        <tr 
                        key={feedback.FeedbackID}
                        >
                            <td>{feedback.user?.name}</td>
                            <td>{feedback.Content}</td>
                            <td>{feedback.CreateAt}</td>
                            <td>
                                <button
                                    className="btn btn-warning btn-sm me-2"
                                    onClick={() => setisShowFormEdit(feedback)}
                                >
                                    <i className="fa fa-edit"></i> Sửa
                                </button>
                                {isShowFormEdit.FeedbackID ==feedback.FeedbackID ?
                                <EditForm
                                setisShowFormEdit={setisShowFormEdit}
                                GetFeedbacks={GetFeedbacks}
                                data={{ UserID: feedback.UserID,
                                     name: feedback.user.name, 
                                     Content: feedback.Content, 
                                     CreateAt: feedback.CreateAt
                                    }}
                                id={feedback.FeedbackID}
                                />
                                :
                                ''
                                }
                                <button
                                    className="btn btn-danger btn-sm"
                                    onClick={() => Deletefeedback(feedback.FeedbackID)}
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

export default Feedback