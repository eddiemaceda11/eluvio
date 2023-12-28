import "./Charts.css";

import React, { PureComponent } from "react";
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
// } from "recharts";

import { LineChart, Line, Legend, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const areaData = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const lineData = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default function Charts() {
  // static demoUrl = "https://codesandbox.io/s/tiny-line-chart-r5z0f";

  return (
    <section className="db-charts">
      <ResponsiveContainer
        width="100%"
        height="80%"
      >
        <LineChart
          width={500}
          height={300}
          data={lineData}
          margin={{
            top: 40,
            right: 60,
            left: 10,
            bottom: -20,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="pv"
            stroke="#e63946"
            activeDot={{ r: 8 }}
          />
          <Line
            type="monotone"
            dataKey="amt"
            stroke="#fca311"
            activeDot={{ r: 8 }}
          />
          <Line
            type="monotone"
            dataKey="uv"
            stroke="#90e0ef"
          />
        </LineChart>
      </ResponsiveContainer>

      {/* <ResponsiveContainer width="95%" height="90%">
        <AreaChart
          width={500}
          height={400}
          data={areaData}
          margin={{
            top: 40,
            right: 30,
            left: 20,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="uv"
            stackId="1"
            stroke="#e63946"
            fill="#e63946"
          />
          <Area
            type="monotone"
            dataKey="pv"
            stackId="1"
            stroke="#fca311"
            fill="#fca311"
          />
          <Area
            type="monotone"
            dataKey="amt"
            stackId="1"
            stroke="#90e0ef"
            fill="#90e0ef"
          />
        </AreaChart>
      </ResponsiveContainer> */}
    </section>
  );
}
