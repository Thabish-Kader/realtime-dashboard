import { Router } from "express";
import getIBMData from "@/controllers/ibm";

const router = Router();

router.get("/get-ibm-data", getIBMData);

export default router;
