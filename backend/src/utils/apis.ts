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
