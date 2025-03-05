<?php

namespace App\Http\Controllers;

use App\Models\BookingTable;
use App\Models\Order;
use Illuminate\Http\Request;
use App\Models\BoongkingTable;
use Illuminate\Support\Carbon;

class StatisticalController extends Controller
{
    public function getStatistics()
{
    

    $data = collect([
        'Sum_TotalAmount' => Order::sum('TotalAmount'),
        'Count_TableID' => BookingTable::count('TableID')
    ]);

    return response()->json([
        'message' => 'đã thống kê thành công',
        'data' => $data
    ]);
}

public function getRevenueStatistics()
{
    // Lấy thời gian của đơn hàng đầu tiên và đơn hàng mới nhất
    $oldestOrder = Order::min('OrderDate');
    $latestOrder = Order::max('OrderDate');

    // Nếu không có dữ liệu, trả về dữ liệu rỗng
    if (!$oldestOrder || !$latestOrder) {
        return response()->json([
            'labels' => [],
            'datasets' => [['label' => 'Tổng doanh thu', 'data' => []]],
        ]);
    }

    $startDate = Carbon::parse($oldestOrder);
    $endDate = Carbon::parse($latestOrder);
    $totalDays = $startDate->diffInDays($endDate); // Tổng số ngày có dữ liệu

    // Chia tổng số ngày thành 7 phần bằng nhau
    $segments = 7;
    $daysPerSegment = ceil($totalDays / $segments);

    // Tính tổng doanh thu theo từng khoảng thời gian
    $revenues = Order::selectRaw("
            FLOOR(DATEDIFF(OrderDate, ?) / ?) AS time_segment,
            SUM(TotalAmount) AS total_revenue
        ", [$startDate, $daysPerSegment])
        ->groupBy('time_segment')
        ->orderBy('time_segment')
        ->get();

    // Xử lý dữ liệu cho biểu đồ
    $labels = [];
    $data = [];

    for ($i = 0; $i < $segments; $i++) {
        $segmentStart = $startDate->copy()->addDays($i * $daysPerSegment)->format('d/m/Y');
        $segmentEnd = $startDate->copy()->addDays(($i + 1) * $daysPerSegment - 1)->format('d/m/Y');
        $labels[] = "$segmentStart - $segmentEnd";

        // Kiểm tra dữ liệu trong từng segment
        $segmentData = $revenues->firstWhere('time_segment', $i);
        $data[] = $segmentData ? $segmentData->total_revenue : 0;
    }

    return response()->json([
        'labels' => $labels,
        'datasets' => [
            [
                'label' => 'Tổng doanh thu',
                'data' => $data,
                'backgroundColor' => 'rgba(75, 192, 192, 0.2)',
                'borderColor' => 'rgba(75, 192, 192, 1)',
                'borderWidth' => 1,
            ],
        ],
    ]);
}


}
