import express from "express";
import { Server } from "socket.io";
import http from "http";
import cors from "cors";
import { PORT } from "@/constants";
import { getRandomRevenueData } from "@/utils/apis";
import { CronJob } from "cron";

const app = express();
const httpServer = http.createServer(app);

app.use(cors());

const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:3000",
  },
  transports: ["websocket", "polling"],
});

io.on("connection", (socket) => {
  //Cron job execution timing documentation: https://www.easycron.com/faq/What-cron-expression-does-easycron-support
  const job = new CronJob("*/5 * * * * *", async () => {
    const data = await getRandomRevenueData();
    socket.emit("time", data);
  });

  job.start();

  socket.on("disconnect", () => {
    job.stop();
  });
});

httpServer.listen(PORT, () => console.log(`Listenting to ${PORT}`));
