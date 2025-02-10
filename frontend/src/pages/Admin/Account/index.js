import React, { useState } from "react";
import TableComponent from '../../../components/shared/TableComponent'
import ModalForm from '../../../components/shared/ModalForm'
import ConfirmDialog from '../../../components/shared/ConfirmDialog'

function Account() {
    const columns = [
        { label: "ID", key: "id" },
        { label: "Tên nhân viên", key: "name" },
        { label: "Email", key: "email" },
        { label: "Số điện thoại", key: "phone" },
    ];

    const [employees, setEmployees] = useState([
        { id: 1, name: "Nguyễn Văn A", email: "a@example.com", phone: "0123456789" },
        { id: 2, name: "Trần Thị B", email: "b@example.com", phone: "0987654321" },
    ]);

    const [showForm, setShowForm] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const [formData, setFormData] = useState({ id: "", name: "", email: "", phone: "" });

    const [showConfirm, setShowConfirm] = useState(false);
    const [deleteItem, setDeleteItem] = useState(null);

    const handleAdd = () => {
        setFormData({ id: "", name: "", email: "", phone: "" });
        setIsEdit(false);
        setShowForm(true);
    };

    const handleEdit = (employee) => {
        setFormData(employee);
        setIsEdit(true);
        setShowForm(true);
    };

    const handleSave = () => {
        if (isEdit) {
            setEmployees(employees.map(emp => (emp.id === formData.id ? formData : emp)));
        } else {
            setEmployees([...employees, { ...formData, id: employees.length + 1 }]);
        }
        setShowForm(false);
    };

    const handleDelete = (employee) => {
        setDeleteItem(employee);
        setShowConfirm(true);
    };

    const confirmDelete = () => {
        setEmployees(employees.filter(emp => emp.id !== deleteItem.id));
        setShowConfirm(false);
    };
    return (
        <div className="p-3">
            <h4>Quản lý tài khoản</h4>
            <TableComponent
                columns={columns}
                data={employees}
                onAdd={handleAdd}
                onEdit={handleEdit}
                onDelete={handleDelete}
            />

            <ModalForm
                show={showForm}
                onClose={() => setShowForm(false)}
                onSave={handleSave}
                formData={formData}
                setFormData={setFormData}
                isEdit={isEdit}
            />

            <ConfirmDialog
                show={showConfirm}
                onClose={() => setShowConfirm(false)}
                onConfirm={confirmDelete}
            />
        </div>
    )
}

export default Account