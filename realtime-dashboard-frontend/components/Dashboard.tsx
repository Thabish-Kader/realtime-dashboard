"use client";
import React, { useEffect, useState } from "react";
import { socket } from "@/socket";
import { AreaChartCanvas } from "./AreaChartCanvas";
import { BarChartCanvas } from "./BarChartCanvas";
import { PieChartCanvas } from "./PieChartCanvas";
import { DomainRadarChart } from "./DomainRadarChart";
import { DashBoardCards } from "./DashBoardCards";

export const Dashboard = () => {
  const [data, setData] = useState<ServerData[]>([]);
  const [percentageChange, setPercentageChange] = useState<Change | null>(null);

  useEffect(() => {
    let previousData: ServerData[] = [];

    const handleSocketData = (serverData: ServerData[]) => {
      if (previousData.length > 0) {
        // Calculate percentage change
        const previousTotalRevenue = previousData.reduce(
          (acc, curr) => acc + curr.total_revenue,
          0
        );
        const currentTotalRevenue = serverData.reduce(
          (acc, curr) => acc + curr.total_revenue,
          0
        );
        const changeTotalRevenue =
          ((currentTotalRevenue - previousTotalRevenue) /
            previousTotalRevenue) *
          100;

        // Calculate the total_loss accumulation previous iteration
        const previousTotalLoss = previousData.reduce(
          (acc, curr) => acc + curr.loss,
          0
        );
        const currentTotalLoss = serverData.reduce(
          (acc, curr) => acc + curr.loss,
          0
        );
        const changeLoss =
          ((currentTotalLoss - previousTotalLoss) / previousTotalLoss) * 100;

        // Calculate the total_profits accumulation compared to the previous iteration
        const previousTotalProfits = previousData.reduce(
          (acc, curr) => acc + curr.loss,
          0
        );
        const currentTotalProfits = serverData.reduce(
          (acc, curr) => acc + curr.loss,
          0
        );
        const changeProfit =
          ((currentTotalProfits - previousTotalProfits) /
            previousTotalProfits) *
          100;

        const change = { changeTotalRevenue, changeLoss, changeProfit };
        setPercentageChange(change);
      }
      setData(serverData);
      previousData = serverData;
    };

    // socket.on("time", (data) => handleSocketData(data));
    socket.on("time", handleSocketData);

    return () => {
      socket.off("time", handleSocketData);
    };
  }, []);

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center p-4">
      <div className="flex items-center h-[500px] w-full">
        <BarChartCanvas data={data} />
        <DashBoardCards data={data} percentageChange={percentageChange} />
        <div className="flex flex-col items-center h-full w-full">
          <PieChartCanvas data={data} />
          <DomainRadarChart data={data} />
        </div>
      </div>
      <div className="h-[300px] w-full">
        <AreaChartCanvas data={data} />
      </div>
    </div>
  );
};
