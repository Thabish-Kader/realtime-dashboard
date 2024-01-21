"use client";
import React, { useEffect, useState } from "react";
import { socket } from "@/socket";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { AreaChartCanvas } from "./AreaChartCanvas";
import { LineBarAreaComposedChart } from "./LineBarAreaComposedChart";

export const Dashboard = () => {
  const [data, setData] = useState<ServerData[]>([]);
  const dummyData = [
    { user: 958, sys: 716, idle: 667 },
    { user: 958, sys: 716, idle: 667 },
    { user: 562, sys: 216, idle: 666 },
    { user: 562, sys: 216, idle: 666 },
    { user: 737, sys: 533, idle: 756 },
    { user: 737, sys: 533, idle: 756 },
    { user: 255, sys: 235, idle: 864 },
    { user: 255, sys: 235, idle: 864 },
    { user: 925, sys: 797, idle: 393 },
    { user: 925, sys: 797, idle: 393 },
  ];

  useEffect(() => {
    socket.on("time", (serverData) => {
      // NOTE: setData([...data, serverData]) cannot be used here because the data variable inside the callback function refers to the state variable at the time the effect was created. React state updates are asynchronous, and the data variable inside the callback might not have the latest state.
      setData((prevData) => {
        const newData = [...prevData, serverData];
        return newData.slice(Math.max(newData.length - 10, 0));
      });
    });
  }, []);
  console.log(data);

  return (
    <div className="h-[500px] w-screen flex items-center justify-center">
      <AreaChartCanvas data={dummyData} />
      <LineBarAreaComposedChart data={dummyData} />
    </div>
  );
};
