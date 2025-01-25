import express from "express";
import { createServer } from "http";
import morgan from "morgan";

import indexRouter from "./src/routers/index.router.js";
import errorHandler from "./src/middlewares/errorHandler.mid.js";
import pathHandler from "./src/middlewares/pathHandler.mid.js";
import __dirname from "./utils.js";

// tcp server
const server = express();
const port = 8080;  
const ready = () => {
  console.log(`Server running on port ${port}`);
}
const nodeServer = createServer(server);
nodeServer.listen(port, ready);

// middleware
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(morgan("dev"));

//endpoints
server.use("/", indexRouter);
server.use(errorHandler);
server.use(pathHandler);