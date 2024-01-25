import { randomBytes } from "crypto";

import axios from "axios";
import { ALPHAVINTAGE_API_KEY } from "@/constants";
export const getIBMData = async () => {
  try {
    const aplhavantageUrl = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=1min&apikey=${ALPHAVINTAGE_API_KEY}`;
    const response = await axios.get(aplhavantageUrl);
    const { data } = response;
    return data;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch data");
  }
};

export const getRandomRevenueData = () => {
  const random_data = [
    {
      date: "BHR",
      total_revenue: Math.floor(Math.random() * 10000),
      loss: Math.floor(Math.random() * 10000),
    },
    {
      date: "RAD",
      total_revenue: Math.floor(Math.random() * 10000),
      loss: Math.floor(Math.random() * 10000),
    },
    {
      date: "FDS",
      total_revenue: Math.floor(Math.random() * 10000),
      loss: Math.floor(Math.random() * 10000),
    },
    {
      date: "AVF",
      total_revenue: Math.floor(Math.random() * 10000),
      loss: Math.floor(Math.random() * 10000),
    },
    {
      date: "RTY",
      total_revenue: Math.floor(Math.random() * 10000),
      loss: Math.floor(Math.random() * 10000),
    },
    {
      date: "VFV",
      total_revenue: Math.floor(Math.random() * 10000),
      loss: Math.floor(Math.random() * 10000),
    },
    {
      date: "GFL",
      total_revenue: Math.floor(Math.random() * 10000),
      loss: Math.floor(Math.random() * 1000),
    },
  ];
  return new Promise((resolve, reject) => {
    const revenueData = random_data.map((item) => {
      const profit = item.total_revenue - item.loss;
      return { ...item, profit };
    });
    if (Object.keys(random_data).length > 0) {
      resolve(revenueData);
    } else {
      reject(new Error("Profit cannot be negative."));
    }
  });
};
