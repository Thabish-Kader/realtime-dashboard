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
  PieChart,
} from "recharts";
import { AreaChartCanvas } from "./AreaChartCanvas";
import { BarChartCanvas } from "./BarChartCanvas";
import { PieChartCanvas } from "./PieChartCanvas";
import { DomainRadarChart } from "./DomainRadarChart";
import { DashBoardCards } from "./DashBoardCards";

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

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center ">
      <div className="flex items-center h-[500px] w-full">
        <BarChartCanvas data={dummyData} />
        <DashBoardCards />
        <div className="flex flex-col items-center h-full w-full">
          <PieChartCanvas />
          <DomainRadarChart />
        </div>
      </div>
      <div className="h-[300px] w-full">
        <AreaChartCanvas data={dummyData} />
      </div>
    </div>
  );
};
