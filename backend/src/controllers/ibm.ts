import { ALPHAVINTAGE_API_KEY } from "@/constants";
import axios from "axios";
import { Request, Response } from "express";

const getIBMData = async (req: Request, res: Response) => {
  try {
    const aplhavantageUrl = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=1min&apikey=${ALPHAVINTAGE_API_KEY}`;
    const response = await axios.get(aplhavantageUrl);
    const { data } = response;
    res.status(200).json({ data: data });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export default getIBMData;
