"use client";

import Image from "next/image";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Jan",
    income: 4000,
    expense: 2400,
  },
  {
    name: "Feb",
    income: 3000,
    expense: 1398,
  },
  {
    name: "Mar",
    income: 8000,
    expense: 9800,
  },
  {
    name: "Apr",
    income: 3780,
    expense: 4908,
  },
  {
    name: "May",
    income: 3590,
    expense: 4800,
  },
  {
    name: "Jun",
    income: 7390,
    expense: 8800,
  },
  {
    name: "Jul",
    income: 5490,
    expense: 6300,
  },
  {
    name: "Aug",
    income: 6490,
    expense: 5300,
  },
  {
    name: "Sep",
    income: 6590,
    expense: 7300,
  },
  {
    name: "Oct",
    income: 6390,
    expense: 5300,
  },
  {
    name: "Nov",
    income: 5490,
    expense: 5800,
  },
  {
    name: "Dec",
    income: 4490,
    expense: 5300,
  },
];

const FinanceChart = () => {
  return (
    <div className="bg-white rounded-xl w-full h-full p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Finance</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#ddd" />
          <XAxis
            dataKey="name"
            axisLine={false}
            tick={{ fill: "#6B7280" }}
            tickLine={false}
            tickMargin={10}
          />
          <YAxis axisLine={false} tick={{ fill: "#6B7280" }} tickLine={false}  tickMargin={20}/>
          <Tooltip />
          <Legend
            align="center"
            verticalAlign="top"
            wrapperStyle={{ paddingTop: "10px", paddingBottom: "30px" }}
          />
          <Line
            type="monotone"
            dataKey="income"
            stroke="#99D4EF"
            strokeWidth={5}
          />
          <Line type="monotone" dataKey="expense" stroke="#9CA3AF" strokeWidth={5}/>
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default FinanceChart;
