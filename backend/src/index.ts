import express from "express";
import { Server } from "socket.io";
import http from "http";
import cors from "cors";
import { PORT } from "@/constants";

import os from "os";

const app = express();
const httpServer = http.createServer(app);

app.use(cors());

const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:3000",
  },
  transports: ["websocket", "polling"],
});

io.on("connection", async (socket) => {
  setInterval(() => {
    const data = {
      user: Math.floor(Math.random() * 1000),
      sys: Math.floor(Math.random() * 1000),
      idle: Math.floor(Math.random() * 1000),
    };
    socket.emit("time", data);
  }, 1000);
});

httpServer.listen(4000, () => console.log(`Listenting to ${4000}`));
