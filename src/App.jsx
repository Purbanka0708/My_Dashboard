import React from "react";
import { Line, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  // Line Chart Data
  const lineData = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Revenue",
        data: [1200, 1900, 3000, 5000, 2400, 3200],
        borderColor: "#4A90E2",
        backgroundColor: "rgba(74, 144, 226, 0.2)",
        tension: 0.4,
      },
    ],
  };

  // Bar Chart Data
  const barData = {
    labels: ["Product A", "Product B", "Product C", "Product D"],
    datasets: [
      {
        label: "Sales",
        data: [400, 700, 900, 500],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4CAF50"],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
  };

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-900 text-white p-6">
        <div className="text-2xl font-bold mb-6">Logo</div>
        <nav>
          <ul className="space-y-4">
            {["Dashboard", "Analytics", "Projects", "Messages", "Settings", "Logout"].map((item) => (
              <li
                key={item}
                className="p-2 rounded hover:bg-blue-700 cursor-pointer transition"
              >
                {item}
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        {/* Header */}
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
          <div className="flex items-center space-x-4">
            <button className="bg-gray-200 p-2 rounded-full">
              <span className="text-gray-600">🔔</span>
            </button>
            <img
              src="https://via.placeholder.com/40"
              alt="Profile"
              className="w-10 h-10 rounded-full"
            />
          </div>
        </header>

        {/* Stats Overview */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {["Revenue", "Users", "Performance", "Orders"].map((stat, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <h2 className="text-xl font-medium text-gray-600">{stat}</h2>
              <p className="text-3xl font-bold text-gray-800 mt-2">1234</p>
            </div>
          ))}
        </section>

        {/* Charts Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
          {/* Line Chart */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-xl font-medium text-gray-600 mb-4">
              Revenue Over Time
            </h2>
            <Line data={lineData} options={options} />
          </div>

          {/* Bar Chart */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-xl font-medium text-gray-600 mb-4">Sales Data</h2>
            <Bar data={barData} options={options} />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
