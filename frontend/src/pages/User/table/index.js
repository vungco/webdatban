import React, { useState } from 'react';
import { CheckCircle, XCircle } from 'lucide-react';

const TableSelection = () => {
  const [selectedTables, setSelectedTables] = useState([]);

  const tables = [
    'A1', 'A2', 'A3', 'A4', 'A5',
    'B1', 'B2', 'B3', 'B4', 'B5',
    'C1', 'C2', 'C3', 'C4', 'C5',
  ];

  const reservedTables = ['A3', 'B2', 'C4']; // Example of already reserved tables

  const handleTableClick = (table) => {
    if (reservedTables.includes(table)) return;
    if (selectedTables.includes(table)) {
      setSelectedTables(selectedTables.filter(t => t !== table));
    } else {
      setSelectedTables([...selectedTables, table]);
    }
  };

  const getTableStatus = (table) => {
    if (reservedTables.includes(table)) return 'reserved';
    if (selectedTables.includes(table)) return 'selected';
    return 'available';
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Chọn bàn</h2>
      <div className="grid grid-cols-5 gap-4 mb-6">
        {tables.map((table) => (
          <div
            key={table}
            className={`p-4 border rounded-lg text-center cursor-pointer transition-all duration-200 
              ${getTableStatus(table) === 'available' ? 'bg-green-200 hover:bg-green-300' : ''}
              ${getTableStatus(table) === 'selected' ? 'bg-blue-200' : ''}
              ${getTableStatus(table) === 'reserved' ? 'bg-red-200 cursor-not-allowed' : ''}
            `}
            onClick={() => handleTableClick(table)}
          >
            {table}
          </div>
        ))}
      </div>
      <div className="flex items-center space-x-4">
        <div className="flex items-center">
          <div className="w-6 h-6 bg-green-200 border rounded-sm mr-2"></div>
          <span>Bàn trống</span>
        </div>
        <div className="flex items-center">
          <div className="w-6 h-6 bg-blue-200 border rounded-sm mr-2"></div>
          <span>Bàn đang chọn</span>
        </div>
        <div className="flex items-center">
          <div className="w-6 h-6 bg-red-200 border rounded-sm mr-2"></div>
          <span>Bàn đã đặt</span>
        </div>
      </div>
    </div>
  );
};

export default TableSelection;
