import React from 'react';

const sampleOrders = [
  {
    id: 'ORD001',
    customer: 'Alice Johnson',
    date: '2025-04-15',
    total: '$45.97',
    status: 'Completed',
  },
  {
    id: 'ORD002',
    customer: 'Bob Smith',
    date: '2025-04-16',
    total: '$29.99',
    status: 'Pending',
  },
  {
    id: 'ORD003',
    customer: 'Charlie Lee',
    date: '2025-04-17',
    total: '$18.99',
    status: 'Shipped',
  },
  {
    id: 'ORD004',
    customer: 'Dana Wright',
    date: '2025-04-17',
    total: '$12.99',
    status: 'Cancelled',
  },
];

const statusColors = {
  Completed: 'text-green-600 bg-green-100',
  Pending: 'text-yellow-700 bg-yellow-100',
  Shipped: 'text-blue-600 bg-blue-100',
  Cancelled: 'text-red-600 bg-red-100',
};

export default function Orders() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-green-800 mb-6">Orders</h2>
      <div className="overflow-x-auto rounded-lg shadow bg-white">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-green-100 text-green-800 font-semibold">
            <tr>
              <th className="px-6 py-4">Order ID</th>
              <th className="px-6 py-4">Customer</th>
              <th className="px-6 py-4">Date</th>
              <th className="px-6 py-4">Total</th>
              <th className="px-6 py-4">Status</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {sampleOrders.map((order) => (
              <tr key={order.id} className="border-b hover:bg-gray-50">
                <td className="px-6 py-4">{order.id}</td>
                <td className="px-6 py-4">{order.customer}</td>
                <td className="px-6 py-4">{order.date}</td>
                <td className="px-6 py-4">{order.total}</td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusColors[order.status]}`}>
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
