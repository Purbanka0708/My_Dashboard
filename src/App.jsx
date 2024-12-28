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
  const lineData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Monthly Revenue",
        data: [1200, 2500, 3000, 4000, 4500, 5000],
        borderColor: "#3B82F6",
        backgroundColor: "rgba(59, 130, 246, 0.3)",
        tension: 0.4,
      },
    ],
  };

  const barData = {
    labels: ["Product A", "Product B", "Product C", "Product D"],
    datasets: [
      {
        label: "Sales",
        data: [400, 700, 1200, 900],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4CAF50"],
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
    },
  };

  return (
    <div className="min-h-screen bg-light flex">
      {/* Sidebar */}
      <aside className="w-64 bg-primary text-white flex flex-col p-6">
        <div className="text-2xl font-bold mb-8">Dashboard</div>
        <nav className="flex-1">
          <ul className="space-y-6">
            {["Overview", "Analytics", "Projects", "Messages", "Settings"].map(
              (item) => (
                <li
                  key={item}
                  className="text-lg hover:bg-accent hover:text-white px-4 py-2 rounded transition"
                >
                  {item}
                </li>
              )
            )}
          </ul>
        </nav>
        <button className="bg-accent text-white py-2 px-4 rounded mt-8 hover:bg-blue-700 transition">
          Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Header */}
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-primary">Welcome Back!</h1>
          <div className="flex items-center gap-4">
            <button className="bg-light p-2 rounded-full shadow">
              <span className="text-gray-600">🔔</span>
            </button>
            <img
              src="https://via.placeholder.com/40"
              alt="Profile"
              className="w-10 h-10 rounded-full"
            />
          </div>
        </header>

        {/* Stats */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {["Revenue", "Users", "Sales", "Orders"].map((stat, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-lg shadow-md text-center"
            >
              <h2 className="text-lg font-medium text-text">{stat}</h2>
              <p className="text-3xl font-bold text-primary mt-2">+124%</p>
            </div>
          ))}
        </section>

        {/* Charts */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
          {/* Line Chart */}
          <div className="bg-card p-8 rounded-lg shadow-md">
            <h2 className="text-lg font-medium text-text mb-4">
              Revenue Over Time
            </h2>
            <Line data={lineData} options={chartOptions} />
          </div>

          {/* Bar Chart */}
          <div className="bg-card p-8 rounded-lg shadow-md">
            <h2 className="text-lg font-medium text-text mb-4">Sales by Product</h2>
            <Bar data={barData} options={chartOptions} />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
