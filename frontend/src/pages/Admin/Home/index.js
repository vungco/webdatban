import React from 'react'
import { Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

function Home() {
    const data = {
        labels: ['Ngày 1', 'Ngày 2', 'Ngày 3', 'Ngày 4', 'Ngày 5', 'Ngày 6', 'Ngày 7'], // Tên các ngày
        datasets: [
            {
                label: 'Số lượng bàn đặt',
                data: [12, 19, 3, 5, 10, 9, 3], // Số lượng bàn đặt trong từng ngày
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
        ],
    };
    const datapie = {
        labels: ['Sáng', 'Chiều', 'Tối'], // Các nhãn
        datasets: [
            {
                label: 'Mốc Thời Gian',
                data: [30, 50, 20], // Dữ liệu
                backgroundColor: ['#ff9999', '#66b3ff', '#99ff99'], // Màu sắc của từng phần
                borderColor: ['#ff6666', '#3399ff', '#33cc33'], // Màu viền
                borderWidth: 1,
            },
        ],
    };
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            tooltip: {
                enabled: true, // Hiển thị tooltip khi hover vào phần
            },
        },
    };
    return (
        <div className='p-3'>
            <div className="border-bottom">
                <i style={{ color: '#62677399' }}>Welcome!</i>
            </div>
            <div className="row  mt-2 p-2">
                <div className="col-md-4  p-2" style={{ height: '100px' }}>
                    <div style={{ boxShadow: '0 -4px 10px 4px rgba(0, 0, 0, 0.1)', width: '100%', height: '100%', textAlign: 'center' }}>
                        <h6 className="pt-3">Tổng doanh thu </h6>
                        <p>1</p>
                    </div>
                </div>
                <div className="col-md-4  p-2" style={{ height: '100px' }}>
                    <div style={{ boxShadow: '0 -4px 10px 4px rgba(0, 0, 0, 0.1)', width: '100%', height: '100%', textAlign: 'center' }}>
                        <h6 className="pt-3">Số bàn đã đặt </h6>
                        <p>1</p>
                    </div>

                </div>
                <div className="col-md-4  p-2" style={{ height: '100px' }}>
                    <div style={{ boxShadow: '0 -4px 10px 4px rgba(0, 0, 0, 0.1)', width: '100%', height: '100%', textAlign: 'center' }}>
                        <h6 className="pt-3">Số ....</h6>
                        <p>1</p>
                    </div>
                </div>

            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <label htmlFor="startDate">Chọn Ngày Bắt Đầu</label>
                        <input type="date" id="startDate" className="form-control" />
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="endDate">Chọn Ngày Kết Thúc</label>
                        <input type="date" id="endDate" className="form-control" />
                    </div>
                    <div className="col-md-2">
                        <button className="btn btn-primary mt-4" onclick="submitDates()">Xác Nhận</button>
                    </div>
                    <div className="col-md-2">
                        <div>
                            <label htmlFor="timeFrame">Chọn Mốc Thời Gian</label>
                            <select id="timeFrame" className="form-control">
                                <option value="morning">Sáng</option>
                                <option value="afternoon">Chiều</option>
                                <option value="evening">Tối</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md-2">

                    </div>
                </div>
            </div>


            <div className='row mt-3 '>
                <div className='col-md-6'>
                    <Bar height={300} width={650} data={data} />
                </div>
                <div className='col-md-6'>
                    <div style={{ width: '60%' }}>
                        <Pie data={datapie} options={options} />
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Home