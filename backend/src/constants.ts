import dotenv from "dotenv";
dotenv.config();

export const PORT = process.env.PORT || 8080;
export const ALPHAVINTAGE_API_KEY = process.env.ALPHAVINTAGE_API_KEY || "";
