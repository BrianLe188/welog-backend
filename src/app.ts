import express from "express";
import http from "http";
import mongoose from "mongoose";
import cors from "cors";
import { json } from "body-parser";
import morgan from "morgan";
import clientRoute from "./infrastructure/routes/Client";
import initializeSocket from "./infrastructure/socket";
import initializeCronJobs from "./infrastructure/cron";

const PORT = process.env.PORT || 3000;

const app = express();
const server = http.createServer(app);

app.use(json());
app.use(
    cors({
        origin: "http://localhost:5173",
    }),
);
app.use(
    morgan(":method :url :status :res[content-length] - :response-time ms"),
);

app.use("/v1/api", clientRoute);

mongoose
    .connect("mongodb://localhost:27017/welog")
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.error("Failed to connect to MongoDB", err);
    });

initializeSocket(server);

initializeCronJobs();

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
